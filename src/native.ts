// JavaScript face of the native module (ios/, android/). Secrets stay in
// native code: these calls return wallet descriptions and addresses, never a
// phrase or key, except `revealSecret`, which asks for Face ID / the device
// passcode first and exists so the owner can write their phrase down.
//
// Errors are thrown with a code prefix: PASSCODE, INVALID, NOT_FOUND,
// ENVELOPE_AUTH (wrong passcode/password or a changed file), CRYPTO, KEYCHAIN.

import { requireNativeModule } from 'expo-modules-core';
import type { AddressInfo, CoinType, WalletInfo } from './types.ts';

export interface CreateWalletOptions {
  name: string;
  kind: 'multi' | 'single';
  /** Required when kind is 'single'. */
  coin?: CoinType;
  /** 12 (default) or 24 words. */
  wordCount?: 12 | 24;
  /** Chains shown on the home screen (multi only). Addresses for every chain are derived anyway. */
  coins?: CoinType[];
  /** App passcode: checked, and used to lock the on-phone recovery copy. */
  passcode: string;
}

export interface ImportMnemonicOptions {
  name: string;
  words: string;
  passphrase?: string;
  kind: 'multi' | 'single';
  coin?: CoinType;
  coins?: CoinType[];
  passcode: string;
}

export interface ImportPrivateKeyOptions {
  name: string;
  /** Hex, with or without 0x. */
  privateKey: string;
  coin: CoinType;
  passcode: string;
}

export type BackupLock = { type: 'password'; password: string } | { type: 'prf'; prf: string /* base64 */ };

export interface RecoveryScan {
  /** True when an on-phone recovery copy was found. */
  found: boolean;
  walletCount: number;
}

export interface NativeWalletCore {
  /** False in the simulator (no Secure Enclave). */
  isHardwareBacked(): boolean;
  validateMnemonic(words: string): boolean;
  validateAddress(address: string, coin: CoinType): boolean;

  // App passcode (also locks the on-phone recovery copy)
  hasPasscode(): Promise<boolean>;
  setPasscode(passcode: string): Promise<void>;
  verifyPasscode(passcode: string): Promise<boolean>;
  changePasscode(oldPasscode: string, newPasscode: string): Promise<void>;

  // Wallets
  createWallet(options: CreateWalletOptions): Promise<WalletInfo>;
  importMnemonic(options: ImportMnemonicOptions): Promise<WalletInfo>;
  importPrivateKey(options: ImportPrivateKeyOptions): Promise<WalletInfo>;
  listWallets(): Promise<WalletInfo[]>;
  renameWallet(id: string, name: string): Promise<WalletInfo>;
  setCoins(id: string, coins: CoinType[]): Promise<WalletInfo>;
  deleteWallet(id: string, passcode: string): Promise<void>;
  /** `account` is the HD account index (default 0). */
  getAddresses(id: string, coins: CoinType[], account?: number): Promise<AddressInfo[]>;
  /** Adds the next HD account on a phrase wallet (Face ID + passcode). */
  addAccount(id: string, name: string | null, passcode: string): Promise<WalletInfo>;
  removeAccount(id: string, index: number, passcode: string): Promise<WalletInfo>;
  renameAccount(id: string, index: number, name: string): Promise<WalletInfo>;
  markBackedUp(id: string, method: 'manual' | 'cloud'): Promise<WalletInfo>;

  // Signing. `input` is a Trust Wallet Core SigningInput protobuf (base64)
  // built WITHOUT a private key; returns the SigningOutput protobuf (base64).
  signTransaction(id: string, coin: CoinType, input: string, account?: number): Promise<string>;
  signMessage(id: string, coin: CoinType, message: string, account?: number): Promise<string>;
  signTypedData(id: string, coin: CoinType, json: string, account?: number): Promise<string>;
  revealSecret(id: string): Promise<string>;

  // On-phone recovery (survives uninstalling the app)
  scanRecovery(): Promise<RecoveryScan>;
  recoveryHasAddress(address: string): Promise<boolean>;
  /** `currentPasscode` is needed only if a different passcode was set after reinstalling. */
  restoreFromRecovery(passcode: string, currentPasscode?: string | null): Promise<WalletInfo[]>;
  deleteRecovery(): Promise<void>;

  // Backups to the user's own cloud: an envelope JSON string
  exportBackup(ids: string[], lock: BackupLock): Promise<string>;
  importBackup(envelope: string, lock: BackupLock, passcode: string): Promise<WalletInfo[]>;

  /** Logout: removes wallets from the phone. keepRecovery leaves the passcode-locked recovery copy. */
  wipe(keepRecovery: boolean): Promise<void>;

  // Helpers that never read stored secrets (import preview, test vectors)
  previewAddresses(words: string, passphrase: string | null, coins: CoinType[], account?: number): Promise<AddressInfo[]>;
  envelopeDigest(json: string, secret: { passcode?: string; prfHex?: string; keyHex?: string }): Promise<string>;
}

export const WalletCore = requireNativeModule<NativeWalletCore>('FoxsafeWalletCore');
