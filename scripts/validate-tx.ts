// Network check of the transaction builders (not part of CI): signs each
// transaction like the phone does (pre-image → sign → compile) with a public
// test key that holds no funds, submits it, and expects the network to refuse
// it for lack of funds, never for a bad signature.
//   node scripts/validate-tx.ts
import { initWasm, TW as FULL } from '@trustwallet/wallet-core';
import { evmOutput, evmTransferInput, solanaOutput, solanaTransferInput, tronOutput, tronTransferInput } from '../src/tx.ts';
import { fromBase64, toBase64 } from '../src/encoding.ts';

const core = await initWasm();
const { CoinType, CoinTypeExt, PrivateKey, HexCoding, TransactionCompiler, DataVector, Blockchain } = core;

function sign(coin: any, inputB64: string, keyHex: string): string {
  const input = fromBase64(inputB64);
  const pre = FULL.TxCompiler.Proto.PreSigningOutput.decode(TransactionCompiler.preImageHashes(coin, input));
  if (pre.errorMessage) throw new Error(pre.errorMessage);
  const key = PrivateKey.createWithData(HexCoding.decode(keyHex));
  const isSolana = CoinTypeExt.blockchain(coin).value === Blockchain.solana.value;
  const sig = key.sign(isSolana ? pre.data : pre.dataHash, CoinTypeExt.curve(coin));
  const pub = key.getPublicKey(coin);
  const out = TransactionCompiler.compileWithSignatures(coin, input, DataVector.createWithData(sig), DataVector.createWithData(pub.data()));
  return toBase64(out);
}
const post = async (url: string, body: unknown) => (await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })).json();
const KEY = '4646464646464646464646464646464646464646464646464646464646464646';
const addr = (coin: any) => CoinTypeExt.deriveAddress(coin, PrivateKey.createWithData(HexCoding.decode(KEY)));

// EVM on Sepolia: native and ERC-20 (any contract; funds are checked first).
{
  const rpc = 'https://ethereum-sepolia-rpc.publicnode.com';
  for (const token of [undefined, '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238']) {
    const raw = evmOutput(sign(CoinType.ethereum, evmTransferInput({ chainId: 11155111n, nonce: 0n, maxFeePerGas: 30_000_000_000n, maxPriorityFeePerGas: 1_000_000_000n, gasLimit: 65_000n, to: '0x3535353535353535353535353535353535353535', amount: 1000n, token }), KEY)).raw;
    console.log('EVM', token ? 'ERC-20' : 'native', '->', JSON.stringify((await post(rpc, { jsonrpc: '2.0', id: 1, method: 'eth_sendRawTransaction', params: [raw] })).error?.message ?? 'ACCEPTED'));
  }
}

// TRON mainnet: TRX and USDT.
{
  const api = 'https://tron-rpc.publicnode.com';
  const b = (await post(`${api}/wallet/getnowblock`, {})).block_header.raw_data;
  const block = { number: b.number, timestamp: b.timestamp, txTrieRoot: b.txTrieRoot, parentHash: b.parentHash, witnessAddress: b.witness_address, version: b.version ?? 0 };
  for (const token of [undefined, 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t']) {
    const { json, txid } = tronOutput(sign(CoinType.tron, tronTransferInput({ from: addr(CoinType.tron), to: 'TCEezhePNTyie5gkrb77zAZLBx9RMffLuN', amount: 1000n, token, block }), KEY));
    const r = await post(`${api}/wallet/broadcasttransaction`, JSON.parse(json));
    console.log('TRON', token ? 'TRC-20' : 'TRX', txid.slice(0, 10), '->', r.code ?? r.result, Buffer.from(r.message ?? '', 'hex').toString() || '');
  }
}

// Solana mainnet: simulate with signature verification.
{
  const rpc = 'https://api.mainnet-beta.solana.com';
  const KEY_SOL = '8778cc93c6596387e751d2dc693bbd93e434bd233bc5b68a826c56131821cb63';
  const from = CoinTypeExt.deriveAddress(CoinType.solana, PrivateKey.createWithData(HexCoding.decode(KEY_SOL)));
  const bh = (await post(rpc, { jsonrpc: '2.0', id: 1, method: 'getLatestBlockhash', params: [] })).result.value.blockhash;
  const { tx } = solanaOutput(sign(CoinType.solana, solanaTransferInput({ from, to: 'GjJyeC1r2RgkuoCWMyPYkCWSGSGLcz266EaAkLA27AhL', lamports: 1000n, recentBlockhash: bh }), KEY_SOL));
  const r = await post(rpc, { jsonrpc: '2.0', id: 1, method: 'simulateTransaction', params: [tx, { encoding: 'base64', sigVerify: true }] });
  console.log('SOLANA ->', JSON.stringify(r.error ?? r.result?.value?.err));
}
