// The secure send screen (SPEC §7.13): what the screen says must come from the bytes that are signed.
// Every case builds a transaction with the app's own builders (src/tx.ts), then reads it back.
// Public addresses only.

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { initWasm, TW } from '@trustwallet/wallet-core';
import { grouped, screenText, sendSummary, unitsText, type CoreLike } from '../src/sendSummary.ts';
import { kotlin, swift } from '../scripts/gen-send-screen-text.mjs';
import { readFileSync } from 'node:fs';
import { bitcoinTransferInput, evmCallInput, evmTransferInput, solanaTokenTransferInput, solanaTransferInput, tronTransferInput } from '../src/tx.ts';

const core = await initWasm();
const C = core.CoinType;
const like = core as unknown as CoreLike;
const b = (s: string) => Uint8Array.from(Buffer.from(s, 'base64'));
const sum = (coin: unknown, inputs: string[], hint?: { to?: string }) => sendSummary(like, coin, inputs.map(b), hint);
const text = (coin: unknown, inputs: string[], hint?: { to?: string }) => {
  const x = screenText(sum(coin, inputs, hint));
  return { title: x.title, network: x.network, to: x.to, fee: x.fee, warning: x.warning };
};

const block = { number: 70_000_000, timestamp: 1_760_000_000_000, txTrieRoot: '00'.repeat(32), parentHash: '00'.repeat(32), witnessAddress: `41${'00'.repeat(20)}`, version: 30 };
const ME = 'TR9dqsxAgkBpG5oDMA8FQmPjzfqNBErczM';
const FRIEND = 'TCEezhePNTyie5gkrb77zAZLBx9RMffLuN';
const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
const tron = (to: string, amount: bigint, token?: string, memo?: string) =>
  tronTransferInput({ from: ME, to, amount, block, now: 1_760_000_001_000, ...(token ? { token, feeLimit: 30_000_000n } : {}), ...(memo ? { memo } : {}) });

test('amounts are exact decimal text', () => {
  assert.equal(unitsText('5500000', 6), '5.5');
  assert.equal(unitsText('50000000', 6), '50');
  assert.equal(unitsText('1', 18), '0.000000000000000001');
  assert.equal(unitsText('0', 6), '0');
  assert.equal(unitsText('123', 0), '123');
  assert.equal(grouped('TXyzQ8Kd4mFv'), 'TXyz Q8Kd 4mFv');
});

test('TRON: TRX and USDT sends, with the fee-free extras', () => {
  assert.deepEqual(text(C.tron, [tron(FRIEND, 2_500_000n)]), { title: 'Send 2.5 TRX', network: 'on Tron', to: grouped(FRIEND), fee: '', warning: '' });
  const fee = tron('TRmToStoTAxU414feHAS67w33Qzi4VyEVJ', 2_000_000n, USDT);
  const energy = tron('TXQ6ejLmJuptqNvRDTFuC8GFzamWeCscLb', 100_000n);
  const t = text(C.tron, [tron(FRIEND, 50_000_000n, USDT), fee, energy, energy]);
  assert.equal(t.title, 'Send 50 USDT');
  assert.equal(t.to, grouped(FRIEND));
  assert.equal(t.fee, 'Network fee: 2 USDT + 0.2 TRX energy');
});

test('TRON: an unknown token is shown by its contract in raw units, a note is mentioned', () => {
  const t = text(C.tron, [tron(FRIEND, 1234n, 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7', 'hi')]);
  assert.equal(t.title, 'Send 1234 of token TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7');
  assert.equal(t.warning, 'This transaction carries a note.');
});

test('TRON: raw JSON beside the transaction is never described as a send', () => {
  const P = TW.Tron.Proto.SigningInput;
  const m = P.decode(b(tron(FRIEND, 100_000n)));
  m.rawJson = '{"txID":"00"}';
  const s = sendSummary(like, C.tron, [P.encode(m).finish()]);
  assert.equal(s.kind, 'other');
});

const evm = { nonce: 1n, maxFeePerGas: 10n ** 9n, maxPriorityFeePerGas: 10n ** 8n, gasLimit: 21_000n };
const TO = '0x52908400098527886E0F7030069857D2E4169EE7';

test('EVM: coin and token sends name the network the signature is valid on', () => {
  assert.equal(text(C.ethereum, [evmTransferInput({ ...evm, chainId: 1n, to: TO, amount: 10n ** 17n })]).title, 'Send 0.1 ETH');
  const usdt = text(C.smartChain, [evmTransferInput({ ...evm, chainId: 56n, to: TO, amount: 5n * 10n ** 18n, token: '0x55d398326f99059fF775485246999027B3197955' })]);
  assert.deepEqual([usdt.title, usdt.network, usdt.to], ['Send 5 USDT', 'on BNB Smart Chain', grouped(TO.toLowerCase())]);
  // Labelled BNB Chain by the app, signed for Ethereum: not described as a send.
  assert.equal(sum(C.smartChain, [evmTransferInput({ ...evm, chainId: 1n, to: TO, amount: 1n })]).kind, 'other');
});

test('EVM: a transfer written as a contract call is still read; anything else is "not a simple send"', () => {
  const data = `0xa9059cbb${'0'.repeat(24)}${TO.slice(2).toLowerCase()}${(7_000_000n).toString(16).padStart(64, '0')}`;
  const call = (d: string, value = 0n) => evmCallInput({ ...evm, chainId: 1n, to: '0xdAC17F958D2ee523a2206206994597C13D831ec7', value, data: d });
  assert.equal(text(C.ethereum, [call(data)]).title, 'Send 7 USDT');
  const approve = text(C.ethereum, [call(`0x095ea7b3${'0'.repeat(24)}${TO.slice(2).toLowerCase()}${'f'.repeat(64)}`)]);
  assert.equal(approve.title, 'Not a simple send');
  assert.match(approve.warning, /can't read/);
  assert.equal(sum(C.ethereum, [call(data, 5n)]).kind, 'other');
});

test('Bitcoin: amount, and "send everything" says so', () => {
  const utxos = [{ txid: 'aa'.repeat(32), vout: 0, value: 100_000n }];
  const base = { coin: 0, from: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4', to: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', byteFee: 5n, utxos };
  assert.equal(text(C.bitcoin, [bitcoinTransferInput({ ...base, amount: 25_000n })]).title, 'Send 0.00025 BTC');
  assert.equal(text(C.bitcoin, [bitcoinTransferInput({ ...base, amount: 1n, useMax: true })]).title, 'Send all your BTC');
});

test('Solana: SOL, and a token only shows the owner address when it leads to the signed token account', () => {
  const from = 'HAgk14JpMQLgt6rVgv7cBQFJWFto5Dqxi472uT3DKpqk';
  const owner = '3DvVfRtM2SR49P6zkdA59g78BYsjXtnaKgvaUK1CPMnj';
  const hash = '11111111111111111111111111111111';
  assert.equal(text(C.solana, [solanaTransferInput({ from, to: owner, lamports: 1_500_000_000n, recentBlockhash: hash })]).title, 'Send 1.5 SOL');
  const mint = 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB';
  const ata = core.SolanaAddress.createWithString(owner).defaultTokenAddress(mint);
  const token = (createRecipientAccount: boolean, recipient = owner) =>
    solanaTokenTransferInput({ from, mint, decimals: 6, amount: 12_340_000n, senderTokenAddress: core.SolanaAddress.createWithString(from).defaultTokenAddress(mint), recipient, recipientTokenAddress: ata, createRecipientAccount, recentBlockhash: hash });
  const t = text(C.solana, [token(false)], { to: owner });
  assert.deepEqual([t.title, t.to], ['Send 12.34 USDT', grouped(owner)]);
  // No hint: the token account itself is shown. A hint that doesn't own that account: not a send.
  assert.equal(text(C.solana, [token(false)]).to, grouped(ata));
  assert.equal(sum(C.solana, [token(false)], { to: from }).kind, 'other');
  assert.equal(sum(C.solana, [token(true, from)]).kind, 'other');
});

test('the screen speaks the app language, and the tick is only for someone else\'s address', () => {
  const s = sum(C.tron, [tron(FRIEND, 50_000_000n, USDT)]);
  const de = screenText(s, 'de');
  assert.equal(de.title, '50 USDT senden');
  assert.ok(de.slide.length > 0 && de.slide !== 'Slide to send');
  assert.ok(de.tick.length > 0);
  assert.equal(screenText(s, 'de', { own: true }).tick, '');
  assert.equal(screenText(s, 'en', { site: 'app.uniswap.org' }).site, 'Asked by app.uniswap.org');
  assert.equal(screenText(s, 'xx').title, 'Send 50 USDT'); // unknown language: English
});

test('the Swift and Kotlin word lists are generated from the same file and up to date', () => {
  assert.equal(readFileSync(new URL('../ios/SendScreenText.swift', import.meta.url), 'utf8'), swift());
  assert.equal(readFileSync(new URL('../android/src/main/java/app/foxsafe/walletcore/SendScreenText.kt', import.meta.url), 'utf8'), kotlin());
  const text = JSON.parse(readFileSync(new URL('../src/sendScreenText.json', import.meta.url), 'utf8'));
  for (const [k, v] of Object.entries(text) as [string, Record<string, string>][]) assert.equal(Object.keys(v).length, 22, k);
});
