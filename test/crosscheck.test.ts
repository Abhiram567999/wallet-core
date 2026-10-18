// The iOS build derives passcode keys with libsodium. This proves libsodium
// and the JavaScript reference give the same Argon2id key, so a recovery copy
// made on one platform opens on the other.

import assert from 'node:assert/strict';
import { test } from 'node:test';
import sodium from 'libsodium-wrappers-sumo';
import { argon2id } from '@noble/hashes/argon2.js';
import { gcm } from '@noble/ciphers/aes.js';
import { createCipheriv } from 'node:crypto';
import { toHex, utf8 } from '../src/encoding.ts';

test('Argon2id: noble equals libsodium', async () => {
  await sodium.ready;
  const cases = [
    { pw: '482915', m: 19456, t: 2 },
    { pw: 'correct horse battery staple', m: 65536, t: 3 },
    { pw: 'पासवर्ड-密码-🔑', m: 19456, t: 4 },
  ];
  for (const { pw, m, t } of cases) {
    const salt = Uint8Array.from({ length: 16 }, (_, i) => i * 11);
    const a = argon2id(utf8(pw), salt, { m, t, p: 1, dkLen: 32 });
    const b = sodium.crypto_pwhash(32, utf8(pw), salt, t, m * 1024, sodium.crypto_pwhash_ALG_ARGON2ID13);
    assert.equal(toHex(a), toHex(b), `mismatch for ${pw}`);
  }
});

test('AES-256-GCM: noble equals OpenSSL', () => {
  const key = Uint8Array.from({ length: 32 }, (_, i) => i);
  const iv = Uint8Array.from({ length: 12 }, (_, i) => 100 + i);
  const ad = utf8('foxsafe-envelope|1|device|none|ZGVm');
  const msg = utf8('abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about');
  const c = createCipheriv('aes-256-gcm', key, iv);
  c.setAAD(ad);
  const ossl = Buffer.concat([c.update(msg), c.final(), c.getAuthTag()]);
  assert.equal(toHex(gcm(key, iv, ad).encrypt(msg)), ossl.toString('hex'));
});
