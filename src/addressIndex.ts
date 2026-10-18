// Address index stored next to the recovery copy (docs/SPEC.md §5). Lets the
// app answer "does this phone hold the wallet with this address?" before the
// passcode is typed. An address can never unlock anything.

import { sha256 } from '@noble/hashes/sha2.js';
import { randomBytes } from '@noble/hashes/utils.js';
import { concat, fromBase64, toBase64, toHex, utf8 } from './encoding.ts';

export interface AddressIndex {
  v: 1;
  salt: string;
  hashes: string[];
}

export function normaliseAddress(address: string): string {
  const a = address.trim();
  if (/^0x/i.test(a)) return a.toLowerCase();
  if (a === a.toLowerCase() || a === a.toUpperCase()) return a.toLowerCase();
  return a;
}

function hashAddress(salt: Uint8Array, address: string): string {
  return toHex(sha256(concat(salt, utf8(normaliseAddress(address)))));
}

export function buildAddressIndex(addresses: string[], fixedSalt?: Uint8Array): AddressIndex {
  const salt = fixedSalt ?? randomBytes(16);
  const hashes = [...new Set(addresses.map((a) => hashAddress(salt, a)))].sort();
  return { v: 1, salt: toBase64(salt), hashes };
}

export function indexContains(index: AddressIndex, address: string): boolean {
  if (index.v !== 1 || address.trim() === '') return false;
  return index.hashes.includes(hashAddress(fromBase64(index.salt), address));
}
