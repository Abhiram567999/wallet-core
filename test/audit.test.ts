// Security audit, 15 Nov 2026: the facts the native fixes rest on, and that iOS and Android both carry them.
//  1. A TRON SigningInput with `raw_json` is signed as the raw JSON, NOT as its `transaction`. So every TRON
//     input the native code signs is rebuilt from `transaction` only (tronTransactionOnly) and raw JSON is refused.
//  2. Trust Wallet Core's EIP-712 signer keeps the LAST copy of a key written twice. Apple's JSON reader keeps
//     the first, so iOS signs the JSON of the object it checked (checkedJSON), never the app's own text.
//  3. A dApp may not ask for the messages Foxsafe's own fee-free and Polymarket functions sign.
// Only the public test phrase and public addresses are used.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { initWasm, TW } from '@trustwallet/wallet-core';

const words = JSON.parse(readFileSync(new URL('./vectors/derivation.json', import.meta.url), 'utf8')).mnemonic[0].words;
const swift = readFileSync(new URL('../ios/WalletStore.swift', import.meta.url), 'utf8');
const kotlin = readFileSync(new URL('../android/src/main/java/app/foxsafe/walletcore/WalletStore.kt', import.meta.url), 'utf8');
const core = await initWasm();
const { CoinType, HDWallet, EthereumMessageSigner, TransactionCompiler, Base58 } = core;
const hex = (u: Uint8Array) => Buffer.from(u).toString('hex');

test('TRON: raw_json is signed instead of the transaction beside it', () => {
  const P = TW.Tron.Proto;
  const owner = 'TR9dqsxAgkBpG5oDMA8FQmPjzfqNBErczM';
  const other = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
  const blockHeader = P.BlockHeader.fromObject({ timestamp: 1_700_000_000_000, number: 100, version: 1, txTrieRoot: Buffer.alloc(32), parentHash: Buffer.alloc(32), witnessAddress: Buffer.alloc(21) });
  const transfer = (to: string, amount: number) =>
    P.Transaction.fromObject({ timestamp: 1_700_000_000_000, expiration: 1_700_000_060_000, blockHeader, transfer: P.TransferContract.fromObject({ ownerAddress: owner, toAddress: to, amount }) });
  const pre = (input: object) => TW.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(CoinType.tron, P.SigningInput.encode(P.SigningInput.create(input)).finish()));
  const small = pre({ transaction: transfer('TRmToStoTAxU414feHAS67w33Qzi4VyEVJ', 100_000) });
  const large = pre({ transaction: transfer(other, 900_000_000_000) });
  const a41 = (s: string) => hex(Base58.decode(s));
  const rawJson = JSON.stringify({
    txID: hex(large.dataHash),
    visible: false,
    raw_data: {
      ref_block_bytes: '0064', ref_block_hash: '69aaa4e30411f4c4', expiration: 1_700_000_060_000, timestamp: 1_700_000_000_000,
      contract: [{ type: 'TransferContract', parameter: { type_url: 'type.googleapis.com/protocol.TransferContract', value: { owner_address: a41(owner), to_address: a41(other), amount: 900_000_000_000 } } }],
    },
  });
  const both = pre({ transaction: transfer('TRmToStoTAxU414feHAS67w33Qzi4VyEVJ', 100_000), rawJson });
  assert.equal(both.error, 0);
  assert.equal(hex(both.dataHash), hex(large.dataHash), 'the library signs the raw JSON');
  assert.notEqual(hex(both.dataHash), hex(small.dataHash));
});

test('TRON: both platforms rebuild every TRON input from its transaction and refuse raw JSON', () => {
  for (const [name, src, uses] of [['iOS', swift, 3], ['Android', kotlin, 3]] as const) {
    assert.ok(src.includes('this TRON transaction is in a form Foxsafe does not sign'), `${name}: refusal text`);
    assert.ok((src.match(/tronTransactionOnly\(/g) ?? []).length >= uses, `${name}: used for signTransactions and signVaultRound`);
  }
  assert.match(swift, /if coin == \.tron \{ inputs = try inputs\.map \{ try Self\.tronTransactionOnly\(\$0\) \} \}/);
  assert.match(kotlin, /if \(c == CoinType\.TRON\) tronTransactionOnly\(it\) else it/);
});

test('EIP-712: the signer keeps the last copy of a repeated key; iOS signs the object it checked', () => {
  const key = HDWallet.createWithMnemonic(words, '').getKeyForCoin(CoinType.ethereum);
  const td = (message: string) => `{"types":{"EIP712Domain":[{"name":"name","type":"string"}],"M":[{"name":"x","type":"uint256"}]},"primaryType":"M","domain":{"name":"t"},"message":${message}}`;
  const sign = (json: string) => EthereumMessageSigner.signTypedMessage(key, json);
  assert.equal(sign(td('{"x":"1","x":"2"}')), sign(td('{"x":"2"}')));
  assert.notEqual(sign(td('{"x":"1","x":"2"}')), sign(td('{"x":"1"}')));
  // Key order and spacing don't change the signature, so signing re-written JSON is safe.
  assert.equal(sign(td('{"x":"2"}')), sign(`{"message":{"x":"2"},"domain":{"name":"t"},"primaryType":"M","types":{"M":[{"name":"x","type":"uint256"}],"EIP712Domain":[{"name":"name","type":"string"}]}}`));
  assert.ok((swift.match(/messageJson: checked\)/g) ?? []).length >= 3, 'signGaslessEvm, signSafe and signDappTypedData sign the checked JSON');
  assert.ok(!/signTypedMessage\(privateKey: key, messageJson: typedData\)/.test(swift), 'iOS never signs the app\'s own typed-data text');
});

test('dApps cannot ask for Foxsafe\'s own fee-free or Polymarket messages (both platforms)', () => {
  for (const t of ['PackedUserOperation', 'TypedDataSign', 'Batch', 'ClobAuth']) {
    assert.ok(swift.includes(`"${t}"`) && kotlin.includes(`"${t}"`), t);
  }
  for (const n of ['erc4337', 'depositwallet', 'clobauthdomain', 'polymarket ctf exchange']) {
    assert.ok(swift.includes(`"${n}"`) && kotlin.includes(`"${n}"`), n);
  }
  assert.ok(swift.includes("only Foxsafe's own screens can sign this kind of message") && kotlin.includes("only Foxsafe's own screens can sign this kind of message"));
});

test('passcode: wrong tries are limited natively, and setting the backup password asks for the hardware key', () => {
  assert.ok(swift.includes('try PasscodeTries.checkAllowed(recovery)') && kotlin.includes('triesAllowed()'));
  assert.ok(swift.includes('reason: "Set your backup password"') && kotlin.includes('"Set your backup password"'));
});

test('Vault: TRX only to the listed addresses, at most 1,000 TRX a round and a day, the same on both platforms', () => {
  const list = ['TT2mzRS777y9518hxKfVL2DTuMG1BpUSqE', 'TJm8MZnZWJdV9ArThSBBtSmSktanSdhe79', 'THeYpVaHfJkT99TbTskXqeEmi8AyiqYn2U', 'TB7nNA9KGhXAsjreaGZmuasTdfYEZhx4Yw',
    'TXQ6ejLmJuptqNvRDTFuC8GFzamWeCscLb', 'TW1MxjQSJdSFBEU5gwciN6668WfRUggQjv', 'TKnrsgMVMg5eo4eXb7mCmcUzBsGBoukgiB', 'TN6U9hEWe6xYRFwWCqubMh1GG8YdqvhiYH', 'TRy4P7VtpXWeoekqqyJjGzavQeFA4h5XhL'];
  for (const a of list) {
    assert.ok(swift.includes(`"${a}"`) && kotlin.includes(`"${a}"`), a);
    assert.ok(core.AnyAddress.isValid(a, CoinType.tron), `${a} is a valid TRON address`);
  }
  assert.match(swift, /maxTrxPerRoundSun: Int64 = 1_000_000_000/);
  assert.match(swift, /maxTrxPerDaySun: Int64 = 1_000_000_000/);
  assert.match(kotlin, /MAX_TRX_PER_ROUND_SUN = 1_000_000_000L/);
  assert.match(kotlin, /MAX_TRX_PER_DAY_SUN = 1_000_000_000L/);
  // Every energy seller the app may pay is on the Vault's list too, so a round's 0.1 TRX payment is never refused.
  const sellers = readFileSync(new URL('../../app/src/chain/energySellers.ts', import.meta.url), 'utf8');
  for (const m of sellers.matchAll(/address: '(T[1-9A-HJ-NP-Za-km-z]{33})'/g)) assert.ok(list.includes(m[1]!), `seller ${m[1]} is on the Vault's list`);
});
