import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fromBase64, toBase64, utf8, fromUtf8 } from '../src/encoding.ts';
import { aad, EnvelopeError, open, parseEnvelope, seal, type Envelope } from '../src/envelope.ts';

// Smallest parameters the spec accepts, to keep tests quick.
const FAST = { argon2: { m: 19456, t: 2 } };
const secret = utf8('legal winner thank year wave sausage worth useful legal winner thank yellow');

async function rejects(p: Promise<unknown>, code: string) {
  await assert.rejects(p, (e: unknown) => e instanceof EnvelopeError && e.code === code);
}

test('base64 round-trips and rejects non-canonical input', () => {
  for (let n = 0; n < 40; n++) {
    const bytes = Uint8Array.from({ length: n }, (_, i) => (i * 37 + n) & 255);
    assert.deepEqual(fromBase64(toBase64(bytes)), bytes);
    assert.equal(toBase64(bytes), Buffer.from(bytes).toString('base64'));
  }
  assert.throws(() => fromBase64('QQ'));
  assert.throws(() => fromBase64('QR=='));
  assert.throws(() => fromBase64('Q?=='));
});

test('passcode envelope: seal and open', async () => {
  const env = await seal('recovery', secret, { type: 'passcode', passcode: '482915' }, FAST);
  assert.equal(env.kdf.alg, 'argon2id');
  assert.equal(fromBase64(env.iv).length, 12);
  const out = await open(JSON.stringify(env), { type: 'passcode', passcode: '482915' }, 'recovery');
  assert.equal(fromUtf8(out), fromUtf8(secret));
});

test('wrong passcode fails with auth', async () => {
  const env = await seal('recovery', secret, { type: 'passcode', passcode: '482915' }, FAST);
  await rejects(open(env, { type: 'passcode', passcode: '482916' }), 'auth');
});

test('every seal uses a fresh salt and IV', async () => {
  const a = await seal('backup', secret, { type: 'passcode', passcode: 'x' }, FAST);
  const b = await seal('backup', secret, { type: 'passcode', passcode: 'x' }, FAST);
  assert.notEqual(a.iv, b.iv);
  assert.notEqual((a.kdf as { salt: string }).salt, (b.kdf as { salt: string }).salt);
  assert.notEqual(a.ct, b.ct);
});

test('changing any header field or ciphertext byte breaks decryption', async () => {
  const env = await seal('recovery', secret, { type: 'passcode', passcode: '1234' }, { argon2: { m: 19456, t: 3 } });
  const pw = { type: 'passcode' as const, passcode: '1234' };
  const ct = fromBase64(env.ct);
  ct[3]! ^= 1;
  const tampered: Envelope[] = [
    { ...env, ct: toBase64(ct) },
    { ...env, kind: 'backup' },
    { ...env, kdf: { ...(env.kdf as object), t: 2 } as Envelope['kdf'] },
  ];
  for (const t of tampered) await rejects(open(t, pw), 'auth');
});

test('weak or dangerous parameters are refused before any work', () => {
  const base = {
    format: 'foxsafe-envelope', v: 1, kind: 'backup', cipher: 'aes-256-gcm',
    iv: toBase64(new Uint8Array(12)), ct: toBase64(new Uint8Array(32)),
  };
  const kdf = { alg: 'argon2id', version: 19, m: 65536, t: 3, p: 1, salt: toBase64(new Uint8Array(16)) };
  const bad = [
    { ...kdf, m: 1024 }, // too little memory: easy to brute-force
    { ...kdf, m: 4 * 1024 * 1024 }, // 4 GiB: would crash the phone
    { ...kdf, t: 1 },
    { ...kdf, p: 4 },
    { ...kdf, version: 16 },
    { ...kdf, salt: toBase64(new Uint8Array(8)) },
    { alg: 'scrypt' },
  ];
  for (const k of bad) assert.throws(() => parseEnvelope({ ...base, kdf: k }), EnvelopeError);
  assert.throws(() => parseEnvelope({ ...base, kdf, iv: toBase64(new Uint8Array(16)) }), EnvelopeError);
  assert.throws(() => parseEnvelope({ ...base, kdf, cipher: 'aes-128-gcm' }), EnvelopeError);
  assert.throws(() => parseEnvelope({ ...base, kdf, v: 2 }), EnvelopeError);
  assert.throws(() => parseEnvelope('not json'), EnvelopeError);
  assert.ok(parseEnvelope({ ...base, kdf }));
});

test('passkey (PRF) envelope', async () => {
  const prf = new Uint8Array(32).fill(7);
  const env = await seal('backup', secret, { type: 'prf', prf });
  assert.equal(env.kdf.alg, 'hkdf-sha256');
  assert.equal(fromUtf8(await open(env, { type: 'prf', prf })), fromUtf8(secret));
  await rejects(open(env, { type: 'prf', prf: new Uint8Array(32).fill(8) }), 'auth');
  await rejects(open(env, { type: 'passcode', passcode: 'x' }), 'key-type');
});

test('device-key envelope', async () => {
  const key = new Uint8Array(32).fill(9);
  const env = await seal('device', secret, { type: 'key', key });
  assert.equal(env.kdf.alg, 'none');
  assert.equal(fromUtf8(await open(env, { type: 'key', key })), fromUtf8(secret));
  assert.equal(key[0], 9, 'caller key is not wiped');
  await rejects(open(env, { type: 'key', key: new Uint8Array(16) }), 'key-type');
});

test('AAD layout matches the spec', () => {
  const s = new TextDecoder().decode(
    aad({ kind: 'recovery', iv: 'AAAAAAAAAAAAAAAA', kdf: { alg: 'argon2id', version: 19, m: 65536, t: 3, p: 1, salt: 'AAAAAAAAAAAAAAAAAAAAAA==' } }),
  );
  assert.equal(s, 'foxsafe-envelope|1|recovery|argon2id|19|65536|3|1|AAAAAAAAAAAAAAAAAAAAAA==|AAAAAAAAAAAAAAAA');
});
