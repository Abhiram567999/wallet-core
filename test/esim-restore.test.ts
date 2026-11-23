// eSIM restore proof (SPEC §7.15): Trust Wallet Core's signers (the ones the native signEsimRestore uses) must give
// the independent noble signatures in esim-restore.json for the text src/esimRestore.ts builds, and every restore text a
// site could send must trip the dApp refusal while no allowed dApp message does. The native refusals and a
// signEsimRestore round trip run in the on-device self-test.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { initWasm } from '@trustwallet/wallet-core';
import { ed25519 } from '@noble/curves/ed25519.js';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { esimRestoreText, isEsimRestoreCode, isEsimRestorePhone, isEsimRestoreText, ESIM_RESTORE_MARKER } from '../src/esimRestore.ts';
import { isAgentProofText } from '../src/agentProof.ts';
import { base58Decode, base58Encode } from '../src/solana.ts';
import { concat, fromUtf8, toHex, utf8 } from '../src/encoding.ts';
import { SOLANA_PATHS } from '../src/hd.ts';

const load = (f: string) => JSON.parse(readFileSync(new URL(`./vectors/${f}`, import.meta.url), 'utf8'));
const v = load('esim-restore.json');
const dapp = load('dapp.json');
const words = load('derivation.json').mnemonic[0].words;
const core = await initWasm();
const { CoinType, HDWallet, EthereumMessageSigner, TronMessageSigner, AnyAddress, Curve } = core;
const wallet = HDWallet.createWithMnemonic(words, '');
const evmKey = wallet.getKeyForCoin(CoinType.ethereum);
const tronKey = wallet.getKeyForCoin(CoinType.tron);
const fixV = (sig: string) => {
  let s = sig.replace(/^0x/, '');
  const b = parseInt(s.slice(128), 16);
  if (b < 27) s = s.slice(0, 128) + (b + 27).toString(16);
  return `0x${s}`;
};
const hexBytes = (h: string) => Uint8Array.from(Buffer.from(h.replace(/^0x/, ''), 'hex'));
/** The 20-byte account a prefixed (EIP-191 / TRON V2) signature recovers to. */
const recover20 = (prefix: string, text: string, sigHex: string) => {
  const bytes = utf8(text);
  const sig = hexBytes(sigHex);
  const pub = secp256k1.Signature.fromBytes(sig.slice(0, 64), 'compact').addRecoveryBit(sig[64]! - 27)
    .recoverPublicKey(keccak_256(concat(utf8(`${prefix}${bytes.length}`), bytes))).toBytes(false);
  return keccak_256(pub.slice(1)).slice(12);
};

test('eSIM restore: the text is the server template for each address, the fixed code and phone', () => {
  assert.ok(isEsimRestoreCode(v.code));
  assert.ok(isEsimRestorePhone(v.phone));
  for (const k of ['evm', 'tron', 'solana', 'solanaPhantom']) {
    assert.equal(esimRestoreText(v.code, v.phone, v[k].address), v[k].text, k);
    assert.ok(isEsimRestoreText(v[k].text), k);
    assert.ok(!isAgentProofText(v[k].text), k);
    assert.ok(!v[k].text.endsWith('\n') && v[k].text.split('\n').length === 8, k);
  }
  assert.equal(v.site, 'api.thefoxsafe.com');
  assert.ok(v.evm.text.includes(`\nPhone: ${v.phone}\nCode: ${v.code}\nSite: ${v.site}\n`));
});

test('eSIM restore: Trust Wallet Core derives the addresses in the vector', () => {
  assert.equal(AnyAddress.createWithPublicKey(evmKey.getPublicKeySecp256k1(false), CoinType.ethereum).description(), v.evm.address);
  assert.equal(AnyAddress.createWithPublicKey(tronKey.getPublicKeySecp256k1(false), CoinType.tron).description(), v.tron.address);
  for (const k of ['solana', 'solanaPhantom']) {
    const key = wallet.getKey(CoinType.solana, SOLANA_PATHS[v[k].solanaPath as 'trust' | 'phantom']);
    assert.equal(base58Encode(key.getPublicKeyEd25519().data()), v[k].address, k);
  }
  assert.equal(v.evm.address, dapp.evm.address);
  assert.equal(v.tron.address, dapp.tron.address);
  assert.equal(v.solana.address, dapp.solana.address);
});

test('eSIM restore EVM: Trust Wallet Core personal_sign equals noble and recovers to the address', () => {
  const sig = fixV(EthereumMessageSigner.signMessage(evmKey, `0x${toHex(utf8(v.evm.text))}`));
  assert.equal(sig.toLowerCase(), v.evm.signature.toLowerCase());
  assert.equal(`0x${toHex(recover20('\x19Ethereum Signed Message:\n', v.evm.text, v.evm.signature))}`, v.evm.address.toLowerCase());
});

test('eSIM restore TRON: Trust Wallet Core signMessageV2 equals noble and recovers to the address', () => {
  assert.equal(fixV(TronMessageSigner.signMessage(tronKey, v.tron.text)).toLowerCase(), v.tron.signature.toLowerCase());
  const body = new Uint8Array([0x41, ...recover20('\x19TRON Signed Message:\n', v.tron.text, v.tron.signature)]);
  assert.deepEqual(base58Decode(v.tron.address).slice(0, 21), body);
});

test('eSIM restore Solana: Trust Wallet Core ed25519 over the UTF-8 text equals noble and verifies (both paths)', () => {
  for (const k of ['solana', 'solanaPhantom']) {
    const key = wallet.getKey(CoinType.solana, SOLANA_PATHS[v[k].solanaPath as 'trust' | 'phantom']);
    const sig = key.sign(utf8(v[k].text), Curve.ed25519);
    assert.equal(base58Encode(sig), v[k].signature, k);
    assert.ok(ed25519.verify(base58Decode(v[k].signature), utf8(v[k].text), base58Decode(v[k].address)), k);
  }
});

test('eSIM restore: every refused dApp message contains the marker; no allowed dApp message does', () => {
  assert.ok(v.refused.length >= 6);
  for (const r of v.refused) assert.ok(isEsimRestoreText(fromUtf8(hexBytes(r.hex))), r.what);
  for (const m of [...dapp.evm.messages.allowed, dapp.tron.message]) assert.ok(!isEsimRestoreText(fromUtf8(hexBytes(m.hex))), m.what ?? 'TRON message');
  assert.equal(ESIM_RESTORE_MARKER, ESIM_RESTORE_MARKER.toLowerCase());
});

test('eSIM restore: codes outside ^er_[A-Za-z0-9_-]{22}$ and phones outside 64 lowercase hex are refused, including a trailing line break', () => {
  for (const b of v.badCodes) assert.ok(!isEsimRestoreCode(b), JSON.stringify(b));
  for (const b of v.badPhones) assert.ok(!isEsimRestorePhone(b), JSON.stringify(b));
  assert.ok(v.badCodes.includes(`${v.code}\n`));
  assert.ok(v.badPhones.includes(`${v.phone}\n`));
});
