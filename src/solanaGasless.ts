// Gasless Solana message builder: the same bytes as server/src/gasless/solana/message.ts and the
// native rebuild (iOS/Android signGaslessSolana). Used by the self-test to make inputs.

import { associatedTokenAddress, base58Decode, TOKEN_PROGRAM } from './solana.ts';

const ATA_PROGRAM = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
const SYSTEM_PROGRAM = '11111111111111111111111111111111';
const COMPUTE_BUDGET_PROGRAM = 'ComputeBudget111111111111111111111111111111';

export interface GaslessSolanaParams {
  feePayer: string;
  user: string;
  mint: string;
  decimals: number;
  destination: string;
  recipientOwner: string | null;
  feeWallet: string;
  createFeeAccount: boolean;
  amount: bigint;
  fee: bigint;
  blockhash: string;
  computeUnitLimit: number;
  computeUnitPrice: bigint;
}

const concat = (parts: Uint8Array[]) => {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
};
function compactU16(n: number): Uint8Array {
  const out: number[] = [];
  let v = n;
  for (;;) {
    const b = v & 0x7f;
    v >>= 7;
    if (v === 0) {
      out.push(b);
      return Uint8Array.from(out);
    }
    out.push(b | 0x80);
  }
}
const u32le = (n: number) => Uint8Array.of(n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff);
const u64le = (n: bigint) => {
  const b = new Uint8Array(8);
  let v = n;
  for (let i = 0; i < 8; i++) {
    b[i] = Number(v & 0xffn);
    v >>= 8n;
  }
  return b;
};

export function gaslessSolanaMessage(p: GaslessSolanaParams): Uint8Array {
  const userAta = associatedTokenAddress(p.user, p.mint);
  const feeAta = associatedTokenAddress(p.feeWallet, p.mint);
  const readonly = [p.mint, TOKEN_PROGRAM, COMPUTE_BUDGET_PROGRAM];
  if (p.recipientOwner !== null || p.createFeeAccount) readonly.push(ATA_PROGRAM, SYSTEM_PROGRAM);
  if (p.recipientOwner) readonly.push(p.recipientOwner);
  if (p.createFeeAccount) readonly.push(p.feeWallet);
  const keys = [p.feePayer, p.user, userAta, p.destination, feeAta, ...readonly];
  const idx = (k: string) => keys.indexOf(k);
  const ix = (program: string, accounts: string[], data: Uint8Array) =>
    concat([Uint8Array.of(idx(program)), compactU16(accounts.length), Uint8Array.from(accounts.map(idx)), compactU16(data.length), data]);
  const transferChecked = (dest: string, amount: bigint) => ix(TOKEN_PROGRAM, [userAta, p.mint, dest, p.user], concat([Uint8Array.of(12), u64le(amount), Uint8Array.of(p.decimals)]));
  const createAta = (ata: string, owner: string) => ix(ATA_PROGRAM, [p.feePayer, ata, owner, p.mint, SYSTEM_PROGRAM, TOKEN_PROGRAM], Uint8Array.of(1));
  const instructions = [
    ix(COMPUTE_BUDGET_PROGRAM, [], concat([Uint8Array.of(2), u32le(p.computeUnitLimit)])),
    ix(COMPUTE_BUDGET_PROGRAM, [], concat([Uint8Array.of(3), u64le(p.computeUnitPrice)])),
    ...(p.recipientOwner ? [createAta(p.destination, p.recipientOwner)] : []),
    ...(p.createFeeAccount ? [createAta(feeAta, p.feeWallet)] : []),
    transferChecked(p.destination, p.amount),
    transferChecked(feeAta, p.fee),
  ];
  return concat([Uint8Array.of(2, 1, readonly.length), compactU16(keys.length), ...keys.map(base58Decode), base58Decode(p.blockhash), compactU16(instructions.length), ...instructions]);
}
