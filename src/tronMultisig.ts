// TRON multisig (account permissions): builds the raw transaction (protobuf `Transaction.raw`) that
// every owner signs with the native `signTronMultisig` (SPEC §7.8). Trust Wallet Core's TRON signer
// has no Permission_id and no AccountPermissionUpdate, so Foxsafe writes these few messages itself.
// Field numbers: tronprotocol/protocol core/Tron.proto and core/contract/*.proto.

import { sha256 } from '@noble/hashes/sha2.js';
import { base58Decode } from './solana.ts';

/** Contract types (core/Tron.proto ContractType). */
export const TRON_TRANSFER = 1;
export const TRON_TRIGGER = 31;
export const TRON_PERMISSION_UPDATE = 46;

/** The only things a Foxsafe multisig's active permission may do: send TRX (1) and call token contracts (31). */
export const ACTIVE_OPERATIONS = (() => {
  const b = new Uint8Array(32);
  for (const t of [TRON_TRANSFER, TRON_TRIGGER]) b[t >> 3]! |= 1 << (t & 7);
  return b;
})();

/** Tokens a multisig may send: TRON USDT and USDC (the same list the native rule allows). */
export const TRON_MULTISIG_TOKENS = ['TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8'];

// MARK: protobuf (only what these messages need)

const enc = new TextEncoder();
function varint(n: bigint): number[] {
  const out: number[] = [];
  let v = BigInt.asUintN(64, n);
  do {
    let b = Number(v & 0x7fn);
    v >>= 7n;
    if (v) b |= 0x80;
    out.push(b);
  } while (v);
  return out;
}
const vfield = (f: number, n: bigint | number): number[] => (BigInt(n) === 0n ? [] : [...varint(BigInt((f << 3) | 0)), ...varint(BigInt(n))]);
const bfield = (f: number, b: Uint8Array | number[]): number[] => (b.length === 0 ? [] : [...varint(BigInt((f << 3) | 2)), ...varint(BigInt(b.length)), ...b]);

export const toHex = (b: Uint8Array | number[]) => Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
export const fromHex = (h: string) => Uint8Array.from((h.replace(/^0x/, '').match(/../g) ?? []).map((x) => parseInt(x, 16)));

/** Base58 TRON address → 21 bytes (0x41 + 20), checksum checked. */
export function tronAddressBytes(a: string): Uint8Array {
  const b = base58Decode(a);
  if (b.length !== 25 || b[0] !== 0x41) throw new Error('not a TRON address');
  const body = b.slice(0, 21);
  const check = sha256(sha256(body)).slice(0, 4);
  if (!check.every((x, i) => x === b[21 + i])) throw new Error('TRON address checksum');
  return body;
}

function permission(p: { type: 0 | 2; id: number; name: string; threshold: number; owners: string[]; operations?: Uint8Array }): number[] {
  const keys = p.owners.flatMap((o) => bfield(7, [...bfield(1, tronAddressBytes(o)), ...vfield(2, 1)]));
  return [...vfield(1, p.type), ...vfield(2, p.id), ...bfield(3, enc.encode(p.name)), ...vfield(4, p.threshold), ...(p.operations ? bfield(6, p.operations) : []), ...keys];
}

export type TronMultisigAction =
  | { type: 'transfer'; owner: string; to: string; amount: bigint }
  | { type: 'token'; owner: string; token: string; to: string; amount: bigint }
  | { type: 'setup'; owner: string; owners: string[]; threshold: number };

/** The contract's protobuf: type, Any{type_url, value}, Permission_id. */
function contract(a: TronMultisigAction, permissionId: number): number[] {
  let type: number;
  let url: string;
  let value: number[];
  const owner = tronAddressBytes(a.owner);
  if (a.type === 'transfer') {
    type = TRON_TRANSFER;
    url = 'type.googleapis.com/protocol.TransferContract';
    value = [...bfield(1, owner), ...bfield(2, tronAddressBytes(a.to)), ...vfield(3, a.amount)];
  } else if (a.type === 'token') {
    type = TRON_TRIGGER;
    url = 'type.googleapis.com/protocol.TriggerSmartContract';
    const to = tronAddressBytes(a.to).slice(1);
    const data = [0xa9, 0x05, 0x9c, 0xbb, ...new Array(12).fill(0), ...to, ...fromHex(a.amount.toString(16).padStart(64, '0'))];
    value = [...bfield(1, owner), ...bfield(2, tronAddressBytes(a.token)), ...bfield(4, data)];
  } else {
    type = TRON_PERMISSION_UPDATE;
    url = 'type.googleapis.com/protocol.AccountPermissionUpdateContract';
    const same = { name: 'owner', threshold: a.threshold, owners: a.owners };
    value = [...bfield(1, owner), ...bfield(2, permission({ type: 0, id: 0, ...same })), ...bfield(4, permission({ type: 2, id: 2, ...same, name: 'active', operations: ACTIVE_OPERATIONS }))];
  }
  const any = [...bfield(1, enc.encode(url)), ...bfield(2, value)];
  return [...vfield(1, type), ...bfield(2, any), ...vfield(5, permissionId)];
}

export interface TronBlockRef {
  /** Bytes 6–8 of the block number (2 bytes) and 8 bytes of the block hash, as hex (TRON's ref_block). */
  refBlockBytes: string;
  refBlockHash: string;
  /** Milliseconds. TRON accepts an expiration up to 24 h after the reference block. */
  timestamp: number;
  expiration: number;
}

/** Transaction.raw for one multisig action, as hex. Every owner signs sha256 of these bytes. */
export function tronMultisigRaw(a: TronMultisigAction, permissionId: number, ref: TronBlockRef, feeLimitSun = 0): string {
  const raw = [
    ...bfield(1, fromHex(ref.refBlockBytes)),
    ...bfield(4, fromHex(ref.refBlockHash)),
    ...vfield(8, ref.expiration),
    ...bfield(11, contract(a, permissionId)),
    ...vfield(14, ref.timestamp),
    ...vfield(18, feeLimitSun),
  ];
  return toHex(raw);
}

export const tronTxId = (rawHex: string) => toHex(sha256(fromHex(rawHex)));
