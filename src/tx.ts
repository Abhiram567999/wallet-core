// Builds Trust Wallet Core SigningInputs WITHOUT a private key, for the native
// signTransaction (pre-image hash → sign in secure hardware → compile), and
// reads the SigningOutputs back. docs/SPEC.md §7.

import { sha256 } from '@noble/hashes/sha2.js';
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

/** A contract call (swap routers, THORChain's router): `value` in the native coin plus calldata. */
export interface EvmCall {
  chainId: bigint;
  nonce: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  gasLimit: bigint;
  to: string;
  value: bigint;
  data: string; // 0x… calldata
}

export function evmCallInput(p: EvmCall): string {
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
        toAddress: p.to,
        transaction: { contractGeneric: { amount: bigToBytes(p.value), data: hexToBytes(p.data) } },
      }),
    ),
  );
}

/** ERC-20 approve(spender, amount): lets a swap router take exactly `amount` of the token. */
export interface EvmApprove {
  chainId: bigint;
  nonce: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  gasLimit: bigint;
  token: string;
  spender: string;
  amount: bigint;
}

export function evmApproveInput(p: EvmApprove): string {
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
        toAddress: p.token,
        transaction: { erc20Approve: { spender: p.spender, amount: bigToBytes(p.amount) } },
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
  /** How long the signed transaction stays valid (default 10 minutes). */
  expiresInMs?: number;
  /** Note stored with the transaction (THORChain swap instructions). */
  memo?: string;
}

export function tronTransferInput(p: TronTransfer): string {
  const P = TW.Tron.Proto;
  const now = p.now ?? Date.now();
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        transaction: {
          timestamp: now,
          expiration: now + (p.expiresInMs ?? 10 * 60 * 1000),
          ...(p.memo ? { memo: p.memo } : {}),
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
  /** Memo instruction (THORChain swap instructions). */
  memo?: string;
}

export function solanaTransferInput(p: SolanaTransfer): string {
  const P = TW.Solana.Proto;
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        sender: p.from,
        recentBlockhash: p.recentBlockhash,
        transferTransaction: { recipient: p.to, value: Number(p.lamports), ...(p.memo ? { memo: p.memo } : {}) },
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
  /** OP_RETURN output with this text (THORChain swap instructions, at most 80 bytes). */
  memo?: string;
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
        ...(p.memo ? { outputOpReturn: new TextEncoder().encode(p.memo) } : {}),
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

// MARK: Solana tokens (SPL: USDT, USDC …)

export interface SolanaTokenTransfer {
  from: string; // sender's main address
  mint: string;
  decimals: number;
  amount: bigint; // token base units
  senderTokenAddress: string;
  recipient: string; // recipient's main address
  recipientTokenAddress: string; // associatedTokenAddress(recipient, mint)
  /** The recipient has no account for this token yet: create it (the sender pays ~0.002 SOL rent). */
  createRecipientAccount: boolean;
  recentBlockhash: string;
}

export function solanaTokenTransferInput(p: SolanaTokenTransfer): string {
  const P = TW.Solana.Proto;
  const common = {
    tokenMintAddress: p.mint,
    senderTokenAddress: p.senderTokenAddress,
    recipientTokenAddress: p.recipientTokenAddress,
    amount: Number(p.amount),
    decimals: p.decimals,
  };
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        sender: p.from,
        recentBlockhash: p.recentBlockhash,
        txEncoding: P.Encoding.Base64,
        ...(p.createRecipientAccount
          ? { createAndTransferTokenTransaction: { ...common, recipientMainAddress: p.recipient } }
          : { tokenTransferTransaction: common }),
      }),
    ),
  );
}

// MARK: Cosmos family (Cosmos Hub, Osmosis, Injective, THORChain …)
// Protobuf mode, no key and no public key: the native signCosmos adds the
// wallet's own public key after checking the sender (SPEC §7.5).

const THORCHAIN = 931;
const BECH32 = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

function bech32Polymod(values: number[]): number {
  const G = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
  let chk = 1;
  for (const v of values) {
    const top = chk >>> 25;
    chk = ((chk & 0x1ffffff) << 5) ^ v;
    for (let i = 0; i < 5; i++) if ((top >>> i) & 1) chk ^= G[i]!;
  }
  return chk >>> 0;
}

/** Raw data of a bech32 address with this prefix (checksum checked); throws on anything else. */
export function bech32Data(address: string, prefix: string): Uint8Array {
  const bad = () => new Error(`bad ${prefix} address`);
  if (address.length > 90 || (address !== address.toLowerCase() && address !== address.toUpperCase())) throw bad();
  const a = address.toLowerCase();
  const sep = a.lastIndexOf('1');
  if (sep < 1 || a.length - sep - 1 < 6 || a.slice(0, sep) !== prefix) throw bad();
  const words: number[] = [];
  for (const ch of a.slice(sep + 1)) {
    const v = BECH32.indexOf(ch);
    if (v < 0) throw bad();
    words.push(v);
  }
  const hrp = [...prefix].map((c) => c.charCodeAt(0));
  if (bech32Polymod([...hrp.map((c) => c >> 5), 0, ...hrp.map((c) => c & 31), ...words]) !== 1) throw bad();
  // 5-bit groups → bytes; leftover bits must be zero padding.
  const out: number[] = [];
  let acc = 0;
  let bits = 0;
  for (const w of words.slice(0, -6)) {
    acc = ((acc << 5) | w) & 0xfff;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      out.push((acc >> bits) & 255);
    }
  }
  if (bits >= 5 || (acc & ((1 << bits) - 1)) !== 0) throw bad();
  if (out.length !== 20 && out.length !== 32) throw bad();
  return Uint8Array.from(out);
}

const u64 = (v: number | bigint, what: string): number => {
  const n = BigInt(v);
  if (n < 0n || n > BigInt(Number.MAX_SAFE_INTEGER)) throw new RangeError(`bad ${what}`);
  return Number(n);
};

const amountString = (v: bigint): string => {
  if (v < 0n) throw new RangeError('negative amount');
  return v.toString();
};

export interface CosmosSend {
  coin: number; // CoinType (931 THORChain, 118 Cosmos Hub, 10000118 Osmosis …)
  chainId: string;
  accountNumber: number | bigint;
  sequence: number | bigint;
  from: string;
  to: string;
  denom: string;
  amount: bigint; // base units
  /** null: no fee coins (THORChain takes its fixed fee itself). */
  fee: { denom: string; amount: bigint } | null;
  gas: bigint;
  memo?: string;
}

export function cosmosSendInput(p: CosmosSend): string {
  const P = TW.Cosmos.Proto;
  const amounts = [{ denom: p.denom, amount: amountString(p.amount) }];
  const message =
    p.coin === THORCHAIN
      ? { thorchainSendMessage: { fromAddress: bech32Data(p.from, 'thor'), toAddress: bech32Data(p.to, 'thor'), amounts } }
      : { sendCoinsMessage: { fromAddress: p.from, toAddress: p.to, amounts } };
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        signingMode: P.SigningMode.Protobuf,
        accountNumber: u64(p.accountNumber, 'account number'),
        chainId: p.chainId,
        sequence: u64(p.sequence, 'sequence'),
        mode: P.BroadcastMode.SYNC,
        fee: {
          gas: u64(p.gas, 'gas'),
          amounts: p.fee ? [{ denom: p.fee.denom, amount: amountString(p.fee.amount) }] : [],
        },
        ...(p.memo ? { memo: p.memo } : {}),
        messages: [message],
      }),
    ),
  );
}

/** THORChain MsgDeposit of RUNE (swaps out of RUNE; the memo holds the swap instructions). */
export interface ThorDeposit {
  chainId: string;
  accountNumber: number | bigint;
  sequence: number | bigint;
  signer: string; // thor1…
  amount: bigint; // 1e8 units
  memo: string;
  gas: bigint;
}

export function thorchainDepositInput(p: ThorDeposit): string {
  const P = TW.Cosmos.Proto;
  return enc(
    P.SigningInput.encode(
      P.SigningInput.create({
        signingMode: P.SigningMode.Protobuf,
        accountNumber: u64(p.accountNumber, 'account number'),
        chainId: p.chainId,
        sequence: u64(p.sequence, 'sequence'),
        mode: P.BroadcastMode.SYNC,
        fee: { gas: u64(p.gas, 'gas'), amounts: [] },
        messages: [
          {
            thorchainDepositMessage: {
              coins: [{ asset: { chain: 'THOR', symbol: 'RUNE', ticker: 'RUNE' }, amount: amountString(p.amount), decimals: 8 }],
              memo: p.memo,
              signer: bech32Data(p.signer, 'thor'),
            },
          },
        ],
      }),
    ),
  );
}

/** Signed tx_bytes (base64) for POST /cosmos/tx/v1beta1/txs, and its hash (uppercase hex SHA-256). */
export function cosmosOutput(b64: string): { txBytes: string; txid: string } {
  const out = TW.Cosmos.Proto.SigningOutput.decode(fromBase64(b64));
  if (out.error || out.errorMessage) throw new Error(out.errorMessage || `cosmos signing error ${out.error}`);
  let txBytes: unknown;
  try {
    txBytes = (JSON.parse(out.serialized) as { tx_bytes?: unknown }).tx_bytes;
  } catch {
    throw new Error('cosmos signing output is not JSON');
  }
  if (typeof txBytes !== 'string' || !txBytes) throw new Error('cosmos signing output has no tx_bytes');
  return { txBytes, txid: toHex(sha256(fromBase64(txBytes))).toUpperCase() };
}
