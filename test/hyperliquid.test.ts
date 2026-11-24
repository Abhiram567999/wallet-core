// Hyperliquid account actions (SPEC §7.17): every refused sample in the vector file is caught, typed data that only
// shares a generic name ("Exchange", "Agent") and every allowed dApp typed data pass, the Swift and Kotlin copies use
// the same constants and run inside typedDataProblem, and the self-test samples are exactly the vector file.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { HYPERLIQUID_DOMAIN, HYPERLIQUID_L1_CHAIN_ID, HYPERLIQUID_L1_DOMAIN, HYPERLIQUID_L1_TYPE, HYPERLIQUID_TYPE_PREFIX, isHyperliquidTypedData } from '../src/hyperliquidTypedData.ts';
import { HYPERLIQUID_REFUSED } from '../src/hyperliquidTypedDataSamples.ts';

const load = (f: string) => JSON.parse(readFileSync(new URL(`./vectors/${f}`, import.meta.url), 'utf8'));
const v = load('hyperliquid.json') as { refused: { what: string; typedData: string }[]; allowed: { what: string; typedData: string }[] };
const dapp = load('dapp.json');

test('Hyperliquid: every refused sample is caught', () => {
  assert.ok(v.refused.length >= 15);
  for (const r of v.refused) assert.ok(isHyperliquidTypedData(JSON.parse(r.typedData)), r.what);
  // Every user-signed action of the SDK, plus the L1 form, is in the file.
  for (const a of ['UsdSend', 'SpotSend', 'Withdraw', 'SendAsset', 'ApproveAgent', 'ApproveBuilderFee', 'UsdClassTransfer']) {
    assert.ok(v.refused.some((r) => JSON.parse(r.typedData).primaryType === `HyperliquidTransaction:${a}`), a);
  }
  assert.ok(v.refused.some((r) => JSON.parse(r.typedData).primaryType === 'Agent' && JSON.parse(r.typedData).domain.chainId === 1337));
});

test('Hyperliquid: allowed samples and every typed data dApps may sign pass', () => {
  for (const a of v.allowed) assert.ok(!isHyperliquidTypedData(JSON.parse(a.typedData)), a.what);
  for (const t of [...dapp.evm.typedData.allowed, ...dapp.evm.typedData.refused]) assert.ok(!isHyperliquidTypedData(JSON.parse(t.typedData)), t.what);
  assert.equal(isHyperliquidTypedData({}), false);
  assert.equal(isHyperliquidTypedData({ domain: null }), false);
});

test('Hyperliquid: the native copies use the same constants and run in typedDataProblem before the network check', () => {
  const swift = readFileSync(new URL('../ios/WalletStore.swift', import.meta.url), 'utf8');
  const kotlin = readFileSync(new URL('../android/src/main/java/app/foxsafe/walletcore/WalletStore.kt', import.meta.url), 'utf8');
  for (const [name, value] of [['domainName', HYPERLIQUID_DOMAIN], ['typePrefix', HYPERLIQUID_TYPE_PREFIX], ['l1DomainName', HYPERLIQUID_L1_DOMAIN], ['l1Type', HYPERLIQUID_L1_TYPE]] as const) {
    assert.ok(swift.includes(`static let ${name} = "${value}"`), `Swift ${name}`);
    const k = name.replace(/[A-Z]/g, (c) => `_${c}`).toUpperCase();
    assert.ok(kotlin.includes(`const val ${k} = "${value}"`), `Kotlin ${k}`);
  }
  assert.ok(swift.includes(`static let l1ChainId: UInt64 = ${HYPERLIQUID_L1_CHAIN_ID}`));
  assert.ok(kotlin.includes(`const val L1_CHAIN_ID = ${HYPERLIQUID_L1_CHAIN_ID}L`));
  // Called once, inside typedDataProblem, before its network check.
  const body = (src: string, start: string) => src.slice(src.indexOf(start), src.indexOf('it is for another network', src.indexOf(start)));
  assert.equal(swift.split('HyperliquidTypedData.isAction(domain: domain, primary: primary)').length - 1, 1);
  assert.equal(kotlin.split('isHyperliquidAction(domain, primary)').length - 1, 1);
  assert.ok(body(swift, 'static func typedDataProblem').includes('HyperliquidTypedData.isAction('), 'Swift: not before the network check');
  assert.ok(body(kotlin, 'private fun typedDataProblem').includes('isHyperliquidAction('), 'Kotlin: not before the network check');
  // The refusal says "Hyperliquid account action" (the self-test looks for it) and is the same on both platforms.
  const msg = (src: string, re: RegExp) => src.match(re)?.[1];
  const s = msg(swift, /static let refusal = "([^"]+)"/);
  assert.ok(s?.includes('Hyperliquid account action'));
  assert.equal(msg(kotlin, /const val REFUSAL = "([^"]+)"/), s);
});

test('Hyperliquid: the self-test samples are exactly the vector file', () => {
  assert.deepEqual(HYPERLIQUID_REFUSED, v.refused);
});

// Repeated keys (SPEC §7.17): JavaScript keeps the last copy and Apple's reader the first, so signDappTypedData
// refuses any typed data that repeats a key, before parsing it.
test('repeated keys: every sample is caught; keys repeated in different objects, arrays or strings are not', async () => {
  const { jsonRepeatsKey, REPEATED_KEY_SAMPLES } = await import('../src/jsonKeys.ts');
  assert.ok(REPEATED_KEY_SAMPLES.length >= 4);
  for (const s of REPEATED_KEY_SAMPLES) {
    assert.ok(jsonRepeatsKey(s.typedData), s.what);
    JSON.parse(s.typedData); // valid JSON: only the repeat is wrong
  }
  assert.ok(!jsonRepeatsKey('{"a":{"name":1},"b":{"name":2},"c":[{"name":3},{"name":4}],"d":"\\"name\\":1,\\"name\\":2"}'));
  assert.ok(jsonRepeatsKey('{"a":1,"b":{"x":[1,{"y":2,"y":3}]}}'));
  assert.ok(jsonRepeatsKey('{"\\n":1,"\\u000a":2}'));
  // Every typed data dApps sign today (and the Hyperliquid samples) has no repeated key.
  for (const t of [...dapp.evm.typedData.allowed, ...dapp.evm.typedData.refused, ...v.refused, ...v.allowed]) assert.ok(!jsonRepeatsKey(t.typedData), t.what);
});

test('repeated keys: Swift and Kotlin refuse them first thing in signDappTypedData, before parsing', () => {
  const swift = readFileSync(new URL('../ios/WalletStore.swift', import.meta.url), 'utf8');
  const kotlin = readFileSync(new URL('../android/src/main/java/app/foxsafe/walletcore/WalletStore.kt', import.meta.url), 'utf8');
  const why = 'it gives the same field twice, so it could show one thing and sign another';
  const before = (src: string, fn: string, call: string, parse: string) => {
    const at = src.indexOf(fn);
    const c = src.indexOf(call, at);
    return at >= 0 && c > at && c < src.indexOf(parse, at);
  };
  assert.ok(before(swift, 'func signDappTypedData(', `if Self.jsonRepeatsKey(typedData) { throw bad("${why}") }`, 'JSONSerialization.jsonObject'));
  assert.ok(before(kotlin, 'fun signDappTypedData(', `if (jsonRepeatsKey(typedData)) throw bad("${why}")`, 'JSONObject(typedData)'));
  assert.ok(swift.includes('static func jsonRepeatsKey(_ text: String) -> Bool'));
  assert.ok(kotlin.includes('private fun jsonRepeatsKey(text: String): Boolean'));
});
