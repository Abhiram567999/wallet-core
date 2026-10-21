// Builds Trust Wallet Core SigningInputs WITHOUT a private key, for the native
// signTransaction (pre-image hash → sign in secure hardware → compile), and
// reads the SigningOutputs back. docs/SPEC.md §7.

import { TW } from './proto/tw.js';
import { fromBase64, toBase64, toHex } from './encoding.ts';

/** bigint → minimal big-endian bytes (0 → empty), as Trust Wallet Core expects for amounts. */
export function bigToBytes(v: bigint): Uint8Array {
  if (v < 0n) throw new RangeError('negative amount');
  if (v === 0n) return new Uint8Array(0);
  let hex = v.toString(16);
  if (hex.length % 2) hex = `0${hex}`;
  return hexToBytes(hex);
}

export function hexToBytes(hex: string): Uint8Array {
  const h = hex.replace(/^0x/, '');
  if (h.length % 2 || /[^0-9a-fA-F]/.test(h)) throw new Error('bad hex');
  const out = new Uint8Array(h.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(h.slice(i * 2, i * 2 + 2), 16);
  return out;
}

const enc = (msg: { finish(): Uint8Array }) => toBase64(msg.finish());

// MARK: EVM (Ethereum, BNB Chain, Polygon, Arbitrum, Base, Optimism, Avalanche …)

export interface EvmTransfer {
  chainId: bigint;
  nonce: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  gasLimit: bigint;
  to: string;
  amount: bigint;
  /** ERC-20 contract; omitted for the native coin. */
  token?: string;
}

export function evmTransferInput(p: EvmTransfer): string {
  const P = TW.Ethereum.Proto;
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        chainId: bigToBytes(p.chainId),
        nonce: bigToBytes(p.nonce),
        txMode: P.TransactionMode.Enveloped,
        maxFeePerGas: bigToBytes(p.maxFeePerGas),
        maxInclusionFeePerGas: bigToBytes(p.maxPriorityFeePerGas),
        gasLimit: bigToBytes(p.gasLimit),
        toAddress: p.token ?? p.to,
        transaction: p.token
          ? { erc20Transfer: { to: p.to, amount: bigToBytes(p.amount) } }
          : { transfer: { amount: bigToBytes(p.amount) } },
      }),
    ),
  );
}

/** Raw signed transaction (0x…) for eth_sendRawTransaction. */
export function evmOutput(b64: string): { raw: string } {
  const out = TW.Ethereum.Proto.SigningOutput.decode(fromBase64(b64));
  if (out.errorMessage) throw new Error(out.errorMessage);
  return { raw: `0x${toHex(out.encoded)}` };
}

// MARK: TRON (TRX and TRC-20 such as USDT)

export interface TronBlock {
  number: number;
  timestamp: number;
  txTrieRoot: string; // hex
  parentHash: string; // hex
  witnessAddress: string; // hex (41…)
  version: number;
}

export interface TronTransfer {
  from: string;
  to: string;
  amount: bigint; // sun, or token base units
  token?: string; // TRC-20 contract
  feeLimit?: bigint; // sun, TRC-20 only
  block: TronBlock;
  now?: number;
}

export function tronTransferInput(p: TronTransfer): string {
  const P = TW.Tron.Proto;
  const now = p.now ?? Date.now();
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        transaction: {
          timestamp: now,
          expiration: now + 10 * 60 * 1000,
          blockHeader: {
            number: p.block.number,
            timestamp: p.block.timestamp,
            txTrieRoot: hexToBytes(p.block.txTrieRoot),
            parentHash: hexToBytes(p.block.parentHash),
            witnessAddress: hexToBytes(p.block.witnessAddress),
            version: p.block.version,
          },
          ...(p.token
            ? {
                feeLimit: Number(p.feeLimit ?? 30_000_000n),
                transferTrc20Contract: { contractAddress: p.token, ownerAddress: p.from, toAddress: p.to, amount: bigToBytes(p.amount) },
              }
            : { transfer: { ownerAddress: p.from, toAddress: p.to, amount: Number(p.amount) } }),
        },
      }),
    ),
  );
}

/** Signed transaction JSON for /wallet/broadcasttransaction, and its id. */
export function tronOutput(b64: string): { json: string; txid: string } {
  const out = TW.Tron.Proto.SigningOutput.decode(fromBase64(b64));
  if (out.errorMessage) throw new Error(out.errorMessage);
  return { json: out.json, txid: toHex(out.id) };
}

// MARK: Solana (SOL)

export interface SolanaTransfer {
  from: string;
  to: string;
  lamports: bigint;
  recentBlockhash: string;
}

export function solanaTransferInput(p: SolanaTransfer): string {
  const P = TW.Solana.Proto;
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        sender: p.from,
        recentBlockhash: p.recentBlockhash,
        transferTransaction: { recipient: p.to, value: Number(p.lamports) },
        txEncoding: P.Encoding.Base64,
      }),
    ),
  );
}

/** Signed transaction (base64) for sendTransaction with encoding "base64". */
export function solanaOutput(b64: string): { tx: string } {
  const out = TW.Solana.Proto.SigningOutput.decode(fromBase64(b64));
  if (out.errorMessage) throw new Error(out.errorMessage);
  return { tx: out.encoded };
}

// MARK: Bitcoin family (BTC; LTC, DOGE, BCH use the same format)

export interface Utxo {
  txid: string; // hex, as explorers show it
  vout: number;
  value: bigint; // satoshis
}

export interface BitcoinTransfer {
  coin: number; // CoinType (0 = Bitcoin)
  from: string; // sender's own address; the native code forces change back to it
  to: string;
  amount: bigint; // satoshis (ignored when useMax)
  byteFee: bigint; // satoshis per virtual byte
  utxos: Utxo[];
  /** Send everything minus the fee. */
  useMax?: boolean;
}

/**
 * Unsigned Bitcoin SigningInput. Locking scripts are left empty: the native
 * code fills them for the wallet's own address, adds the key and signs with
 * Trust Wallet Core's Bitcoin signer (SPEC §7).
 */
export function bitcoinTransferInput(p: BitcoinTransfer): string {
  const P = TW.Bitcoin.Proto;
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        hashType: 1, // SIGHASH_ALL
        amount: Number(p.amount),
        byteFee: Number(p.byteFee),
        toAddress: p.to,
        changeAddress: p.from,
        coinType: p.coin,
        useMaxAmount: !!p.useMax,
        utxo: p.utxos.map((u) => ({
          outPoint: { hash: hexToBytes(u.txid).reverse(), index: u.vout, sequence: 0xfffffffd }, // RBF-enabled
          amount: Number(u.value),
        })),
      }),
    ),
  );
}

/** Raw signed transaction (hex) for broadcasting, its id, and the fee actually paid. */
export function bitcoinOutput(b64: string): { raw: string; txid: string } {
  const out = TW.Bitcoin.Proto.SigningOutput.decode(fromBase64(b64));
  if (out.error) throw new Error(out.errorMessage || `bitcoin signing error ${out.error}`);
  return { raw: toHex(out.encoded), txid: out.transactionId };
}
