// Safe owner signatures (SPEC §7.7): Trust Wallet Core's EIP-712 signer (the one the
// native signSafe uses) must give viem's signature for every allowed vector, with
// numbers written as strings the way the app sends them. The refusals themselves run
// natively in the on-device self-test.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { initWasm } from '@trustwallet/wallet-core';

const v = JSON.parse(readFileSync(new URL('./vectors/safe.json', import.meta.url), 'utf8'));
const words = JSON.parse(readFileSync(new URL('./vectors/derivation.json', import.meta.url), 'utf8')).mnemonic[0].words;
const core = await initWasm();
const { CoinType, HDWallet, EthereumMessageSigner, AnyAddress } = core;
const key = HDWallet.createWithMnemonic(words, '').getKeyForCoin(CoinType.ethereum);

test('Safe vectors: Trust Wallet Core signs SafeTx exactly like viem', () => {
  assert.equal(AnyAddress.createWithPublicKey(key.getPublicKeySecp256k1(false), CoinType.ethereum).description().toLowerCase(), v.signer.toLowerCase());
  for (const a of v.allowed) {
    let sig = EthereumMessageSigner.signTypedMessage(key, a.typedData).replace(/^0x/, '');
    const vByte = parseInt(sig.slice(128), 16);
    if (vByte < 27) sig = sig.slice(0, 128) + (vByte + 27).toString(16);
    assert.equal(`0x${sig}`, a.signature.toLowerCase(), a.what);
  }
});

test('Safe vectors: every refused case is a real SafeTx variation', () => {
  assert.ok(v.refused.length >= 10);
  for (const r of v.refused) assert.doesNotThrow(() => JSON.parse(r.typedData), r.what);
});
