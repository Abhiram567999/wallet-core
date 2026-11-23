// XMTP chat sign-in texts (SPEC §7.15): every identity text a site could send (XMTP's own templates, the attack shape,
// case and place variants, the old V2 texts) trips the dApp refusal, and no allowed dApp message does. The native
// refusals (Swift and Kotlin XmtpIdentity) run in the on-device self-test with the same vector file.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { isXmtpIdentityText, XMTP_IDENTITY_MARKERS } from '../src/xmtpIdentity.ts';
import { XMTP_IDENTITY_REFUSED } from '../src/xmtpIdentityTexts.ts';
import { fromUtf8 } from '../src/encoding.ts';

const load = (f: string) => JSON.parse(readFileSync(new URL(`./vectors/${f}`, import.meta.url), 'utf8'));
const v = load('xmtp-identity.json');
const dapp = load('dapp.json');
const hexBytes = (h: string) => Uint8Array.from(h.replace(/^0x/, '').match(/../g)!.map((b) => parseInt(b, 16)));

test('XMTP identity: every refused text in the vector is caught', () => {
  assert.ok(v.refused.length >= 9);
  for (const r of v.refused) assert.ok(isXmtpIdentityText(r.text), r.what);
});

test('XMTP identity: allowed texts and every allowed dApp message pass', () => {
  for (const a of v.allowed) assert.ok(!isXmtpIdentityText(a.text), a.what);
  for (const m of [...dapp.evm.messages.allowed, dapp.tron.message]) assert.ok(!isXmtpIdentityText(fromUtf8(hexBytes(m.hex))), m.what ?? 'TRON message');
});

test('XMTP identity: the markers are lowercase and the native copies match this file', () => {
  for (const m of XMTP_IDENTITY_MARKERS) assert.equal(m, m.toLowerCase());
  const swift = readFileSync(new URL('../ios/WalletStore.swift', import.meta.url), 'utf8');
  const kotlin = readFileSync(new URL('../android/src/main/java/app/foxsafe/walletcore/WalletStore.kt', import.meta.url), 'utf8');
  const list = XMTP_IDENTITY_MARKERS.map((m) => `"${m}"`).join(', ');
  assert.ok(swift.includes(`static let markers = [${list}]`), 'Swift markers differ');
  assert.ok(kotlin.includes(`val MARKERS = listOf(${list})`), 'Kotlin markers differ');
  // Both dApp message signers (EVM/TRON and Solana) check it, on both platforms.
  assert.equal(swift.split('XmtpIdentity.isIdentityText(text)').length - 1, 2);
  assert.equal(kotlin.split('XmtpIdentity.isIdentityText(text)').length - 1, 2);
});

test('XMTP identity: the self-test texts are exactly the vector file', () => {
  assert.deepEqual(XMTP_IDENTITY_REFUSED, v.refused);
});
