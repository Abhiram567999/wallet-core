import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { indexContains } from '../src/addressIndex.ts';
import { openVault, VaultError, encodeVault, decodeVault } from '../src/vault.ts';
import { deriveAll, makeEnvelopes, makeAddressIndex } from '../scripts/make-vectors.ts';
import { makeSigningVector } from '../scripts/signing-vector.ts';

const load = (f: string) => JSON.parse(readFileSync(new URL(`./vectors/${f}`, import.meta.url), 'utf8'));
const hex = (h: string) => Uint8Array.from(Buffer.from(h, 'hex'));

test('addresses match published BIP-44/BIP-84 values', () => {
  const a = load('derivation.json').mnemonic[0].addresses;
  assert.equal(a.ethereum.address, '0x9858EfFD232B4033E47d90003D41EC34EcaEda94');
  assert.equal(a.bitcoin.address, 'bc1qcr8te4kr609gcawutmrza0j4xv80jy8z306fyu');
});

test('Trust Wallet Core still derives exactly the stored addresses (catches upgrade changes)', async () => {
  const fresh = await deriveAll();
  assert.deepEqual(JSON.parse(JSON.stringify(fresh)), load('derivation.json'));
  assert.ok(fresh.coinCount >= 160, `only ${fresh.coinCount} chains`);
});

test('envelope vectors open, and resealing reproduces them byte for byte', async () => {
  const stored = load('envelopes.json');
  assert.deepEqual(JSON.parse(JSON.stringify(await makeEnvelopes())), stored);
  for (const c of stored.cases) {
    const source = c.secret.passcode
      ? { type: 'passcode' as const, passcode: c.secret.passcode }
      : c.secret.prfHex
        ? { type: 'prf' as const, prf: hex(c.secret.prfHex) }
        : { type: 'key' as const, key: hex(c.secret.keyHex) };
    const vault = await openVault(JSON.stringify(c.envelope), source, c.envelope.kind);
    assert.equal(vault.wallets[0]!.id, stored.wallets[0].id, c.name);
  }
});

test('address index finds remembered addresses, ignoring case where allowed', () => {
  const { addresses, index } = load('address-index.json');
  assert.deepEqual(makeAddressIndex(load('derivation.json')), { addresses, index });
  for (const a of addresses) assert.ok(indexContains(index, a), a);
  assert.ok(indexContains(index, `  ${addresses[1].toLowerCase()} `), 'EVM address in lower case');
  assert.ok(indexContains(index, addresses[0].toUpperCase()), 'bech32 in upper case');
  assert.ok(!indexContains(index, addresses[2].toLowerCase()), 'base58 is case-sensitive');
  assert.ok(!indexContains(index, '0x0000000000000000000000000000000000000000'));
  assert.ok(!indexContains(index, ''));
});

test('vault rejects malformed wallet records', () => {
  const ok = load('envelopes.json').wallets;
  assert.equal(decodeVault(encodeVault(ok)).wallets.length, 2);
  const bad = [
    { ...ok[0], secret: { type: 'mnemonic', words: 'one two three' } },
    { ...ok[1], kind: 'multi', coins: [195, 60] }, // private key cannot be multi-chain
    { ...ok[1], secret: { ...ok[1].secret, hex: 'zz' } },
    { ...ok[0], kind: 'single' }, // single-chain with four coins
    { ...ok[0], secret: { type: 'seed', words: 'x' } },
  ];
  for (const w of bad) assert.throws(() => encodeVault([w]), VaultError);
  assert.throws(() => decodeVault(new TextEncoder().encode('{"v":2,"wallets":[]}')), VaultError);
});

test('signing vector reproduces the EIP-155 transaction', async () => {
  assert.deepEqual(await makeSigningVector(), load('signing.json'));
});
