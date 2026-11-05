// Cosmos-family signing (THORChain, Cosmos Hub, Osmosis, Injective …).
// The app builds the SigningInput with no key and no public key
// (cosmosSendInput / thorchainDepositInput); the native signCosmos checks the
// sender, adds the wallet's public key and runs the generic path:
// pre-image hash → sign → compile. These tests run that same path with the
// Trust Wallet Core WASM build (4.8.4, as on the phones).

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { initWasm } from '@trustwallet/wallet-core';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { sha256 } from '@noble/hashes/sha2.js';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { TW } from '../src/proto/tw.js';
import { fromBase64, toBase64, toHex, utf8 } from '../src/encoding.ts';
import { bech32Data, cosmosOutput, cosmosSendInput, thorchainDepositInput } from '../src/tx.ts';

const WORDS = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
const core = await initWasm();
const { CoinType, CoinTypeExt, HDWallet, PrivateKey, HexCoding, TransactionCompiler, DataVector, AnyAddress, AnySigner } = core;
const coinOf = (id: number) => Object.values(CoinType).find((c: any) => c?.value === id) as any;

// Spec section B: coin, chain-id, base denom, gas price, bech32 prefix.
const CHAINS: [number, string, string, string, string][] = [
  [931, 'thorchain-1', 'rune', '', 'thor'],
  [118, 'cosmoshub-4', 'uatom', '0.025', 'cosmos'],
  [10000118, 'osmosis-1', 'uosmo', '0.1', 'osmo'],
  [17000118, 'akashnet-2', 'uakt', '0.025', 'akash'],
  [50000118, 'axelar-dojo-1', 'uaxl', '0.007', 'axelar'],
  [459, 'kava_2222-10', 'ukava', '0.1', 'kava'],
  [10000060, 'injective-1', 'inj', '160000000', 'inj'],
  [19000118, 'pacific-1', 'usei', '0.02', 'sei'],
  [90000118, 'neutron-1', 'untrn', '0.01', 'neutron'],
  [30000118, 'juno-1', 'ujuno', '0.1', 'juno'],
  [394, 'crypto-org-chain-mainnet-1', 'basecro', '0.03', 'cro'],
  [330, 'columbus-5', 'uluna', '28.325', 'terra'],
  [21000118, 'celestia', 'utia', '0.02', 'celestia'],
  [22000118, 'dydx-mainnet-1', 'adydx', '12500000000', 'dydx'],
];

/** ceil(gas × price) with a decimal price string. */
function feeFor(gas: bigint, price: string): bigint {
  const [w, f = ''] = price.split('.');
  const scale = 10n ** BigInt(f.length);
  return (gas * BigInt(w! + f) + scale - 1n) / scale;
}

// Minimal protobuf reader for the signed transaction (TxRaw, TxBody, AuthInfo …).
type Field = { no: number; v: bigint | Uint8Array };
function fields(b: Uint8Array): Field[] {
  const out: Field[] = [];
  let i = 0;
  const varint = () => {
    let r = 0n;
    for (let s = 0n; ; s += 7n) {
      const x = b[i++]!;
      r |= BigInt(x & 127) << s;
      if (x < 128) return r;
    }
  };
  while (i < b.length) {
    const key = Number(varint());
    const wire = key & 7;
    if (wire === 0) out.push({ no: key >> 3, v: varint() });
    else if (wire === 2) {
      const n = Number(varint());
      out.push({ no: key >> 3, v: b.slice(i, i + n) });
      i += n;
    } else throw new Error(`wire type ${wire}`);
  }
  return out;
}
const get = (b: Uint8Array, no: number) => fields(b).filter((f) => f.no === no).map((f) => f.v as Uint8Array);
const str = (b: Uint8Array) => new TextDecoder().decode(b);

/** Varint + length-delimited protobuf writer for the SignDoc. */
function pb(...parts: [number, Uint8Array | bigint][]): Uint8Array {
  const out: number[] = [];
  const varint = (n: bigint) => {
    do {
      let x = Number(n & 127n);
      n >>= 7n;
      if (n) x |= 128;
      out.push(x);
    } while (n);
  };
  for (const [no, v] of parts) {
    if (typeof v === 'bigint') {
      varint(BigInt(no << 3));
      varint(v);
    } else {
      varint(BigInt((no << 3) | 2));
      varint(BigInt(v.length));
      out.push(...v);
    }
  }
  return Uint8Array.from(out);
}

/**
 * What the native signCosmos does (ios/WalletStore.swift, android WalletStore.kt):
 * checks, sender = own address, add public key, pre-image hash → sign → compile.
 */
function nativeSignCosmos(coinId: number, inputB64: string, key: any, own: string): string {
  const coin = coinOf(coinId);
  const P = TW.Cosmos.Proto;
  const input = P.SigningInput.decode(fromBase64(inputB64));
  if (input.signingMode !== P.SigningMode.Protobuf || input.publicKey.length || input.privateKey.length || !input.messages.length) {
    throw new Error('INVALID: not a Cosmos transaction this wallet can sign');
  }
  const ownData = AnyAddress.createWithString(own, coin).data();
  for (const m of input.messages) {
    const ok = m.sendCoinsMessage
      ? m.sendCoinsMessage.fromAddress === own
      : m.thorchainSendMessage && coinId === 931
        ? toHex(m.thorchainSendMessage.fromAddress ?? new Uint8Array()) === toHex(ownData)
        : m.thorchainDepositMessage && coinId === 931
          ? toHex(m.thorchainDepositMessage.signer ?? new Uint8Array()) === toHex(ownData)
          : (() => {
              throw new Error('INVALID: this kind of Cosmos message is not supported');
            })();
    if (!ok) throw new Error('INVALID: this transaction is not from this wallet');
  }
  input.publicKey = key.getPublicKey(coin).data();
  const bytes = P.SigningInput.encode(input).finish();
  const pre = TW.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(coin, bytes));
  if (pre.errorMessage || pre.error) throw new Error(`cannot sign: ${pre.error} ${pre.errorMessage}`);
  const sig = key.sign(pre.dataHash, CoinTypeExt.curve(coin));
  const out = TransactionCompiler.compileWithSignatures(coin, bytes, DataVector.createWithData(sig), DataVector.createWithData(key.getPublicKey(coin).data()));
  return toBase64(out);
}

/** Decodes tx_bytes, checks the signature over the SignDoc, returns the first message. */
function checkSignedTx(txBytes: string, chainId: string, accountNumber: bigint, pubkey: Uint8Array, keccak: boolean) {
  const raw = fromBase64(txBytes);
  const [body] = get(raw, 1);
  const [authInfo] = get(raw, 2);
  const sigs = get(raw, 3);
  assert.ok(body && authInfo, 'TxRaw has body and auth info');
  assert.equal(sigs.length, 1);
  assert.equal(sigs[0]!.length, 64, 'r‖s signature');
  // The public key inside the transaction is the wallet's.
  const [signerInfo] = get(authInfo, 1);
  const [pkAny] = get(signerInfo!, 1);
  assert.equal(toHex(get(get(pkAny!, 2)[0]!, 1)[0]!), toHex(pubkey));
  // Signature verifies over SignDoc{body, auth_info, chain_id, account_number}.
  const doc = pb([1, body], [2, authInfo], [3, utf8(chainId)], [4, accountNumber]);
  const digest = keccak ? keccak_256(doc) : sha256(doc);
  assert.ok(secp256k1.verify(sigs[0]!, digest, pubkey, { prehash: false }), 'signature verifies');
  const [msgAny] = get(body, 1);
  return { typeUrl: str(get(msgAny!, 1)[0]!), value: get(msgAny!, 2)[0]!, memo: get(body, 2)[0] };
}

test('cosmosSendInput signs on every Cosmos-family network (native path)', () => {
  const wallet = HDWallet.createWithMnemonic(WORDS, '');
  const other = PrivateKey.createWithData(HexCoding.decode('11'.repeat(32)));
  for (const [id, chainId, denom, price, prefix] of CHAINS) {
    const coin = coinOf(id);
    assert.ok(coin, `coin ${id}`);
    const key = wallet.getKeyForCoin(coin);
    const own = CoinTypeExt.deriveAddress(coin, key);
    const to = CoinTypeExt.deriveAddressFromPublicKey(coin, other.getPublicKey(coin));
    assert.ok(own.startsWith(`${prefix}1`) && to.startsWith(`${prefix}1`), `${id} prefix`);
    const thor = id === 931;
    const gas = thor ? 6_000_000n : 200_000n;
    const input = cosmosSendInput({
      coin: id,
      chainId,
      accountNumber: 12345,
      sequence: 7n,
      from: own,
      to,
      denom,
      amount: 1_000n,
      fee: thor ? null : { denom, amount: feeFor(gas, price) },
      gas,
      memo: 'foxsafe test',
    });

    // Without the public key Trust Wallet Core refuses, which is why native adds it.
    const bare = TW.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(coin, fromBase64(input)));
    assert.ok(bare.error !== 0, `${id}: needs the public key`);

    const { txBytes, txid } = cosmosOutput(nativeSignCosmos(id, input, key, own));
    assert.match(txid, /^[0-9A-F]{64}$/);
    // Same bytes as Trust Wallet Core's own signer given the private key.
    const ref = TW.Cosmos.Proto.SigningInput.decode(fromBase64(input));
    ref.privateKey = key.data();
    const refOut = TW.Cosmos.Proto.SigningOutput.decode(AnySigner.sign(TW.Cosmos.Proto.SigningInput.encode(ref).finish(), coin));
    assert.equal(txBytes, JSON.parse(refOut.serialized).tx_bytes, `${id}: matches AnySigner`);
    const pub = key.getPublicKey(coin).data();
    const msg = checkSignedTx(txBytes, chainId, 12345n, pub, id === 10000060);
    assert.equal(str(msg.memo!), 'foxsafe test');
    if (thor) {
      assert.equal(msg.typeUrl, '/types.MsgSend');
      assert.equal(toHex(get(msg.value, 1)[0]!), toHex(bech32Data(own, 'thor')));
      assert.equal(toHex(get(msg.value, 2)[0]!), toHex(bech32Data(to, 'thor')));
    } else {
      assert.equal(msg.typeUrl, '/cosmos.bank.v1beta1.MsgSend');
      assert.equal(str(get(msg.value, 1)[0]!), own, `${id}: from is the wallet`);
      assert.equal(str(get(msg.value, 2)[0]!), to);
    }
    const [amount] = get(msg.value, 3);
    assert.equal(str(get(amount!, 1)[0]!), denom);
    assert.equal(str(get(amount!, 2)[0]!), '1000');
    key.delete();
  }
  other.delete();
  wallet.delete();
});

test('THORChain deposit (swap out of RUNE) signs', () => {
  const wallet = HDWallet.createWithMnemonic(WORDS, '');
  const coin = CoinType.thorchain;
  const key = wallet.getKeyForCoin(coin);
  const own = CoinTypeExt.deriveAddress(coin, key);
  const memo = '=:ETH.ETH:0x9858EfFD232B4033E47d90003D41EC34EcaEda94';
  const input = thorchainDepositInput({ chainId: 'thorchain-1', accountNumber: 1, sequence: 0, signer: own, amount: 150_000_000n, memo, gas: 600_000_000n });
  const { txBytes, txid } = cosmosOutput(nativeSignCosmos(931, input, key, own));
  assert.match(txid, /^[0-9A-F]{64}$/);
  const msg = checkSignedTx(txBytes, 'thorchain-1', 1n, key.getPublicKey(coin).data(), false);
  assert.equal(msg.typeUrl, '/types.MsgDeposit');
  assert.equal(str(get(msg.value, 2)[0]!), memo);
  assert.equal(toHex(get(msg.value, 3)[0]!), toHex(bech32Data(own, 'thor')));
  const [c] = get(msg.value, 1);
  const [asset] = get(c!, 1);
  assert.equal(str(get(asset!, 1)[0]!), 'THOR');
  assert.equal(str(get(asset!, 2)[0]!), 'RUNE');
  assert.equal(str(get(c!, 2)[0]!), '150000000');
  key.delete();
  wallet.delete();
});

test("golden: Trust Wallet Core's THORChain protobuf test, byte for byte", () => {
  const key = PrivateKey.createWithData(HexCoding.decode('7105512f0c020a1dd759e14b865ec0125f59ac31e34d7a2807a228ed50cb343e'));
  const own = CoinTypeExt.deriveAddress(CoinType.thorchain, key);
  assert.equal(own, 'thor1z53wwe7md6cewz9sqwqzn0aavpaun0gw0exn2r');
  const input = cosmosSendInput({
    coin: 931,
    chainId: 'thorchain-mainnet-v1',
    accountNumber: 593,
    sequence: 21,
    from: own,
    to: 'thor1e2ryt8asq4gu0h6z2sx9u7rfrykgxwkmr9upxn',
    denom: 'rune',
    amount: 38_000_000n,
    fee: { denom: 'rune', amount: 200n },
    gas: 2_500_000n,
  });
  const { txBytes, txid } = cosmosOutput(nativeSignCosmos(931, input, key, own));
  assert.equal(
    txBytes,
    'ClIKUAoOL3R5cGVzLk1zZ1NlbmQSPgoUFSLnZ9tusZcIsAOAKb+9YHvJvQ4SFMqGRZ+wBVHH30JUDF54aRksgzrbGhAKBHJ1bmUSCDM4MDAwMDAwEmYKUApGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQPtmX45bPQpL1/OWkK7pBWZzNXZbjExVKfJ6nBJ3jF8dxIECgIIARgVEhIKCwoEcnVuZRIDMjAwEKDLmAEaQKZtS3ATa26OOGvqdKm14ZbHeNfkPtIajXi5MkZ5XaX2SWOeX+YnCPZ9TxF9Jj5cVIo71m55xq4hVL3yDbRe89g=',
  );
  assert.equal(txid, toHex(sha256(fromBase64(txBytes))).toUpperCase());
  key.delete();
});

test('native checks refuse other senders, keys and message kinds', () => {
  const wallet = HDWallet.createWithMnemonic(WORDS, '');
  const key = wallet.getKeyForCoin(CoinType.cosmos);
  const own = CoinTypeExt.deriveAddress(CoinType.cosmos, key);
  const otherKey = PrivateKey.createWithData(HexCoding.decode('22'.repeat(32)));
  const stranger = CoinTypeExt.deriveAddressFromPublicKey(CoinType.cosmos, otherKey.getPublicKey(CoinType.cosmos));
  otherKey.delete();
  const base = { coin: 118, chainId: 'cosmoshub-4', accountNumber: 1, sequence: 1, to: own, denom: 'uatom', amount: 1n, fee: null, gas: 200_000n };
  assert.throws(() => nativeSignCosmos(118, cosmosSendInput({ ...base, from: stranger }), key, own), /not from this wallet/);

  const P = TW.Cosmos.Proto;
  const tweak = (f: (i: TW.Cosmos.Proto.SigningInput) => void) => {
    const i = P.SigningInput.decode(fromBase64(cosmosSendInput({ ...base, from: own })));
    f(i);
    return toBase64(P.SigningInput.encode(i).finish());
  };
  assert.throws(() => nativeSignCosmos(118, tweak((i) => (i.publicKey = new Uint8Array(33))), key, own), /INVALID/);
  assert.throws(() => nativeSignCosmos(118, tweak((i) => (i.privateKey = new Uint8Array(32))), key, own), /INVALID/);
  assert.throws(() => nativeSignCosmos(118, tweak((i) => (i.signingMode = P.SigningMode.JSON)), key, own), /INVALID/);
  assert.throws(() => nativeSignCosmos(118, tweak((i) => (i.messages = [])), key, own), /INVALID/);
  assert.throws(
    () => nativeSignCosmos(118, tweak((i) => i.messages.push(P.Message.create({ stakeMessage: { delegatorAddress: own, validatorAddress: 'x' } }))), key, own),
    /not supported/,
  );
  // A second message from someone else is refused too.
  assert.throws(
    () => nativeSignCosmos(118, tweak((i) => i.messages.push(P.Message.create({ sendCoinsMessage: { fromAddress: stranger, toAddress: own, amounts: [] } }))), key, own),
    /not from this wallet/,
  );
  key.delete();
  wallet.delete();
});

test('THORChain addresses are checked before building', () => {
  const ok = 'thor1e2ryt8asq4gu0h6z2sx9u7rfrykgxwkmr9upxn';
  assert.equal(bech32Data(ok, 'thor').length, 20);
  assert.equal(toHex(bech32Data(ok.toUpperCase(), 'thor')), toHex(bech32Data(ok, 'thor')));
  const base = { coin: 931, chainId: 'thorchain-1', accountNumber: 1, sequence: 1, from: ok, to: ok, denom: 'rune', amount: 1n, fee: null, gas: 6_000_000n };
  assert.throws(() => cosmosSendInput({ ...base, to: 'thor1e2ryt8asq4gu0h6z2sx9u7rfrykgxwkmr9upxm' }), /bad thor address/); // checksum
  assert.throws(() => cosmosSendInput({ ...base, to: 'cosmos1e2ryt8asq4gu0h6z2sx9u7rfrykgxwkmr9upxn' }), /bad thor address/); // prefix
  assert.throws(() => cosmosSendInput({ ...base, from: 'thor1E2ryt8asq4gu0h6z2sx9u7rfrykgxwkmr9upxn' }), /bad thor address/); // mixed case
  assert.throws(() => thorchainDepositInput({ chainId: 'thorchain-1', accountNumber: 1, sequence: 1, signer: '0xabc', amount: 1n, memo: 'x', gas: 1n }), /bad thor address/);
  assert.throws(() => cosmosSendInput({ ...base, amount: -1n }), RangeError);
});

test('cosmosOutput throws on a signing error', () => {
  const err = TW.Cosmos.Proto.SigningOutput.encode({ error: 22, errorMessage: 'Incorrect input parameter' }).finish();
  assert.throws(() => cosmosOutput(toBase64(err)), /Incorrect input parameter/);
  const empty = TW.Cosmos.Proto.SigningOutput.encode({ serialized: '{"mode":"BROADCAST_MODE_SYNC"}' }).finish();
  assert.throws(() => cosmosOutput(toBase64(empty)), /no tx_bytes/);
});
