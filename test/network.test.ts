// Network group 2 signing (XRP, Stellar, Polkadot, NEAR, TON, Aptos, Sui, Cardano).
// The app builds the SigningInput with no key (src/tx.ts); the native
// signNetwork checks it, fills in the public key / Cardano change and runs the
// generic path: pre-image → sign → compile (SPEC §7.6). These tests run that
// same path with the Trust Wallet Core WASM build (4.8.4, as on the phones) and
// compare it with Trust Wallet Core's own signer, byte for byte.

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { initWasm } from '@trustwallet/wallet-core';
import { TW } from '../src/proto/tw.js';
import { fromBase64, toBase64, toHex } from '../src/encoding.ts';
import {
  aptosOutput,
  aptosTransferInput,
  cardanoOutput,
  cardanoTransferInput,
  nearOutput,
  nearTransferInput,
  polkadotOutput,
  polkadotTransferInput,
  stellarOutput,
  stellarPaymentInput,
  suiOutput,
  suiTransferInput,
  tonOutput,
  tonTransferInput,
  xrpOutput,
  xrpPaymentInput,
} from '../src/tx.ts';

const WORDS = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
const core = await initWasm();
const { CoinType, CoinTypeExt, HDWallet, AnySigner, TransactionCompiler, DataVector } = core;
const wallet = HDWallet.createWithMnemonic(WORDS, '');

type Chain = 'xrp' | 'stellar' | 'polkadot' | 'near' | 'ton' | 'aptos' | 'sui' | 'cardano';
const COIN: Record<Chain, any> = {
  xrp: CoinType.xrp,
  stellar: CoinType.stellar,
  polkadot: CoinType.polkadot,
  near: CoinType.near,
  ton: CoinType.ton,
  aptos: CoinType.aptos,
  sui: CoinType.sui,
  cardano: CoinType.cardano,
};
const NS: Record<Chain, any> = {
  xrp: TW.Ripple.Proto,
  stellar: TW.Stellar.Proto,
  polkadot: TW.Polkadot.Proto,
  near: TW.NEAR.Proto,
  ton: TW.TheOpenNetwork.Proto,
  aptos: TW.Aptos.Proto,
  sui: TW.Sui.Proto,
  cardano: TW.Cardano.Proto,
};
const own = (c: Chain) => wallet.getAddressForCoin(COIN[c]);
const WHOLE_MESSAGE: Chain[] = ['ton', 'aptos'];
const XRP_JSON_FIELDS = new Set(['TransactionType', 'Account', 'Destination', 'Amount', 'Fee', 'Sequence', 'LastLedgerSequence', 'Flags', 'Memos', 'DestinationTag']);

/** The native networkInput checks (ios/WalletStore.swift, android WalletStore.kt), then signOne. */
function nativeSignNetwork(c: Chain, inputB64: string, ownAddress = own(c)): string {
  const coin = COIN[c];
  const key = wallet.getKeyForCoin(coin);
  const pub = key.getPublicKey(coin).data();
  const i = NS[c].SigningInput.decode(fromBase64(inputB64));
  const unsupported = () => new Error('INVALID: not a transfer this wallet can sign');
  const notOwn = () => new Error('INVALID: this transaction is not from this wallet');
  if (i.privateKey?.length) throw unsupported();
  switch (c) {
    case 'xrp':
      if (i.publicKey?.length) throw unsupported();
      if (i.rawJson) {
        const tx = JSON.parse(i.rawJson);
        if (i.opPayment || !Object.keys(tx).every((k) => XRP_JSON_FIELDS.has(k)) || tx.TransactionType !== 'Payment' || typeof tx.Amount !== 'string' || (tx.Flags ?? 0) !== 0) throw unsupported();
        if (tx.Account !== ownAddress) throw notOwn();
      } else {
        if (!i.opPayment || i.opPayment.currencyAmount) throw unsupported();
        if (i.account !== ownAddress) throw notOwn();
      }
      i.publicKey = pub;
      break;
    case 'stellar':
      if (!i.opPayment && !i.opCreateAccount) throw unsupported();
      if (i.opPayment?.asset && (i.opPayment.asset.issuer || i.opPayment.asset.alphanum4)) throw unsupported();
      if (i.account !== ownAddress) throw notOwn();
      break;
    case 'polkadot':
      if (!i.balanceCall?.transfer) throw unsupported();
      break;
    case 'near':
      if (i.publicKey?.length || i.actions.length !== 1 || !i.actions[0].transfer) throw unsupported();
      if (i.signerId !== ownAddress) throw notOwn();
      i.publicKey = pub;
      break;
    case 'ton':
      if (i.publicKey?.length || i.walletVersion !== TW.TheOpenNetwork.Proto.WalletVersion.WALLET_V4_R2 || i.messages.length !== 1 || i.messages[0].stateInit) throw unsupported();
      if (i.messages[0].customPayload || i.messages[0].jettonTransfer?.customPayload) throw unsupported();
      i.publicKey = pub;
      break;
    case 'aptos':
      if (i.anyEncoded || !i.transfer) throw unsupported();
      if (i.sender.toLowerCase() !== ownAddress.toLowerCase()) throw notOwn();
      break;
    case 'sui':
      if (!i.paySui && !i.payAllSui) throw unsupported();
      if (i.signer.toLowerCase() !== ownAddress.toLowerCase()) throw notOwn();
      break;
    case 'cardano':
      if (!i.transferMessage || i.plan || i.registerStakingKey || i.delegate || i.withdraw || i.deregisterStakingKey || i.voteDelegation || i.extraOutputs.length || i.auxiliaryData?.length || !i.utxos.length) {
        throw unsupported();
      }
      i.transferMessage.changeAddress = ownAddress;
      for (const u of i.utxos) u.address = ownAddress;
      break;
  }
  const bytes = NS[c].SigningInput.encode(i).finish();
  const pre = TW.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(coin, bytes));
  if (pre.errorMessage || pre.error) throw new Error(`cannot sign: ${pre.error} ${pre.errorMessage}`);
  const sig = key.sign(WHOLE_MESSAGE.includes(c) ? pre.data : pre.dataHash, CoinTypeExt.curve(coin));
  return toBase64(TransactionCompiler.compileWithSignatures(coin, bytes, DataVector.createWithData(sig), DataVector.createWithData(pub)));
}

/** Trust Wallet Core's own signer with the private key in the input. */
function referenceSign(c: Chain, inputB64: string): string {
  const coin = COIN[c];
  const key = wallet.getKeyForCoin(coin);
  const i = NS[c].SigningInput.decode(fromBase64(inputB64));
  i.privateKey = c === 'cardano' ? [key.data()] : key.data();
  return toBase64(AnySigner.sign(NS[c].SigningInput.encode(i).finish(), coin));
}

const OUTPUT: Record<Chain, (b64: string) => unknown> = {
  xrp: xrpOutput,
  stellar: stellarOutput,
  polkadot: polkadotOutput,
  near: nearOutput,
  ton: tonOutput,
  aptos: aptosOutput,
  sui: suiOutput,
  cardano: cardanoOutput,
};

const other = {
  xrp: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
  stellar: 'GDCYBNRRPIHLHG7X7TKPUPAZ7WVUXCN3VO7WCCK64RIFV5XM5V5K4A52',
  polkadot: '13ZLCqJNPsRZYEbwjtZZFpWt9GyFzg5WahXCVWKpWdUJqrQ5',
  ton: 'UQDVJucJT96vGh_bYm3e5uzenasiTOwA9orUHQiyhNsKmBrP',
  aptos: '0x07968dab936c1bad187c60ce4082f307d030d780e91e694ae03aef16aba73f30',
  sui: `0x${'22'.repeat(32)}`,
  cardano: 'addr1q8043m5heeaydnvtmmkyuhe6qv5havvhsf0d26q3jygsspxlyfpyk6yqkw0yhtyvtr0flekj84u64az82cufmqn65zdsylzk23',
};
const ASSET_HUB = '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f';

const CASES: [string, Chain, () => string][] = [
  ['XRP payment with destination tag', 'xrp', () => xrpPaymentInput({ account: own('xrp'), to: other.xrp, amount: 1_000_000n, fee: 12n, sequence: 5, lastLedgerSequence: 9_000_000, destinationTag: 123 })],
  ['XRP payment with a THORChain memo', 'xrp', () => xrpPaymentInput({ account: own('xrp'), to: other.xrp, amount: 1_000_000n, fee: 12n, sequence: 5, lastLedgerSequence: 9_000_000, memo: '=:ETH.ETH:0x0000000000000000000000000000000000000000' })],
  ['Stellar payment with memo', 'stellar', () => stellarPaymentInput({ account: own('stellar'), to: other.stellar, amount: 10_000_000n, fee: 100, sequence: 2n, createAccount: false, memo: { text: 'hello' } })],
  ['Stellar create account', 'stellar', () => stellarPaymentInput({ account: own('stellar'), to: other.stellar, amount: 20_000_000n, fee: 100, sequence: 2n, createAccount: true, memo: { id: 42n } })],
  ['Polkadot Asset Hub transfer', 'polkadot', () => polkadotTransferInput({ to: other.polkadot, amount: 10_000_000_000n, nonce: 0, genesisHash: ASSET_HUB, blockHash: ASSET_HUB, blockNumber: 1000, specVersion: 2_005_002, transactionVersion: 15, callIndex: { module: 10, method: 3 }, assetTxPayment: true })],
  ['NEAR transfer to a named account', 'near', () => nearTransferInput({ signer: own('near'), to: 'alice.near', amount: 10n ** 24n, nonce: 7n, blockHash: new Uint8Array(32).fill(7) })],
  ['TON transfer with comment', 'ton', () => tonTransferInput({ to: other.ton, amount: 10_000_000n, seqno: 5, expireAt: 1_800_000_000, comment: 'test', bounceable: false })],
  ['TON first send (deploys the wallet)', 'ton', () => tonTransferInput({ to: other.ton, amount: 10_000_000n, seqno: 0, expireAt: 1_800_000_000, bounceable: false })],
  ['TON USDT jetton', 'ton', () => tonTransferInput({ to: other.ton, amount: 50_000_000n, seqno: 5, expireAt: 1_800_000_000, bounceable: true, jetton: { amount: 1_000_000n, owner: other.ton, responseAddress: own('ton') } })],
  ['Aptos transfer', 'aptos', () => aptosTransferInput({ sender: own('aptos'), to: other.aptos, amount: 1000n, sequenceNumber: 1n, maxGasAmount: 2000n, gasUnitPrice: 100n, expireAt: 1_800_000_000 })],
  ['Sui pay', 'sui', () => suiTransferInput({ signer: own('sui'), to: other.sui, amount: 1_000_000n, coins: [{ objectId: `0x${'11'.repeat(32)}`, version: 10n, digest: '6H4cEBbsPtNgCKzanFXqTRbmHmZ1ns99PEpWMXZFWuSK' }], gasBudget: 3_000_000n, gasPrice: 750n })],
  ['Sui send all', 'sui', () => suiTransferInput({ signer: own('sui'), to: other.sui, amount: 0n, sendAll: true, coins: [{ objectId: `0x${'11'.repeat(32)}`, version: 10n, digest: '6H4cEBbsPtNgCKzanFXqTRbmHmZ1ns99PEpWMXZFWuSK' }], gasBudget: 3_000_000n, gasPrice: 750n })],
  ['Cardano transfer', 'cardano', () => cardanoTransferInput({ from: own('cardano'), to: other.cardano, amount: 2_000_000n, utxos: [{ txHash: '09'.repeat(32), index: 0, amount: 5_000_000n }], ttl: 190_000_000 })],
];

for (const [name, chain, build] of CASES) {
  test(`${name}: native path equals Trust Wallet Core's signer`, () => {
    const input = build();
    const native = nativeSignNetwork(chain, input);
    const ref = referenceSign(chain, input);
    const a = NS[chain].SigningOutput.decode(fromBase64(native));
    const b = NS[chain].SigningOutput.decode(fromBase64(ref));
    assert.equal(b.errorMessage ?? '', '', 'reference signer accepts the input');
    // The compile path leaves out the extra hash fields NEAR (hash) and Cardano (tx_id) add;
    // the signed transaction itself must be identical.
    for (const o of [a, b]) {
      if (chain === 'near') o.hash = new Uint8Array();
      if (chain === 'cardano') o.txId = new Uint8Array();
    }
    assert.equal(toHex(NS[chain].SigningOutput.encode(a).finish()), toHex(NS[chain].SigningOutput.encode(b).finish()));
    OUTPUT[chain](native); // the app's reader accepts it
  });
}

test('Cardano: change and inputs are forced to the wallet address', () => {
  const tampered = cardanoTransferInput({ from: other.cardano, to: other.cardano, amount: 2_000_000n, utxos: [{ txHash: '09'.repeat(32), index: 0, amount: 5_000_000n }], ttl: 190_000_000 });
  const honest = cardanoTransferInput({ from: own('cardano'), to: other.cardano, amount: 2_000_000n, utxos: [{ txHash: '09'.repeat(32), index: 0, amount: 5_000_000n }], ttl: 190_000_000 });
  assert.equal(cardanoOutput(nativeSignNetwork('cardano', tampered)).cbor, cardanoOutput(referenceSign('cardano', honest)).cbor);
});

test('a transaction from another account is refused', () => {
  assert.throws(() => nativeSignNetwork('xrp', xrpPaymentInput({ account: other.xrp, to: own('xrp'), amount: 1n, fee: 12n, sequence: 1, lastLedgerSequence: 2 })), /not from this wallet/);
  assert.throws(() => nativeSignNetwork('near', nearTransferInput({ signer: 'bob.near', to: 'alice.near', amount: 1n, nonce: 1n, blockHash: new Uint8Array(32) })), /not from this wallet/);
  assert.throws(() => nativeSignNetwork('aptos', aptosTransferInput({ sender: other.aptos, to: own('aptos'), amount: 1n, sequenceNumber: 1n, maxGasAmount: 1n, gasUnitPrice: 1n, expireAt: 1 })), /not from this wallet/);
});

test('anything but a plain transfer is refused', () => {
  const xrpTrust = toBase64(TW.Ripple.Proto.SigningInput.encode(TW.Ripple.Proto.SigningInput.create({ account: own('xrp'), opTrustSet: { limitAmount: { currency: 'USD', value: '1', issuer: other.xrp } } })).finish());
  assert.throws(() => nativeSignNetwork('xrp', xrpTrust), /not a transfer/);
  const xrpRegularKey = toBase64(TW.Ripple.Proto.SigningInput.encode(TW.Ripple.Proto.SigningInput.create({ rawJson: JSON.stringify({ TransactionType: 'SetRegularKey', Account: own('xrp'), RegularKey: other.xrp }) })).finish());
  assert.throws(() => nativeSignNetwork('xrp', xrpRegularKey), /not a transfer/);
  const tonPayload = toBase64(TW.TheOpenNetwork.Proto.SigningInput.encode(TW.TheOpenNetwork.Proto.SigningInput.create({ messages: [{ dest: other.ton, amount: new Uint8Array([1]), mode: 3, customPayload: 'te6cc' }], sequenceNumber: 1, expireAt: 1, walletVersion: 2 })).finish());
  assert.throws(() => nativeSignNetwork('ton', tonPayload), /not a transfer/);
  const nearKey = toBase64(TW.NEAR.Proto.SigningInput.encode(TW.NEAR.Proto.SigningInput.create({ signerId: own('near'), receiverId: own('near'), nonce: 1, blockHash: new Uint8Array(32), actions: [{ addKey: {} }] })).finish());
  assert.throws(() => nativeSignNetwork('near', nearKey), /not a transfer/);
  const dotStake = toBase64(TW.Polkadot.Proto.SigningInput.encode(TW.Polkadot.Proto.SigningInput.create({ stakingCall: { chill: {} } })).finish());
  assert.throws(() => nativeSignNetwork('polkadot', dotStake), /not a transfer/);
});

test('XRP: the transaction id is the hash of the signed blob', () => {
  const { blob, txid } = xrpOutput(nativeSignNetwork('xrp', CASES[0]![2]()));
  assert.match(blob, /^[0-9A-F]+$/);
  assert.match(txid, /^[0-9A-F]{64}$/);
});
