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
