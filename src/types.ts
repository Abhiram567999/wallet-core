/** Trust Wallet Core `CoinType` value (SLIP-44 based), e.g. 0 Bitcoin, 60 Ethereum, 195 TRON, 501 Solana. */
export type CoinType = number;

export type WalletKind = 'multi' | 'single';

export type WalletSecret =
  | { type: 'mnemonic'; words: string; passphrase?: string }
  | { type: 'privateKey'; hex: string; coin: CoinType };

/** Public description of a wallet. Never contains the secret. */
export interface WalletInfo {
  id: string;
  name: string;
  kind: WalletKind;
  secretType: WalletSecret['type'];
  coins: CoinType[];
  createdAt: string;
  backup: { manual: boolean; cloud: boolean };
}

/** A wallet with its secret, as stored inside an encrypted envelope. */
export interface WalletRecord {
  id: string;
  name: string;
  kind: WalletKind;
  coins: CoinType[];
  createdAt: string;
  secret: WalletSecret;
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
