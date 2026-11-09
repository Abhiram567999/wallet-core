// JavaScript face of the native module (ios/, android/). Secrets stay in
// native code: these calls return wallet descriptions and addresses, never a
// phrase or key, except `revealSecret`, which asks for Face ID / the device
// passcode first and exists so the owner can write their phrase down.
//
// Errors are thrown with a code prefix: PASSCODE, INVALID, NOT_FOUND,
// ENVELOPE_AUTH (wrong passcode/password or a changed file), CRYPTO, KEYCHAIN.

import { requireOptionalNativeModule } from 'expo-modules-core';
import type { AddressInfo, CoinType, SolanaPath, WalletInfo } from './types.ts';

export interface CreateWalletOptions {
  name: string;
  kind: 'single' | 'multi' | 'hd';
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
  kind: 'single' | 'multi' | 'hd';
  coin?: CoinType;
  coins?: CoinType[];
  /** How Solana addresses are derived (docs/SPEC.md §2.2). Default 'phantom'. */
  solanaPath?: SolanaPath;
  /** hd only: bring back accounts 0 … n-1 at once (default 1, at most 500). */
  accounts?: number;
  passcode: string;
}

export interface ImportPrivateKeyOptions {
  name: string;
  /** Hex, with or without 0x. Solana also: base58 (Phantom / Solflare export) or the CLI's JSON array. */
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
  /** Chains shown. HD accounts derive addresses for a newly switched-on chain then, which asks for Face ID. */
  setCoins(id: string, coins: CoinType[]): Promise<WalletInfo>;
  /** Changes how Solana addresses are derived; the Solana address of every account changes. */
  setSolanaPath(id: string, solanaPath: SolanaPath, passcode: string): Promise<WalletInfo>;
  deleteWallet(id: string, passcode: string): Promise<void>;
  /** Removes a wallet after Face ID / fingerprint (the wallet's own key is opened to prove it's the owner). */
  deleteWalletWithBiometrics?(id: string, reason: string): Promise<void>;
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
  /**
   * A transaction plus at most one Foxsafe network-fee transfer (TRON USDT, ≤ 5 USDT, to the
   * fee wallet built into the native code) with ONE Face ID. Anything else is refused natively.
   * Builds from 2026-10-23 on; use `signTransactions` below.
   */
  signTransactions?(id: string, coin: CoinType, inputs: string[], account?: number): Promise<string[]>;
  /**
   * Gasless EVM send with ONE Face ID: signs the EntryPoint 0.8 operation (EIP-712 JSON) and, when
   * `request.upgradeNonce` ≥ 0, the EIP-7702 upgrade to the built-in Simple7702Account. Native code
   * refuses unless the operation is exactly [transfer(to, amount), transfer(Foxsafe, fee ≤ 5)] of an
   * allowed stablecoin from this wallet, paid by a paymaster. Returns JSON {signature, authorization?}.
   * Builds from 2026-10-24 on.
   */
  signGaslessEvm?(id: string, coin: CoinType, typedData: string, request: string, account?: number): Promise<string>;
  /** Safe owner signature for one EIP-712 SafeTx, with Foxsafe's compiled-in Safe rule (SPEC §7.7). */
  signSafe?(id: string, coin: CoinType, typedData: string, request: string, account?: number): Promise<string>;
  /** TRON multisig: one Foxsafe-made permission setup or multisig send, with its compiled-in rule (SPEC §7.8). */
  signTronMultisig?(id: string, rawDataHex: string, request: string, account?: number): Promise<string>;
  /**
   * Gasless Solana send with ONE Face ID: native code rebuilds the message from `request` and signs
   * only if it matches `message` (base64) byte for byte. Returns the base58 signature.
   * Builds from 2026-10-24 on.
   */
  signGaslessSolana?(id: string, message: string, request: string, account?: number): Promise<string>;
  /**
   * Cosmos-family send or THORChain deposit (Protobuf mode, built by cosmosSendInput /
   * thorchainDepositInput without any key). Native code checks every message is from this
   * wallet, adds its public key and signs. Returns the Cosmos SigningOutput (base64).
   * Builds from 2026-11 (build 11) on.
   */
  signCosmos?(id: string, coin: CoinType, input: string, account?: number): Promise<string>;
  /**
   * XRP, Stellar, Polkadot, NEAR, TON, Aptos, Sui, Cardano: one plain transfer, checked
   * and completed (public key, sender, Cardano change) natively. Build 12 on.
   */
  signNetwork?(id: string, coin: CoinType, input: string, account?: number): Promise<string>;
  /** Switched off in native code since 9 Nov 2026 (always refuses); use a dedicated signing function. */
  signMessage(id: string, coin: CoinType, message: string, account?: number): Promise<string>;
  /** Switched off in native code since 9 Nov 2026 (always refuses); use a dedicated signing function. */
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

  // Backup password (builds from 2026-10-25 on). The password's key is kept on the phone locked
  // with the app passcode, so the backup can be rebuilt whenever wallets change.
  hasBackupPassword?(): Promise<boolean>;
  /** Sets or replaces it (at least 8 characters). Files made with an earlier password keep that password. */
  setBackupPassword?(password: string, passcode: string): Promise<void>;
  /** Envelope JSON with every wallet on the phone, locked with the backup password. Only the passcode is asked. */
  buildBackup?(passcode: string): Promise<string>;
  /** Android only: writes the file to Downloads/Foxsafe (kept after uninstalling); returns where. */
  saveBackupFile?(name: string, content: string): Promise<string>;

  // iCloud backup (iOS builds from 2026-10-27 on)
  /** Signed in to iCloud with iCloud Drive on. */
  cloudAvailable?(): boolean;
  /** Saves `content` as Backups/<name> in the app's hidden iCloud Drive folder; returns the save time (ms). */
  cloudWrite?(container: string, name: string, content: string): Promise<number>;
  /** Finds and downloads Backups/<name> (also on a new iPhone). */
  cloudRead?(container: string, name: string, timeoutSeconds: number): Promise<{ found: boolean; content?: string; modified?: number }>;

  // Opening the app with Face ID / Touch ID / fingerprint (its own key; never used for wallet keys).
  // Turned off by the phone when a face or finger is added, so the passcode is needed again.
  unlockStatus?(): BiometricUnlockStatus;
  /** Checks the passcode, creates the key and asks for Face ID once. Anything but 'ok' leaves it off. */
  enableUnlock?(passcode: string, reason: string): Promise<BiometricUnlockResult>;
  unlockWithBiometrics?(reason: string): Promise<BiometricUnlockResult>;
  disableUnlock?(): Promise<void>;

  /** Logout: removes wallets from the phone. keepRecovery leaves the passcode-locked recovery copy. */
  wipe(keepRecovery: boolean): Promise<void>;

  // Helpers that never read stored secrets (import preview, test vectors)
  /** solanaPath defaults to 'phantom'; pass 'trust' for Trust Wallet Core's default Solana path. */
  previewAddresses(words: string, passphrase: string | null, coins: CoinType[], account?: number, solanaPath?: SolanaPath): Promise<AddressInfo[]>;
  /** Addresses of `count` (1-100) accounts from `from`, to find used accounts before an import. */
  previewAccounts(words: string, passphrase: string | null, coins: CoinType[], from: number, count: number, solanaPath: SolanaPath): Promise<{ account: number; addresses: AddressInfo[] }[]>;
  envelopeDigest(json: string, secret: { passcode?: string; prfHex?: string; keyHex?: string }): Promise<string>;
}

const native = requireOptionalNativeModule<NativeWalletCore>('FoxsafeWalletCore');

/**
 * False when the app runs without its native code, e.g. in Expo Go for a
 * design preview. Wallet features then fail with an UNAVAILABLE error instead
 * of crashing the app at start-up.
 */
export const isWalletCoreAvailable = native != null;

export const WalletCore: NativeWalletCore =
  native ??
  new Proxy({} as NativeWalletCore, {
    get: (_, name) => () => {
      throw new Error(`UNAVAILABLE: wallet core not in this build (${String(name)}); use the Foxsafe development build`);
    },
  });

/**
 * Signs a payment and its fee transfer with one Face ID. Builds without the
 * batch function ask once per transaction.
 */
export async function signTransactions(id: string, coin: CoinType, inputs: string[], account?: number): Promise<string[]> {
  if (typeof native?.signTransactions === 'function') return native.signTransactions(id, coin, inputs, account);
  const out: string[] = [];
  for (const input of inputs) out.push(await WalletCore.signTransaction(id, coin, input, account));
  return out;
}

export interface GaslessEvmRequest {
  token: string;
  to: string;
  amount: string; // base units
  fee: string; // base units
  /** The wallet's account nonce for its first-time upgrade, or -1 when already upgraded. */
  upgradeNonce: number;
}

export interface GaslessEvmSignature {
  signature: string;
  authorization?: { r: string; s: string; yParity: number | string };
}

/** True when this build can sign gasless EVM sends (native fee rule included). */
export const canSignGaslessEvm = () => typeof native?.signGaslessEvm === 'function';

export async function signGaslessEvm(id: string, coin: CoinType, typedData: string, request: GaslessEvmRequest, account?: number): Promise<GaslessEvmSignature> {
  if (!native?.signGaslessEvm) throw new Error('UNAVAILABLE: this app build cannot sign fee-free EVM transfers yet');
  return JSON.parse(await native.signGaslessEvm(id, coin, typedData, JSON.stringify(request), account)) as GaslessEvmSignature;
}

export interface SafeSignRequest {
  /** The Safe's address (the EIP-712 verifyingContract). */
  safe: string;
  chainId: number;
}

export interface SafeSignature {
  /** 65 bytes, v = 27/28, as Safe expects for an owner's ECDSA signature. */
  signature: string;
  /** The owner address that signed. */
  signer: string;
}

/** True when this build can sign Safe transactions (native Safe rule included). */
export const canSignSafe = () => typeof native?.signSafe === 'function';

export async function signSafe(id: string, coin: CoinType, typedData: string, request: SafeSignRequest, account?: number): Promise<SafeSignature> {
  if (!native?.signSafe) throw new Error('UNAVAILABLE: this app build cannot sign shared wallet transactions yet');
  return JSON.parse(await native.signSafe(id, coin, typedData, JSON.stringify(request), account)) as SafeSignature;
}

export type TronMultisigRequest =
  | { kind: 'send'; account: string; permissionId: number }
  | { kind: 'setup'; account: string; permissionId: 0; owners: string[]; threshold: number };

export interface TronMultisigSignature {
  /** 65 bytes hex (r, s, recovery id), as TRON transactions carry it. */
  signature: string;
  signer: string;
  txID: string;
}

/** True when this build can sign TRON multisig (native rule included). */
export const canSignTronMultisig = () => typeof native?.signTronMultisig === 'function';

export async function signTronMultisig(id: string, rawDataHex: string, request: TronMultisigRequest, account?: number): Promise<TronMultisigSignature> {
  if (!native?.signTronMultisig) throw new Error('UNAVAILABLE: this app build cannot sign shared TRON accounts yet');
  return JSON.parse(await native.signTronMultisig(id, rawDataHex, JSON.stringify(request), account)) as TronMultisigSignature;
}

export interface GaslessSolanaRequest {
  to: string;
  mint: string;
  amount: string;
  fee: string;
  feePayer: string;
  blockhash: string;
  toIsTokenAccount: boolean;
  createRecipient: boolean;
  createFeeAccount: boolean;
  computeUnitLimit: string;
  computeUnitPrice: string;
}

export const canSignGaslessSolana = () => typeof native?.signGaslessSolana === 'function';

export async function signGaslessSolana(id: string, messageBase64: string, request: GaslessSolanaRequest, account?: number): Promise<string> {
  if (!native?.signGaslessSolana) throw new Error('UNAVAILABLE: this app build cannot sign fee-free Solana transfers yet');
  return native.signGaslessSolana(id, messageBase64, JSON.stringify(request), account);
}

/** True when this build can sign on Cosmos-family networks (THORChain, Cosmos Hub, Osmosis …). */
export const canSignCosmos = () => typeof native?.signCosmos === 'function';

export async function signCosmos(id: string, coin: CoinType, input: string, account?: number): Promise<string> {
  if (!native?.signCosmos) throw new Error('UNAVAILABLE: this app build cannot sign on this network yet');
  return native.signCosmos(id, coin, input, account);
}

/** True when this build signs XRP, Stellar, Polkadot, NEAR, TON, Aptos, Sui and Cardano natively (build 12). */
export const canSignNetwork = () => typeof native?.signNetwork === 'function';

export async function signNetwork(id: string, coin: CoinType, input: string, account?: number): Promise<string> {
  if (!native?.signNetwork) throw new Error('UNAVAILABLE: this app build cannot sign on this network yet');
  return native.signNetwork(id, coin, input, account);
}

/** True when this build has the backup password (backup file, later cloud backup). */
export const canBackupWithPassword = () => typeof native?.buildBackup === 'function';
/** True on Android builds that can keep the backup file in Downloads/Foxsafe. */
export const canSaveBackupFile = () => typeof native?.saveBackupFile === 'function';

/** True on iOS builds that can keep the backup in iCloud Drive. */
export const canUseICloud = () => typeof native?.cloudWrite === 'function';
export const canUseBiometricUnlock = () => typeof native?.unlockWithBiometrics === 'function';

export interface BiometricUnlockStatus {
  /** What the phone has: faceID, touchID (iPhone), fingerprint (Android) or none. */
  kind: 'faceID' | 'touchID' | 'fingerprint' | 'none';
  /** Set up on the phone and allowed for Foxsafe. */
  ready: boolean;
  /** Turned on in Foxsafe. */
  enabled: boolean;
}
/** ok, cancel (chose the passcode), lockout (too many tries), failed, changed (faces/fingers changed: now off), off, unavailable. */
export type BiometricUnlockResult = 'ok' | 'cancel' | 'lockout' | 'failed' | 'changed' | 'off' | 'unavailable';
