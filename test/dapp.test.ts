// dApp signatures (SPEC §7.9): Trust Wallet Core's signers (the ones the native signDapp* functions use) must give
// the independent viem / noble signatures for every allowed vector, and EVM dApp transactions built by evmDappInput
// must compile through the same pre-image path the native signer uses. The refusals themselves run natively in the
// on-device self-test.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { initWasm, TW } from '@trustwallet/wallet-core';
import { ed25519 } from '@noble/curves/ed25519.js';
import { evmDappInput } from '../src/tx.ts';
import { fromBase64 } from '../src/encoding.ts';

const v = JSON.parse(readFileSync(new URL('./vectors/dapp.json', import.meta.url), 'utf8'));
const words = JSON.parse(readFileSync(new URL('./vectors/derivation.json', import.meta.url), 'utf8')).mnemonic[0].words;
const core = await initWasm();
const { CoinType, HDWallet, EthereumMessageSigner, TronMessageSigner, AnyAddress, TransactionCompiler, DataVector, Curve, Base58 } = core;
const wallet = HDWallet.createWithMnemonic(words, '');
const evmKey = wallet.getKeyForCoin(CoinType.ethereum);
const tronKey = wallet.getKeyForCoin(CoinType.tron);
const solKey = wallet.getKeyForCoin(CoinType.solana);
const fixV = (sig: string) => {
  let s = sig.replace(/^0x/, '');
  const b = parseInt(s.slice(128), 16);
  if (b < 27) s = s.slice(0, 128) + (b + 27).toString(16);
  return `0x${s}`;
};

test('dApp vectors: accounts match the test phrase', () => {
  assert.equal(AnyAddress.createWithPublicKey(evmKey.getPublicKeySecp256k1(false), CoinType.ethereum).description().toLowerCase(), v.evm.address.toLowerCase());
  assert.equal(AnyAddress.createWithPublicKey(tronKey.getPublicKeySecp256k1(false), CoinType.tron).description(), v.tron.address);
  assert.equal(Base58.encodeNoCheck(solKey.getPublicKeyEd25519().data()), v.solana.address);
});

test('dApp messages: Trust Wallet Core signs the exact bytes like viem (also text that starts with 0x)', () => {
  for (const m of v.evm.messages.allowed) {
    assert.equal(fixV(EthereumMessageSigner.signMessage(evmKey, m.hex)).toLowerCase(), m.signature.toLowerCase(), m.what);
  }
  assert.ok(v.evm.messages.refused.length >= 9);
});

test('dApp typed data: Trust Wallet Core signs like viem (Permit, Permit2, Snapshot without a network, Seaport)', () => {
  for (const t of v.evm.typedData.allowed) {
    assert.equal(fixV(EthereumMessageSigner.signTypedMessage(evmKey, t.typedData)).toLowerCase(), t.signature.toLowerCase(), t.what);
  }
  for (const r of v.evm.typedData.refused) assert.doesNotThrow(() => JSON.parse(r.typedData), r.what);
});

test('dApp TRON message: Trust Wallet Core uses TronWeb signMessageV2 layout', () => {
  const text = Buffer.from(v.tron.message.hex.slice(2), 'hex').toString('utf8');
  assert.equal(fixV(TronMessageSigner.signMessage(tronKey, text)).toLowerCase(), v.tron.message.signature.toLowerCase());
});

test('dApp Solana: raw ed25519 signature of the message bytes verifies (what signDappSolana signs)', () => {
  const msg = new TextEncoder().encode('Sign in to example.org');
  const sig = solKey.sign(msg, Curve.ed25519);
  assert.ok(ed25519.verify(sig, msg, solKey.getPublicKeyEd25519().data()));
});

test('dApp EVM transactions: transfer, contract call, legacy and deployment compile on the native path', () => {
  const to = '0x000000000000000000000000000000000000bEEF';
  const cases = [
    { what: 'EIP-1559 transfer', input: evmDappInput({ chainId: 1n, nonce: 1n, gasLimit: 21000n, maxFeePerGas: 30_000_000_000n, maxPriorityFeePerGas: 1_000_000_000n, to, value: 10n ** 15n }) },
    { what: 'contract call', input: evmDappInput({ chainId: 8453n, nonce: 2n, gasLimit: 90000n, maxFeePerGas: 1_000_000n, maxPriorityFeePerGas: 1_000n, to, value: 0n, data: '0xa9059cbb' + '00'.repeat(64) }) },
    { what: 'legacy (gasPrice)', input: evmDappInput({ chainId: 56n, nonce: 3n, gasLimit: 21000n, gasPrice: 1_000_000_000n, to, value: 1n }) },
    { what: 'contract deployment', input: evmDappInput({ chainId: 1n, nonce: 4n, gasLimit: 500000n, maxFeePerGas: 1n, maxPriorityFeePerGas: 1n, value: 0n, data: '0x6080604052' }) },
  ];
  for (const c of cases) {
    const data = fromBase64(c.input);
    const out = TW.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(CoinType.ethereum, data));
    assert.equal(out.error, 0, `${c.what}: ${out.errorMessage}`);
    const sig = evmKey.sign(out.dataHash, Curve.secp256k1);
    const sigs = DataVector.createWithData(sig);
    const pubs = DataVector.createWithData(evmKey.getPublicKeySecp256k1(false).data());
    const signed = TransactionCompiler.compileWithSignatures(CoinType.ethereum, data, sigs, pubs);
    assert.ok(signed.length > 60, c.what);
  }
});
