// What a transaction does, read from the SigningInput itself: the reference for the native
// "secure send screen" (SPEC §7.13). The native code (Swift, Kotlin) mirrors this file and shows
// the result on a screen the app's JavaScript can't draw or press, before Face ID. So the user
// confirms what is really signed, not what the app says is signed.
//
// Rules of this file:
// - Everything shown comes from the bytes that are signed. The only outside value is `hint.to`
//   (a Solana owner address), and it is used only after proving it leads to the signed token account.
// - Anything that is not a plain send of a coin or token is `other`: the screen then says it can't
//   read what the transaction does, never a guess.

import { TW } from './proto/tw.js';

export interface Asset {
  /** Ticker when known (the coin itself, or a token on the list below). */
  symbol?: string;
  decimals?: number;
  /** Token contract / mint, for tokens. */
  contract?: string;
}

export type SendSummary =
  | {
      kind: 'send';
      network: string;
      asset: Asset;
      /** Raw units (decimal string). Empty when `all` is set. */
      amount: string;
      /** Bitcoin family "send everything": the amount is whatever is left after the fee. */
      all?: boolean;
      to: string;
      /** The transaction carries a note / memo (swap instructions). */
      note?: boolean;
      /** Gasless TRON extras signed with the same Face ID (SPEC §7.2), raw units. */
      feeUsdt?: string;
      energySun?: string;
    }
  | { kind: 'other'; network: string; to?: string; value?: string; asset?: Asset };

/** What the reference needs from Trust Wallet Core (the wasm `core` in tests; native calls the same functions). */
export interface CoreLike {
  CoinTypeConfiguration: { getName(coin: unknown): string; getSymbol(coin: unknown): string; getDecimals(coin: unknown): number };
  CoinTypeExt: { chainId(coin: unknown): string; blockchain(coin: unknown): { value: number } };
  Blockchain: Record<string, { value: number }>;
  SolanaAddress: { createWithString(s: string): { defaultTokenAddress(mint: string): string; delete?(): void } };
}

/** Tokens shown by name. Anything else is shown by its contract, in raw units. Lowercase for EVM. */
export const KNOWN_TOKENS: Record<string, Record<string, { symbol: string; decimals: number }>> = {
  tron: {
    TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t: { symbol: 'USDT', decimals: 6 },
    TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8: { symbol: 'USDC', decimals: 6 },
  },
  solana: {
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: { symbol: 'USDT', decimals: 6 },
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: { symbol: 'USDC', decimals: 6 },
  },
  'evm:1': {
    '0xdac17f958d2ee523a2206206994597c13d831ec7': { symbol: 'USDT', decimals: 6 },
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': { symbol: 'USDC', decimals: 6 },
  },
  'evm:56': {
    '0x55d398326f99059ff775485246999027b3197955': { symbol: 'USDT', decimals: 18 },
    '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d': { symbol: 'USDC', decimals: 18 },
  },
  'evm:8453': { '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913': { symbol: 'USDC', decimals: 6 } },
  'evm:137': {
    '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': { symbol: 'USDT', decimals: 6 },
    '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359': { symbol: 'USDC', decimals: 6 },
  },
  'evm:42161': {
    '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9': { symbol: 'USDT', decimals: 6 },
    '0xaf88d065e77c8cc2239327c5edb3a432268e5831': { symbol: 'USDC', decimals: 6 },
  },
  'evm:10': {
    '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58': { symbol: 'USDT', decimals: 6 },
    '0x0b2c639c533813f4aa9d7837caf62653d097ff85': { symbol: 'USDC', decimals: 6 },
  },
};

const TRON_USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';

const bytesToBig = (b: Uint8Array | null | undefined): bigint => {
  let v = 0n;
  for (const x of b ?? []) v = (v << 8n) | BigInt(x);
  return v;
};
const hex = (b: Uint8Array) => Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');

/** transfer(address,uint256) calldata → [to, amount], or null if it is anything else. */
function erc20Transfer(data: Uint8Array): { to: string; amount: bigint } | null {
  if (data.length !== 68 || hex(data.subarray(0, 4)) !== 'a9059cbb') return null;
  if (data.subarray(4, 16).some((x) => x !== 0)) return null;
  return { to: `0x${hex(data.subarray(16, 36))}`, amount: bytesToBig(data.subarray(36)) };
}

/**
 * What `inputs` (the SigningInputs given to signTransactions, first the user's transaction, then
 * gasless extras) do. Throws only for unreadable bytes; everything readable but not a plain send
 * comes back as `other`.
 */
export function sendSummary(core: CoreLike, coin: unknown, inputs: Uint8Array[], hint: { to?: string } = {}): SendSummary {
  const C = core.CoinTypeConfiguration;
  const network = C.getName(coin);
  const native: Asset = { symbol: C.getSymbol(coin), decimals: C.getDecimals(coin) };
  const chain = core.CoinTypeExt.blockchain(coin).value;
  const B = core.Blockchain;
  const first = inputs[0];
  if (!first) throw new Error('no transaction');
  const other = (extra: { to?: string; value?: string; asset?: Asset } = {}): SendSummary => ({ kind: 'other', network, ...extra });

  if (chain === B.tron!.value) {
    const read = (bytes: Uint8Array) => {
      const input = TW.Tron.Proto.SigningInput.decode(bytes);
      if (input.rawJson) return null; // refused by the signer too (SPEC §7.12)
      return input.transaction ?? null;
    };
    const tx = read(first);
    if (!tx) return other();
    let s: SendSummary;
    if (tx.transfer) {
      s = { kind: 'send', network, asset: native, amount: String(tx.transfer.amount ?? 0), to: tx.transfer.toAddress ?? '' };
    } else if (tx.transferTrc20Contract) {
      const t = tx.transferTrc20Contract;
      const contract = t.contractAddress ?? '';
      s = { kind: 'send', network, asset: { ...KNOWN_TOKENS.tron![contract], contract }, amount: bytesToBig(t.amount).toString(), to: t.toAddress ?? '' };
    } else {
      return other({ to: tx.triggerSmartContract?.contractAddress ?? undefined });
    }
    if (tx.memo) s.note = true;
    // Extras: the fee transfer and energy payments the native rule already limits (SPEC §7.2).
    let feeUsdt = 0n;
    let energy = 0n;
    for (const extra of inputs.slice(1)) {
      const x = read(extra);
      if (x?.transferTrc20Contract && x.transferTrc20Contract.contractAddress === TRON_USDT) feeUsdt += bytesToBig(x.transferTrc20Contract.amount);
      else if (x?.transfer) energy += BigInt(String(x.transfer.amount ?? 0));
      else return other();
    }
    if (feeUsdt > 0n) s.feeUsdt = feeUsdt.toString();
    if (energy > 0n) s.energySun = energy.toString();
    return s;
  }

  // Only TRON signs more than one transaction with one Face ID.
  if (inputs.length !== 1) return other();

  if (chain === B.ethereum!.value) {
    const input = TW.Ethereum.Proto.SigningInput.decode(first);
    const chainId = bytesToBig(input.chainId).toString();
    // The network named on screen must be the one the signature is valid on.
    if (chainId !== core.CoinTypeExt.chainId(coin)) return other();
    const P = TW.Ethereum.Proto.TransactionMode;
    if ((input.txMode !== P.Legacy && input.txMode !== P.Enveloped) || input.eip7702Authorization || input.userOperation || input.userOperationV0_7) return other();
    const tokens = KNOWN_TOKENS[`evm:${chainId}`] ?? {};
    const token = (contract: string, to: string, amount: bigint): SendSummary => {
      const c = contract.toLowerCase();
      return { kind: 'send', network, asset: { ...tokens[c], contract: c }, amount: amount.toString(), to: to.toLowerCase() };
    };
    const t = input.transaction;
    const to = (input.toAddress ?? '').toLowerCase();
    if (t?.transfer) {
      if (!to || (t.transfer.data && t.transfer.data.length > 0)) return other({ to, value: bytesToBig(t.transfer.amount).toString(), asset: native });
      return { kind: 'send', network, asset: native, amount: bytesToBig(t.transfer.amount).toString(), to };
    }
    if (t?.erc20Transfer) return token(to, t.erc20Transfer.to ?? '', bytesToBig(t.erc20Transfer.amount));
    if (t?.contractGeneric) {
      const value = bytesToBig(t.contractGeneric.amount);
      const call = erc20Transfer(t.contractGeneric.data ?? new Uint8Array());
      if (call && value === 0n && to) return token(to, call.to, call.amount);
      return other({ to, value: value.toString(), asset: native });
    }
    return other({ to });
  }

  if (chain === B.bitcoin!.value || chain === B.bitcoinCash!.value) {
    const input = TW.Bitcoin.Proto.SigningInput.decode(first);
    if (!input.toAddress || (input.extraOutputs?.length ?? 0) > 0 || input.plan) return other();
    const s: SendSummary = { kind: 'send', network, asset: native, amount: input.useMaxAmount ? '' : String(input.amount ?? 0), to: input.toAddress };
    if (input.useMaxAmount) s.all = true;
    if (input.outputOpReturn && input.outputOpReturn.length > 0) s.note = true;
    return s;
  }

  if (chain === B.solana!.value) {
    const input = TW.Solana.Proto.SigningInput.decode(first);
    if (input.rawMessage || (input.privateKey?.length ?? 0) > 0) return other();
    if (input.transferTransaction) {
      const t = input.transferTransaction;
      const s: SendSummary = { kind: 'send', network, asset: native, amount: String(t.value ?? 0), to: t.recipient ?? '' };
      if (t.memo) s.note = true;
      return s;
    }
    const t = input.createAndTransferTokenTransaction ?? input.tokenTransferTransaction;
    if (t) {
      const mint = t.tokenMintAddress ?? '';
      const account = t.recipientTokenAddress ?? '';
      const known = KNOWN_TOKENS.solana![mint];
      // The chain enforces the decimals named in the instruction, so they are safe to show.
      const asset: Asset = known ? { ...known, contract: mint } : { decimals: t.decimals ?? 0, contract: mint };
      if (known && (t.decimals ?? 0) !== known.decimals) return other();
      // Show the owner's address (what the user typed) only when it provably leads to the signed token account.
      const owner = input.createAndTransferTokenTransaction?.recipientMainAddress || hint.to || '';
      let to = account;
      if (owner) {
        const a = core.SolanaAddress.createWithString(owner);
        if (a.defaultTokenAddress(mint) !== account) return other();
        a.delete?.();
        to = owner;
      }
      const s: SendSummary = { kind: 'send', network, asset, amount: String(t.amount ?? 0), to };
      if (t.memo) s.note = true;
      return s;
    }
    return other();
  }

  return other();
}

/** Raw units as a decimal number: ("5500000", 6) → "5.5". No rounding, no grouping. */
export function unitsText(raw: string, decimals: number): string {
  const neg = raw.startsWith('-');
  const digits = (neg ? raw.slice(1) : raw).replace(/^0+(?=\d)/, '');
  if (decimals <= 0) return (neg ? '-' : '') + digits;
  const padded = digits.padStart(decimals + 1, '0');
  const whole = padded.slice(0, padded.length - decimals);
  const frac = padded.slice(padded.length - decimals).replace(/0+$/, '');
  return (neg ? '-' : '') + (frac ? `${whole}.${frac}` : whole);
}

/** The address in groups of four, as the screen shows it. */
export const grouped = (address: string): string => address.replace(/(.{4})(?=.)/g, '$1 ');

/** The English words of the screen (the native code holds the same sentences in every app language). */
export function summaryText(s: SendSummary): { title: string; network: string; to: string; fee: string; warning: string } {
  const amountOf = (a: Asset, raw: string) =>
    a.symbol && a.decimals !== undefined ? `${unitsText(raw, a.decimals)} ${a.symbol}` : `${unitsText(raw, a.decimals ?? 0)} of token ${a.contract ?? ''}`;
  if (s.kind === 'other') {
    return {
      title: 'Not a simple send',
      network: `on ${s.network}`,
      to: s.to ? grouped(s.to) : '',
      fee: s.value && s.value !== '0' && s.asset ? `Sends ${amountOf(s.asset, s.value)} with it` : '',
      warning: "Foxsafe can't read what this transaction does. Go on only if you started it yourself.",
    };
  }
  const fee = [s.feeUsdt ? `${unitsText(s.feeUsdt, 6)} USDT` : '', s.energySun ? `${unitsText(s.energySun, 6)} TRX energy` : ''].filter(Boolean).join(' + ');
  return {
    title: s.all ? `Send all your ${s.asset.symbol ?? ''}`.trim() : `Send ${amountOf(s.asset, s.amount)}`,
    network: `on ${s.network}`,
    to: grouped(s.to),
    fee: fee ? `Network fee: ${fee}` : '',
    warning: s.note ? 'This transaction carries a note.' : '',
  };
}
