// Generates test/vectors/*.json. The iOS and Android builds must reproduce
// these exactly: the same phrase gives the same address on every platform,
// and an envelope sealed anywhere opens everywhere.
//
//   npm run vectors

import { writeFileSync } from 'node:fs';
import { initWasm } from '@trustwallet/wallet-core';
import { buildAddressIndex } from '../src/addressIndex.ts';
import { sealVault } from '../src/vault.ts';
import type { WalletRecord } from '../src/types.ts';
import { makeSigningVector } from './signing-vector.ts';
import { accountPath } from '../src/hd.ts';

export const MNEMONICS = [
  'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
  'legal winner thank year wave sausage worth useful legal winner thank yellow',
];
// Well-known public test keys. Never fund these.
export const PRIVATE_KEYS = [
  { hex: '4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318', coins: ['ethereum', 'tron', 'smartChain', 'bitcoin'] },
  { hex: '8778cc93c6596387e751d2dc693bbd93e434bd233bc5b68a826c56131821cb63', coins: ['solana', 'ton', 'aptos'] },
];

export async function deriveAll() {
  const core = await initWasm();
  const { HDWallet, CoinType, CoinTypeExt, PrivateKey, HexCoding } = core;
  const coins = Object.entries(CoinType as unknown as Record<string, { value: number }>)
    .filter(([, c]) => typeof c?.value === 'number')
    .sort(([, a], [, b]) => a.value - b.value);

  const mnemonic = MNEMONICS.map((words) => {
    const w = HDWallet.createWithMnemonic(words, '');
    const addresses: Record<string, { coin: number; path: string; address: string }> = {};
    const unsupported: string[] = [];
    for (const [name, coin] of coins) {
      try {
        addresses[name] = {
          coin: coin.value,
          path: CoinTypeExt.derivationPath(coin as never),
          address: w.getAddressForCoin(coin as never),
        };
      } catch {
        unsupported.push(name);
      }
    }
    w.delete();
    return { words, addresses, unsupported };
  });

  const privateKey = PRIVATE_KEYS.map(({ hex, coins: names }) => {
    const key = PrivateKey.createWithData(HexCoding.decode(hex));
    const addresses = Object.fromEntries(
      names.map((n) => {
        const coin = (CoinType as unknown as Record<string, { value: number }>)[n]!;
        return [n, { coin: coin.value, address: CoinTypeExt.deriveAddress(coin as never, key) }];
      }),
    );
    key.delete();
    return { hex, addresses };
  });

  return { library: '@trustwallet/wallet-core 4.8.4', coinCount: coins.length, mnemonic, privateKey };
}

const wallets: WalletRecord[] = [
  { id: '7d3f6b1e-1a2b-4c3d-8e9f-0a1b2c3d4e5f', name: 'Wallet 1', kind: 'multi', coins: [0, 60, 195, 501], createdAt: '2026-10-19T00:00:00.000Z', secret: { type: 'mnemonic', words: MNEMONICS[0]! } },
  { id: '0f9e8d7c-6b5a-4f3e-9d2c-1b0a9f8e7d6c', name: 'TRON only', kind: 'single', coins: [195], createdAt: '2026-10-19T00:00:00.000Z', secret: { type: 'privateKey', hex: PRIVATE_KEYS[0]!.hex, coin: 195 } },
];
const salt = Uint8Array.from({ length: 16 }, (_, i) => i);
const iv = Uint8Array.from({ length: 12 }, (_, i) => 0xa0 + i);

/** Accounts 1 and 2 (shown to users as Account 2 and 3) on every chain. */
export async function deriveAccounts() {
  const core = await initWasm();
  const { HDWallet, CoinType, CoinTypeExt, Blockchain } = core;
  const chainName = new Map(
    Object.entries(Blockchain as unknown as Record<string, { value: number }>)
      .filter(([, b]) => typeof b?.value === 'number')
      .map(([n, b]) => [b.value, n]),
  );
  const coins = Object.entries(CoinType as unknown as Record<string, { value: number }>)
    .filter(([, c]) => typeof c?.value === 'number')
    .sort(([, a], [, b]) => a.value - b.value);
  const words = MNEMONICS[0]!;
  const w = HDWallet.createWithMnemonic(words, '');
  const accounts: Record<string, { coin: number; blockchain: string; paths: string[]; addresses: string[] }> = {};
  for (const [name, coin] of coins) {
    const blockchain = chainName.get(CoinTypeExt.blockchain(coin as never).value)!;
    const base = CoinTypeExt.derivationPath(coin as never);
    const paths = [0, 1, 2].map((i) => accountPath(base, blockchain, i));
    const addresses = paths.map((p) => CoinTypeExt.deriveAddress(coin as never, w.getKey(coin as never, p)));
    accounts[name] = { coin: coin.value, blockchain, paths, addresses };
  }
  w.delete();
  return { words, accounts };
}

export async function makeEnvelopes() {
  const passcode = await sealVault('recovery', wallets, { type: 'passcode', passcode: '482915' }, { argon2: { m: 19456, t: 2 }, fixedSalt: salt, fixedIv: iv });
  const prf = Uint8Array.from({ length: 32 }, (_, i) => 0x40 + i);
  const passkey = await sealVault('backup', wallets, { type: 'prf', prf }, { fixedSalt: salt, fixedIv: iv });
  const key = Uint8Array.from({ length: 32 }, (_, i) => 0x80 + i);
  const device = await sealVault('device', [wallets[0]!], { type: 'key', key }, { fixedIv: iv });
  return {
    note: 'Fixed salt and IV are for these vectors only. Real envelopes always use fresh random values.',
    wallets,
    cases: [
      { name: 'recovery-passcode', secret: { passcode: '482915' }, envelope: passcode },
      { name: 'backup-passkey', secret: { prfHex: Buffer.from(prf).toString('hex') }, envelope: passkey },
      { name: 'device-key', secret: { keyHex: Buffer.from(key).toString('hex') }, envelope: device },
    ],
  };
}

export function makeAddressIndex(derived: Awaited<ReturnType<typeof deriveAll>>) {
  const a = derived.mnemonic[0]!.addresses;
  const addresses = ['bitcoin', 'ethereum', 'tron', 'solana'].map((n) => a[n]!.address);
  return { addresses, index: buildAddressIndex(addresses, salt) };
}

if (import.meta.main) {
  const derived = await deriveAll();
  writeFileSync('test/vectors/derivation.json', JSON.stringify(derived, null, 2) + '\n');
  writeFileSync('test/vectors/envelopes.json', JSON.stringify(await makeEnvelopes(), null, 2) + '\n');
  writeFileSync('test/vectors/hd.json', JSON.stringify(await deriveAccounts(), null, 2) + '\n');
  writeFileSync('test/vectors/signing.json', JSON.stringify(await makeSigningVector(), null, 2) + '\n');
  writeFileSync('test/vectors/address-index.json', JSON.stringify(makeAddressIndex(derived), null, 2) + '\n');
  const m = derived.mnemonic[0]!;
  console.log(`${Object.keys(m.addresses).length} of ${derived.coinCount} coins derived; unsupported: ${m.unsupported.join(', ') || 'none'}`);
}
