// JavaScript face of the native module (ios/, android/). Secrets stay in
// native code: these calls return wallet descriptions and addresses, never a
// phrase or key, except `revealSecret`, which asks for biometrics first and
// exists so the owner can write their phrase down.

import { requireNativeModule } from 'expo-modules-core';
import type { AddressInfo, CoinType, WalletInfo } from './types.ts';

export interface CreateWalletOptions {
  name: string;
  kind: 'multi' | 'single';
  /** Required when kind is 'single'. */
  coin?: CoinType;
  /** 12 (default) or 24 words. */
  wordCount?: 12 | 24;
}

export interface ImportMnemonicOptions {
  name: string;
  words: string;
  passphrase?: string;
  kind: 'multi' | 'single';
  coin?: CoinType;
}

export interface ImportPrivateKeyOptions {
  name: string;
  /** Hex, with or without 0x. */
  privateKey: string;
  coin: CoinType;
}

export interface RecoveryScan {
  /** True when an on-phone recovery copy was found. */
  found: boolean;
  /** Number of wallets inside, if known without the passcode. */
  walletCount?: number;
}

interface NativeWalletCore {
  // Wallets
  createWallet(options: CreateWalletOptions): Promise<WalletInfo>;
  importMnemonic(options: ImportMnemonicOptions): Promise<WalletInfo>;
  importPrivateKey(options: ImportPrivateKeyOptions): Promise<WalletInfo>;
  validateMnemonic(words: string): boolean;
  listWallets(): Promise<WalletInfo[]>;
  renameWallet(id: string, name: string): Promise<WalletInfo>;
  setCoins(id: string, coins: CoinType[]): Promise<WalletInfo>;
  deleteWallet(id: string): Promise<void>;
  getAddresses(id: string, coins: CoinType[]): Promise<AddressInfo[]>;
  validateAddress(address: string, coin: CoinType): boolean;

  // Signing. `input` is a Trust Wallet Core SigningInput protobuf, base64.
  // The user is asked for biometrics or the passcode before the key is used.
  signTransaction(id: string, coin: CoinType, input: string): Promise<string>;
  signMessage(id: string, coin: CoinType, message: string): Promise<string>;
  signTypedData(id: string, coin: CoinType, json: string): Promise<string>;

  // Showing the phrase to its owner (screenshots blocked while shown)
  revealSecret(id: string): Promise<string>;
  markBackedUp(id: string, method: 'manual' | 'cloud'): Promise<WalletInfo>;

  // App passcode, which also locks the on-phone recovery copy
  hasPasscode(): Promise<boolean>;
  setPasscode(passcode: string): Promise<void>;
  changePasscode(oldPasscode: string, newPasscode: string): Promise<void>;
  verifyPasscode(passcode: string): Promise<boolean>;

  // On-phone recovery (survives uninstalling the app)
  scanRecovery(): Promise<RecoveryScan>;
  recoveryHasAddress(address: string): Promise<boolean>;
  restoreFromRecovery(passcode: string): Promise<WalletInfo[]>;
  deleteRecovery(): Promise<void>;

  // Backups to the user's own cloud. Returns / takes an envelope JSON string.
  exportBackup(ids: string[], lock: { type: 'password'; password: string } | { type: 'prf'; prf: string }): Promise<string>;
  importBackup(envelope: string, lock: { type: 'password'; password: string } | { type: 'prf'; prf: string }): Promise<WalletInfo[]>;

  // Logout: removes wallets from the phone. keepRecovery leaves the recovery copy.
  wipe(options: { keepRecovery: boolean }): Promise<void>;
}

export const WalletCore = requireNativeModule<NativeWalletCore>('FoxsafeWalletCore');
