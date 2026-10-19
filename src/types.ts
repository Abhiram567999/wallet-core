/** Trust Wallet Core `CoinType` value (SLIP-44 based), e.g. 0 Bitcoin, 60 Ethereum, 195 TRON, 501 Solana. */
export type CoinType = number;

/** single: starts on one chain (more can be switched on); multi: all chains, one account; hd: all chains, many accounts. */
export type WalletKind = 'single' | 'multi' | 'hd';

export type WalletSecret =
  | { type: 'mnemonic'; words: string; passphrase?: string }
  | { type: 'privateKey'; hex: string; coin: CoinType };

import type { SolanaPath } from './hd.ts';
export type { SolanaPath };

/** HD account on a phrase wallet (docs/SPEC.md §2.1). Index 0 is the default path. */
export interface Account {
  index: number;
  name: string;
}

/** Public description of a wallet. Never contains the secret. */
export interface WalletInfo {
  id: string;
  name: string;
  kind: WalletKind;
  secretType: WalletSecret['type'];
  coins: CoinType[];
  createdAt: string;
  backup: { manual: boolean; cloud: boolean };
  /** Phrase wallets: one or more HD accounts. Private-key wallets: just account 0. */
  accounts: Account[];
  /** Phrase wallets: how Solana addresses are derived (docs/SPEC.md §2.2). */
  solanaPath?: SolanaPath;
}

/** A wallet with its secret, as stored inside an encrypted envelope. */
export interface WalletRecord {
  id: string;
  name: string;
  kind: WalletKind;
  coins: CoinType[];
  createdAt: string;
  secret: WalletSecret;
  /** Phrase wallets only; missing means [{ index: 0, name: 'Account 1' }]. */
  accounts?: Account[];
  /** Phrase wallets only; missing means 'trust'. */
  solanaPath?: SolanaPath;
}

export interface VaultPayload {
  v: 1;
  wallets: WalletRecord[];
}

export interface AddressInfo {
  coin: CoinType;
  address: string;
  derivationPath?: string;
}
