// Reference implementation of the Foxsafe envelope, format v1 (docs/SPEC.md §4).
// The iOS and Android implementations must produce and accept exactly the same
// bytes; test/vectors/envelopes.json pins that down.

import { gcm } from '@noble/ciphers/aes.js';
import { argon2idAsync } from '@noble/hashes/argon2.js';
import { hkdf } from '@noble/hashes/hkdf.js';
import { sha256 } from '@noble/hashes/sha2.js';
import { randomBytes } from '@noble/hashes/utils.js';
import { fromBase64, toBase64, utf8, wipe } from './encoding.ts';

export type EnvelopeKind = 'device' | 'recovery' | 'backup';

export type Argon2idParams = { alg: 'argon2id'; version: 19; m: number; t: number; p: 1; salt: string };
export type HkdfParams = { alg: 'hkdf-sha256'; salt: string };
export type NoKdf = { alg: 'none' };
export type KdfParams = Argon2idParams | HkdfParams | NoKdf;

export interface Envelope {
  format: 'foxsafe-envelope';
  v: 1;
  kind: EnvelopeKind;
  kdf: KdfParams;
  cipher: 'aes-256-gcm';
  iv: string;
  ct: string;
}

/** How to get the 32-byte AES key. */
export type KeySource =
  | { type: 'passcode'; passcode: string }
  | { type: 'prf'; prf: Uint8Array } // passkey PRF output
  | { type: 'key'; key: Uint8Array }; // platform keystore key

export const DEFAULT_ARGON2 = { m: 65536, t: 3 } as const;
export const LIMITS = {
  m: [19456, 1048576],
  t: [2, 10],
  salt: [16, 64],
  argon2Salt: [16, 16], // libsodium (iOS) only takes 16-byte salts
  iv: 12,
} as const;
export const HKDF_INFO = 'foxsafe-envelope-v1';

export type EnvelopeErrorCode = 'format' | 'params' | 'key-type' | 'auth';

/** `auth` means wrong passcode/key OR a modified file; the two cannot be told apart. */
export class EnvelopeError extends Error {
  readonly code: EnvelopeErrorCode;
  constructor(code: EnvelopeErrorCode, message: string) {
    super(message);
    this.name = 'EnvelopeError';
    this.code = code;
  }
}

const KINDS: readonly EnvelopeKind[] = ['device', 'recovery', 'backup'];

export function aad(env: Pick<Envelope, 'kind' | 'kdf' | 'iv'>): Uint8Array {
  const k = env.kdf;
  const kdf =
    k.alg === 'argon2id'
      ? `argon2id|${k.version}|${k.m}|${k.t}|${k.p}|${k.salt}`
      : k.alg === 'hkdf-sha256'
        ? `hkdf-sha256|${k.salt}`
        : 'none';
  return utf8(`foxsafe-envelope|1|${env.kind}|${kdf}|${env.iv}`);
}

function fail(code: EnvelopeErrorCode, message: string): never {
  throw new EnvelopeError(code, message);
}

function isInt(x: unknown, [lo, hi]: readonly [number, number]): x is number {
  return typeof x === 'number' && Number.isInteger(x) && x >= lo && x <= hi;
}

function b64(field: string, value: unknown, [lo, hi]: readonly [number, number]): Uint8Array {
  if (typeof value !== 'string') fail('format', `${field} missing`);
  let bytes: Uint8Array;
  try {
    bytes = fromBase64(value);
  } catch {
    fail('format', `${field} is not canonical base64`);
  }
  if (bytes.length < lo || bytes.length > hi) fail('params', `${field} has wrong length`);
  return bytes;
}

/** Checks every field before any expensive work, so a planted file cannot
 * force weak parameters or make the phone run out of memory. */
export function parseEnvelope(input: string | unknown): Envelope {
  let raw: unknown = input;
  if (typeof input === 'string') {
    try {
      raw = JSON.parse(input);
    } catch {
      fail('format', 'not JSON');
    }
  }
  if (typeof raw !== 'object' || raw === null) fail('format', 'not an object');
  const e = raw as Record<string, unknown>;
  if (e.format !== 'foxsafe-envelope') fail('format', 'not a Foxsafe envelope');
  if (e.v !== 1) fail('format', `unsupported version ${String(e.v)}`);
  if (!KINDS.includes(e.kind as EnvelopeKind)) fail('format', 'unknown kind');
  if (e.cipher !== 'aes-256-gcm') fail('params', 'unsupported cipher');
  b64('iv', e.iv, [LIMITS.iv, LIMITS.iv]);
  b64('ct', e.ct, [16, 16 * 1024 * 1024]);

  const k = e.kdf as Record<string, unknown> | undefined;
  if (typeof k !== 'object' || k === null) fail('format', 'kdf missing');
  let kdf: KdfParams;
  if (k.alg === 'argon2id') {
    if (k.version !== 19) fail('params', 'argon2 version must be 19');
    if (!isInt(k.m, LIMITS.m)) fail('params', 'argon2 memory out of range');
    if (!isInt(k.t, LIMITS.t)) fail('params', 'argon2 iterations out of range');
    if (k.p !== 1) fail('params', 'argon2 parallelism must be 1');
    b64('kdf.salt', k.salt, LIMITS.argon2Salt);
    kdf = { alg: 'argon2id', version: 19, m: k.m, t: k.t, p: 1, salt: k.salt as string };
  } else if (k.alg === 'hkdf-sha256') {
    b64('kdf.salt', k.salt, LIMITS.salt);
    kdf = { alg: 'hkdf-sha256', salt: k.salt as string };
  } else if (k.alg === 'none') {
    kdf = { alg: 'none' };
  } else {
    fail('params', 'unknown kdf');
  }
  return {
    format: 'foxsafe-envelope',
    v: 1,
    kind: e.kind as EnvelopeKind,
    kdf,
    cipher: 'aes-256-gcm',
    iv: e.iv as string,
    ct: e.ct as string,
  };
}

async function deriveKey(kdf: KdfParams, source: KeySource): Promise<Uint8Array> {
  if (kdf.alg === 'argon2id') {
    if (source.type !== 'passcode') fail('key-type', 'this envelope needs a passcode');
    const pw = utf8(source.passcode);
    try {
      return await argon2idAsync(pw, fromBase64(kdf.salt), { m: kdf.m, t: kdf.t, p: kdf.p, dkLen: 32 });
    } finally {
      wipe(pw);
    }
  }
  if (kdf.alg === 'hkdf-sha256') {
    if (source.type !== 'prf') fail('key-type', 'this envelope needs a passkey');
    if (source.prf.length < 32) fail('key-type', 'passkey output too short');
    return hkdf(sha256, source.prf, fromBase64(kdf.salt), utf8(HKDF_INFO), 32);
  }
  if (source.type !== 'key') fail('key-type', 'this envelope needs a device key');
  if (source.key.length !== 32) fail('key-type', 'device key must be 32 bytes');
  return source.key.slice();
}

export interface SealOptions {
  /** Argon2id cost, for passcode envelopes. Defaults to 64 MiB, 3 passes. */
  argon2?: { m: number; t: number };
  /** Test vectors only: fixed salt and IV. Never set these in the app. */
  fixedSalt?: Uint8Array;
  fixedIv?: Uint8Array;
}

export async function seal(
  kind: EnvelopeKind,
  plaintext: Uint8Array,
  source: KeySource,
  opts: SealOptions = {},
): Promise<Envelope> {
  const salt = opts.fixedSalt ?? randomBytes(16);
  const iv = opts.fixedIv ?? randomBytes(LIMITS.iv);
  const kdf: KdfParams =
    source.type === 'passcode'
      ? { alg: 'argon2id', version: 19, ...(opts.argon2 ?? DEFAULT_ARGON2), p: 1, salt: toBase64(salt) }
      : source.type === 'prf'
        ? { alg: 'hkdf-sha256', salt: toBase64(salt) }
        : { alg: 'none' };
  const header = { kind, kdf, iv: toBase64(iv) };
  // Validate our own output with the same rules a reader applies.
  parseEnvelope({ format: 'foxsafe-envelope', v: 1, cipher: 'aes-256-gcm', ct: toBase64(new Uint8Array(16)), ...header });

  const key = await deriveKey(kdf, source);
  try {
    const ct = gcm(key, iv, aad(header)).encrypt(plaintext);
    return { format: 'foxsafe-envelope', v: 1, kind, kdf, cipher: 'aes-256-gcm', iv: header.iv, ct: toBase64(ct) };
  } finally {
    wipe(key);
  }
}

export async function open(input: string | Envelope, source: KeySource, expectKind?: EnvelopeKind): Promise<Uint8Array> {
  const env = parseEnvelope(input);
  if (expectKind && env.kind !== expectKind) fail('format', `expected a ${expectKind} envelope`);
  const key = await deriveKey(env.kdf, source);
  try {
    return gcm(key, fromBase64(env.iv), aad(env)).decrypt(fromBase64(env.ct));
  } catch (err) {
    if (err instanceof EnvelopeError) throw err;
    fail('auth', 'wrong passcode or the file was changed');
  } finally {
    wipe(key);
  }
}
