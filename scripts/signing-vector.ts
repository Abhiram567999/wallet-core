// Ethereum signing vector: the EIP-155 example transaction, built without the
// key (as the app does), then signed the way the native code signs:
// pre-image hash -> sign with the key -> compile.
import { initWasm, TW } from '@trustwallet/wallet-core';

export const EIP155 = {
  privateKeyHex: '4646464646464646464646464646464646464646464646464646464646464646',
  expectedRawTx:
    'f86c098504a817c800825208943535353535353535353535353535353535353535880de0b6b3a76400008025a028ef61340bd939bc2195fe537567866003e1a15d3c71ff63e1590620aa636276a067cbe9d8997f761aecb703304b3800ccf555c9f3dc64214b297fb1966a3b6d83',
};

export async function makeSigningVector() {
  const core = await initWasm();
  const { CoinType, CoinTypeExt, PrivateKey, HexCoding, TransactionCompiler, DataVector } = core;
  const coin = CoinType.ethereum;
  const input = TW.Ethereum.Proto.SigningInput.encode(
    TW.Ethereum.Proto.SigningInput.create({
      chainId: HexCoding.decode('01'),
      nonce: HexCoding.decode('09'),
      txMode: TW.Ethereum.Proto.TransactionMode.Legacy,
      gasPrice: HexCoding.decode('04a817c800'),
      gasLimit: HexCoding.decode('5208'),
      toAddress: '0x3535353535353535353535353535353535353535',
      transaction: { transfer: { amount: HexCoding.decode('0de0b6b3a7640000') } },
    }),
  ).finish();

  const pre = TW.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(coin, input));
  if (pre.errorMessage) throw new Error(pre.errorMessage);
  const key = PrivateKey.createWithData(HexCoding.decode(EIP155.privateKeyHex));
  const sig = key.sign(pre.dataHash, CoinTypeExt.curve(coin));
  const pub = key.getPublicKey(coin);
  const output = TransactionCompiler.compileWithSignatures(coin, input, DataVector.createWithData(sig), DataVector.createWithData(pub.data()));
  const encoded = Buffer.from(TW.Ethereum.Proto.SigningOutput.decode(output).encoded).toString('hex');
  if (encoded !== EIP155.expectedRawTx) throw new Error(`signed tx mismatch: ${encoded}`);
  key.delete();
  return {
    note: 'EIP-155 example. Key 0x4646… is public; never fund it.',
    coin: coin.value,
    privateKeyHex: EIP155.privateKeyHex,
    inputBase64: Buffer.from(input).toString('base64'),
    outputBase64: Buffer.from(output).toString('base64'),
    expectedRawTx: EIP155.expectedRawTx,
  };
}

// Bitcoin vector: an unsigned input built by bitcoinTransferInput (as the app
// does), then completed the way the native code does it: change and locking
// scripts forced to the wallet's own address, key added, Bitcoin signer.
export async function makeBitcoinVector() {
  const { bitcoinTransferInput } = await import('../src/tx.ts');
  const core = await initWasm();
  const { CoinType, CoinTypeExt, HDWallet, BitcoinScript, AnySigner } = core;
  const words = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
  const coin = CoinType.bitcoin;
  const wallet = HDWallet.createWithMnemonic(words, '');
  const key = wallet.getKeyForCoin(coin);
  const own = CoinTypeExt.deriveAddress(coin, key);
  const inputBase64 = bitcoinTransferInput({
    coin: 0,
    from: 'bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // deliberately wrong: native code must replace it
    to: 'bc1qku0qh0mc00y8tk0n65x2tqw4trlspak0fnjmfz', // the same test phrase, account 2
    amount: 30_000n,
    byteFee: 10n,
    utxos: [{ txid: '1111111111111111111111111111111111111111111111111111111111111111', vout: 0, value: 100_000n }],
  });
  const input = TW.Bitcoin.Proto.SigningInput.decode(Buffer.from(inputBase64, 'base64'));
  input.changeAddress = own;
  const script = BitcoinScript.lockScriptForAddress(own, coin).data();
  for (const u of input.utxo) u.script = script;
  input.privateKey = [key.data()];
  const out = TW.Bitcoin.Proto.SigningOutput.decode(AnySigner.sign(TW.Bitcoin.Proto.SigningInput.encode(input).finish(), coin));
  if (out.error || out.encoded.length === 0) throw new Error(`bitcoin signing failed: ${out.error} ${out.errorMessage}`);
  key.delete();
  wallet.delete();
  return {
    note: 'Fake input (txid 1111…); signs with the public test phrase. Never fund it.',
    words,
    ownAddress: own,
    inputBase64,
    rawHex: Buffer.from(out.encoded).toString('hex'),
    txid: out.transactionId,
  };
}

// Litecoin, Dogecoin and Bitcoin Cash: the same native path as Bitcoin, with
// their own address types (SegWit, legacy P2PKH, CashAddr) and, for BCH, the
// fork-id signature. Recipient: account 2 of the same public test phrase.
export async function makeUtxoVectors() {
  const { bitcoinTransferInput } = await import('../src/tx.ts');
  const core = await initWasm();
  const { CoinType, CoinTypeExt, HDWallet, BitcoinScript, AnySigner } = core;
  const words = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
  const cases: [string, any, string, bigint, bigint, bigint][] = [
    // name, coin, recipient (account 2), amount, fee rate, utxo value
    ['litecoin', CoinType.litecoin, 'ltc1q6he42udnkdx2m5dctfyjs2z9xl76xcdshd5htt', 3_000_000n, 10n, 10_000_000n],
    ['dogecoin', CoinType.dogecoin, 'DEiUcV7xvCRdpQmsW3i8T9EVsb7zeiUQRt', 500_000_000n, 1000n, 1_000_000_000n],
    ['bitcoinCash', CoinType.bitcoinCash, 'bitcoincash:qqsmeq8pee5px5z3f3uj57cu8dch9d5x55sn68q6wd', 30_000n, 1n, 100_000n],
  ];
  const wallet = HDWallet.createWithMnemonic(words, '');
  const out: Record<string, unknown> = {};
  for (const [name, coin, to, amount, byteFee, value] of cases) {
    const key = wallet.getKeyForCoin(coin);
    const own = CoinTypeExt.deriveAddress(coin, key);
    const inputBase64 = bitcoinTransferInput({ coin: coin.value, from: 'wrong-change-address', to, amount, byteFee, utxos: [{ txid: '22'.repeat(32), vout: 1, value }] });
    const input = TW.Bitcoin.Proto.SigningInput.decode(Buffer.from(inputBase64, 'base64'));
    input.changeAddress = own;
    const script = BitcoinScript.lockScriptForAddress(own, coin).data();
    for (const u of input.utxo) u.script = script;
    input.privateKey = [key.data()];
    const o = TW.Bitcoin.Proto.SigningOutput.decode(AnySigner.sign(TW.Bitcoin.Proto.SigningInput.encode(input).finish(), coin));
    if (o.error || o.encoded.length === 0) throw new Error(`${name} signing failed: ${o.error} ${o.errorMessage}`);
    out[name] = { coin: coin.value, ownAddress: own, to, inputBase64, rawHex: Buffer.from(o.encoded).toString('hex'), txid: o.transactionId };
    key.delete();
  }
  wallet.delete();
  return { note: 'Fake inputs (txid 2222…); public test phrase. Never fund it.', words, ...out };
}
