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
