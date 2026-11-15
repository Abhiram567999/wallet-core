// Polymarket signatures (SPEC §7.11). The main risk: Trust Wallet Core's EIP-712 signer (the one the native
// signPolymarket uses) must hash nested structs (TypedDataSign → Order, ERC-7739) and arrays of structs with
// bytes (Batch → Call[]) exactly like viem. Checked for every allowed vector, both as the app sends it and in
// the canonical form the native code rebuilds and actually signs (uints as decimal strings, lowercase hex).
// The refusals themselves run natively in the on-device self-test; here we check the native sources carry
// every expected reason, the same addresses on iOS and Android, and selectors equal to keccak256(signature).

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { initWasm } from '@trustwallet/wallet-core';

const v = JSON.parse(readFileSync(new URL('./vectors/polymarket.json', import.meta.url), 'utf8'));
const words = JSON.parse(readFileSync(new URL('./vectors/derivation.json', import.meta.url), 'utf8')).mnemonic[0].words;
const swift = readFileSync(new URL('../ios/WalletStore.swift', import.meta.url), 'utf8');
const kotlin = readFileSync(new URL('../android/src/main/java/app/foxsafe/walletcore/WalletStore.kt', import.meta.url), 'utf8');
const core = await initWasm();
const { CoinType, HDWallet, EthereumMessageSigner, AnyAddress } = core;
const key = HDWallet.createWithMnemonic(words, '').getKeyForCoin(CoinType.polygon);

const twcSign = (json: string) => {
  let sig = EthereumMessageSigner.signTypedMessage(key, json).replace(/^0x/, '');
  const vByte = parseInt(sig.slice(128), 16);
  if (vByte < 27) sig = sig.slice(0, 128) + (vByte + 27).toString(16);
  return `0x${sig}`;
};

type Field = { name: string; type: string };
/** What the native code signs: same values, uints as decimal strings, hex lowercase, types rebuilt. */
function canonical(td: { types: Record<string, Field[]>; domain: Record<string, unknown>; primaryType: string; message: Record<string, unknown> }) {
  const conv = (type: string, x: unknown): unknown => {
    if (type.endsWith('[]')) return (x as unknown[]).map((y) => conv(type.slice(0, -2), y));
    const struct = td.types[type];
    if (struct) return Object.fromEntries(struct.map((f) => [f.name, conv(f.type, (x as Record<string, unknown>)[f.name])]));
    if (type.startsWith('uint')) return BigInt(x as string | number).toString();
    if (type === 'address' || type.startsWith('bytes')) return (x as string).toLowerCase();
    return x;
  };
  const types = Object.fromEntries(Object.entries(td.types).map(([k, fs]) => [k, fs.map((f) => ({ name: f.name, type: f.type }))]));
  return JSON.stringify({ primaryType: td.primaryType, types, domain: conv('EIP712Domain', td.domain), message: conv(td.primaryType, td.message) });
}

test('Polymarket vectors: Trust Wallet Core signs login, order (nested TypedDataSign) and batch (Call[]) exactly like viem', () => {
  assert.equal(AnyAddress.createWithPublicKey(key.getPublicKeySecp256k1(false), CoinType.polygon).description().toLowerCase(), v.signer.toLowerCase());
  const kinds = new Set<string>();
  for (const a of v.allowed) {
    kinds.add(a.request.kind);
    assert.equal(twcSign(a.typedData), a.signature.toLowerCase(), `${a.what} (as sent)`);
    assert.equal(twcSign(canonical(JSON.parse(a.typedData))), a.signature.toLowerCase(), `${a.what} (canonical)`);
  }
  assert.deepEqual([...kinds].sort(), ['batch', 'login', 'order']);
});

test('Polymarket vectors: a changed nested value changes the signature (the nested data is really hashed)', () => {
  const order = JSON.parse(v.allowed.find((a: { request: { kind: string } }) => a.request.kind === 'order').typedData);
  order.message.contents.makerAmount = '5500001';
  const batch = JSON.parse(v.allowed.find((a: { request: { kind: string } }) => a.request.kind === 'batch').typedData);
  batch.message.calls[0].data = batch.message.calls[0].data.slice(0, -1) + (batch.message.calls[0].data.endsWith('f') ? 'e' : 'f');
  for (const [td, what] of [[order, 'order'], [batch, 'batch']] as const) {
    const sig = twcSign(JSON.stringify(td));
    assert.equal(sig.length, 132, what);
    assert.ok(!v.allowed.some((a: { signature: string }) => a.signature.toLowerCase() === sig), `${what}: signature did not change`);
  }
});

test('Polymarket rule: selectors are keccak256 of their signatures, the same on iOS and Android', () => {
  const sel = (src: string) => [...src.matchAll(/"([0-9a-f]{8})"\s*\/\/ (\w+\([^)]*\))/g)].map((m) => [m[1]!, m[2]!] as const);
  const ios = sel(swift);
  const android = sel(kotlin);
  assert.equal(ios.length, 6);
  assert.deepEqual(android, ios);
  for (const [hex, sig] of ios) assert.equal(Buffer.from(keccak_256(new TextEncoder().encode(sig)).slice(0, 4)).toString('hex'), hex, sig);
});

test('Polymarket rule: iOS and Android carry the same contracts, builder code and every refusal reason', () => {
  const policy = (src: string, start: string, end: string) => src.slice(src.indexOf(start), src.indexOf(end, src.indexOf(start)));
  const iosPolicy = policy(swift, 'enum PolymarketPolicy', 'static func pmUint');
  const androidPolicy = policy(kotlin, 'object PolymarketPolicy', 'private fun pmUint');
  const addresses = (s: string) => new Set([...s.matchAll(/"(0x[0-9a-f]{40})"/g)].map((m) => m[1]!));
  assert.equal(addresses(iosPolicy).size, 14);
  assert.deepEqual(addresses(androidPolicy), addresses(iosPolicy));
  const used = JSON.stringify(v.allowed).toLowerCase();
  for (const a of addresses(iosPolicy)) assert.ok(used.includes(a.slice(2)), `${a} is not used by any allowed vector`);
  const builder = (s: string, re: RegExp) => s.match(re)?.[1];
  assert.equal(builder(iosPolicy, /static let builderCode = "([^"]*)"/), builder(androidPolicy, /const val BUILDER_CODE = "([^"]*)"/));
  const iosRule = policy(swift, 'enum PolymarketPolicy', '// MARK: TRON multisig');
  const androidRule = policy(kotlin, 'object PolymarketPolicy', '// MARK: TRON multisig');
  assert.ok(v.refused.length >= 30);
  for (const r of v.refused) {
    assert.doesNotThrow(() => JSON.parse(r.typedData), r.what);
    const lit = JSON.stringify(r.reason);
    assert.ok(iosRule.includes(`bad(${lit})`), `iOS has no refusal "${r.reason}" (${r.what})`);
    assert.ok(androidRule.includes(`bad(${lit})`), `Android has no refusal "${r.reason}" (${r.what})`);
  }
});
