// Turns wallet records into envelope plaintext and back, with strict checks
// on what comes out of a decrypted file.

import { fromUtf8, utf8 } from './encoding.ts';
import { open, seal, type EnvelopeKind, type KeySource, type SealOptions } from './envelope.ts';
import type { VaultPayload, WalletRecord } from './types.ts';

export class VaultError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'VaultError';
  }
}

function checkRecord(w: unknown, i: number): WalletRecord {
  // Explicit type so TypeScript treats calls as never-returning.
  const bad: (what: string) => never = (what) => {
    throw new VaultError(`wallet ${i}: ${what}`);
  };
  if (typeof w !== 'object' || w === null) bad('not an object');
  const r = w as Record<string, unknown>;
  if (typeof r.id !== 'string' || r.id === '') bad('id');
  if (typeof r.name !== 'string') bad('name');
  if (r.kind !== 'multi' && r.kind !== 'single') bad('kind');
  if (!Array.isArray(r.coins) || !r.coins.every((c) => Number.isInteger(c) && c >= 0)) bad('coins');
  if (typeof r.createdAt !== 'string') bad('createdAt');
  const s = r.secret as Record<string, unknown> | undefined;
  if (typeof s !== 'object' || s === null) bad('secret');
  if (s.type === 'mnemonic') {
    if (typeof s.words !== 'string' || ![12, 15, 18, 21, 24].includes(s.words.trim().split(/\s+/).length)) bad('mnemonic');
    if (s.passphrase !== undefined && typeof s.passphrase !== 'string') bad('passphrase');
  } else if (s.type === 'privateKey') {
    if (typeof s.hex !== 'string' || !/^[0-9a-f]{64}$/.test(s.hex)) bad('private key');
    if (!Number.isInteger(s.coin)) bad('private key coin');
    if (r.kind !== 'single') bad('a private-key wallet must be single-chain');
  } else {
    bad('unknown secret type');
  }
  if (r.kind === 'single' && (r.coins as unknown[]).length !== 1) bad('a single-chain wallet has exactly one coin');
  return r as unknown as WalletRecord;
}

export function encodeVault(wallets: WalletRecord[]): Uint8Array {
  wallets.forEach(checkRecord);
  const payload: VaultPayload = { v: 1, wallets };
  return utf8(JSON.stringify(payload));
}

export function decodeVault(bytes: Uint8Array): VaultPayload {
  let raw: unknown;
  try {
    raw = JSON.parse(fromUtf8(bytes));
  } catch {
    throw new VaultError('decrypted data is not valid JSON');
  }
  const p = raw as Record<string, unknown>;
  if (p?.v !== 1 || !Array.isArray(p.wallets)) throw new VaultError('unsupported vault version');
  return { v: 1, wallets: p.wallets.map(checkRecord) };
}

export async function sealVault(kind: EnvelopeKind, wallets: WalletRecord[], source: KeySource, opts?: SealOptions) {
  if (kind === 'device' && wallets.length !== 1) throw new VaultError('a device envelope holds exactly one wallet');
  return seal(kind, encodeVault(wallets), source, opts);
}

export async function openVault(input: string, source: KeySource, expectKind?: EnvelopeKind): Promise<VaultPayload> {
  return decodeVault(await open(input, source, expectKind));
}
