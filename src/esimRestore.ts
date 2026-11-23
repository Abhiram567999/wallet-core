// eSIM restore proof (docs/SPEC.md §7.16, build 23). After a lost phone, the new phone proves to Foxsafe's server
// that it holds the wallet that paid for the eSIMs by signing this exact text, which the native signEsimRestore
// builds itself (the app passes only the server's one-time code and this phone's eSIM id). This file is the
// reference the tests and the self-test check the native text against; it must stay equal to foxsafe-server
// src/esim/restore.ts → restoreText and to the Swift and Kotlin EsimRestore.

export const ESIM_RESTORE_SITE = 'api.thefoxsafe.com';
/** Lowercase. The dApp message signers refuse any text containing it, in any case (SPEC §7.9). */
export const ESIM_RESTORE_MARKER = 'move my esims to this phone';
const CODE = /^er_[A-Za-z0-9_-]{22}$/;
const PHONE = /^[0-9a-f]{64}$/;

/**
 * The exact text signed for `address` (as the native code derives it), the server's one-time `code` and `phone`
 * (SHA-256 hex of this phone's eSIM key, the server's owner id for it).
 */
export function esimRestoreText(code: string, phone: string, address: string): string {
  return [
    'Foxsafe: move my eSIMs to this phone.',
    '',
    `Address: ${address}`,
    `Phone: ${phone}`,
    `Code: ${code}`,
    `Site: ${ESIM_RESTORE_SITE}`,
    '',
    'Signing this is free and moves no money.',
  ].join('\n');
}

/** "er_" and 22 of A–Z a–z 0–9 _ - (JavaScript's "$" without the m flag matches only at the very end). */
export const isEsimRestoreCode = (s: string) => CODE.test(s);
/** 64 lowercase hex characters. */
export const isEsimRestorePhone = (s: string) => PHONE.test(s);

/** True when a dApp message would be refused as an eSIM restore proof. */
export const isEsimRestoreText = (text: string) => text.toLowerCase().includes(ESIM_RESTORE_MARKER);
