// Writes test/vectors/esim-restore.json: the eSIM restore proof (SPEC §7.15) for the test phrase, account 0, with a
// fixed, made-up one-time code and phone id. Keys come from Trust Wallet Core's HD wallet (the addresses are pinned
// by derivation.json and hd.json); the text comes from src/esimRestore.ts; the signatures are made with noble,
// independently of the Trust Wallet Core signers the native signEsimRestore uses. Also the dApp messages the native
// dApp signers must refuse (the restore text as a site would send it).
//
//   node scripts/make-esim-restore-vector.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { initWasm } from '@trustwallet/wallet-core';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { ed25519 } from '@noble/curves/ed25519.js';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { esimRestoreText, isEsimRestoreCode, isEsimRestorePhone, isEsimRestoreText, ESIM_RESTORE_SITE } from '../src/esimRestore.ts';
import { base58Encode } from '../src/solana.ts';
import { concat, toHex, utf8 } from '../src/encoding.ts';
import { SOLANA_PATHS } from '../src/hd.ts';

const load = (f: string) => JSON.parse(readFileSync(new URL(`../test/vectors/${f}`, import.meta.url), 'utf8'));
const derivation = load('derivation.json');
const hd = load('hd.json');
const words: string = derivation.mnemonic[0].words;
/** Made up for the test vector; real codes come from the server, real phone ids are SHA-256 of the phone's eSIM key. */
const CODE = 'er_Foxsafe-test_restore01';
const PHONE = '0f'.repeat(16) + 'a1'.repeat(16);
if (!isEsimRestoreCode(CODE)) throw new Error('bad test code');
if (!isEsimRestorePhone(PHONE)) throw new Error('bad test phone');

const core = await initWasm();
const { HDWallet, CoinType, AnyAddress } = core;
const wallet = HDWallet.createWithMnemonic(words, '');

const hex0x = (b: Uint8Array) => `0x${toHex(b)}`;
/** EIP-191 personal_sign or TRON signMessageV2: keccak256(prefix + byte length + text), signature r ‖ s ‖ v (27/28). */
const signPrefixed = (prefix: string, text: string, key: Uint8Array) => {
  const bytes = utf8(text);
  const hash = keccak_256(concat(utf8(`${prefix}${bytes.length}`), bytes));
  const rs = secp256k1.sign(hash, key, { prehash: false, format: 'recovered' });
  return `${hex0x(rs.slice(1))}${(rs[0]! + 27).toString(16)}`;
};

const evmKey = wallet.getKeyForCoin(CoinType.ethereum);
const evmAddress = AnyAddress.createWithPublicKey(evmKey.getPublicKeySecp256k1(false), CoinType.ethereum).description();
if (evmAddress !== derivation.mnemonic[0].addresses.ethereum.address) throw new Error('EVM address differs from derivation.json');
const evmText = esimRestoreText(CODE, PHONE, evmAddress);

const tronKey = wallet.getKeyForCoin(CoinType.tron);
const tronAddress = AnyAddress.createWithPublicKey(tronKey.getPublicKeySecp256k1(false), CoinType.tron).description();
if (tronAddress !== derivation.mnemonic[0].addresses.tron.address) throw new Error('TRON address differs from derivation.json');
const tronText = esimRestoreText(CODE, PHONE, tronAddress);

const solana = (solanaPath: 'trust' | 'phantom', want: string) => {
  const key = wallet.getKey(CoinType.solana, SOLANA_PATHS[solanaPath]).data();
  const address = base58Encode(ed25519.getPublicKey(key));
  if (address !== want) throw new Error(`Solana ${solanaPath} address differs from the vectors`);
  const text = esimRestoreText(CODE, PHONE, address);
  return { coin: 501, solanaPath, path: SOLANA_PATHS[solanaPath], address, text, signature: base58Encode(ed25519.sign(utf8(text), key)) };
};

const refused = [
  { what: 'the EVM restore text, as a site would send it', coin: 60, text: evmText },
  { what: 'the TRON restore text, as a site would send it', coin: 195, text: tronText },
  { what: 'the Solana restore text, as a site would send it', coin: 501, text: esimRestoreText(CODE, PHONE, derivation.mnemonic[0].addresses.solana.address) },
  { what: 'the restore text in capitals', coin: 60, text: evmText.toUpperCase() },
  { what: 'the restore text in mixed case', coin: 60, text: evmText.replace('move my eSIMs to this phone', 'Move My Esims To This Phone') },
  { what: 'the restore text inside a longer message', coin: 60, text: `Welcome to Example!\n\n${evmText}\n\nNonce: 8122` },
  { what: 'the phrase mid-sentence', coin: 195, text: `Please MOVE my eSIMs to this PHONE to continue. Nonce: 99` },
  { what: 'the phrase mid-sentence (Solana)', coin: 501, text: `Sign to move my esims to this phone.` },
].map(({ what, coin, text }) => {
  if (!isEsimRestoreText(text)) throw new Error(`${what}: no marker`);
  return { what, coin, hex: hex0x(utf8(text)) };
});

const out = {
  note: 'Test phrase and a made-up code and phone id only; never fund it. Made by scripts/make-esim-restore-vector.ts (keys: Trust Wallet Core HD wallet; signatures: noble).',
  code: CODE,
  phone: PHONE,
  site: ESIM_RESTORE_SITE,
  account: 0,
  evm: { coin: 60, address: evmAddress, text: evmText, signature: signPrefixed('\x19Ethereum Signed Message:\n', evmText, evmKey.data()) },
  tron: { coin: 195, address: tronAddress, text: tronText, signature: signPrefixed('\x19TRON Signed Message:\n', tronText, tronKey.data()) },
  solana: solana('trust', derivation.mnemonic[0].addresses.solana.address),
  solanaPhantom: solana('phantom', hd.solanaPhantom.addresses[0]),
  refused,
  badCodes: [
    'er_short',
    'er_Foxsafe-test_restore012',
    'er_Foxsafe-test_restore0',
    'ER_Foxsafe-test_restore01',
    'pr_Foxsafe-test_restore01',
    'er_Foxsafe-test_restore0!',
    'er_Foxsafe-test_restoré01',
    ' er_Foxsafe-test_restore1',
    'er_Foxsafe-test_restore\n',
    `${CODE}\n`,
  ],
  badPhones: [
    PHONE.toUpperCase(),
    PHONE.slice(0, 63),
    `${PHONE}0`,
    `${PHONE.slice(0, 63)}g`,
    `${PHONE.slice(0, 63)}\n`,
    `${PHONE}\n`,
    '',
  ],
};
for (const b of out.badCodes) if (isEsimRestoreCode(b)) throw new Error(`accepted bad code ${JSON.stringify(b)}`);
for (const b of out.badPhones) if (isEsimRestorePhone(b)) throw new Error(`accepted bad phone ${JSON.stringify(b)}`);
wallet.delete();
writeFileSync(new URL('../test/vectors/esim-restore.json', import.meta.url), `${JSON.stringify(out, null, 2)}\n`);
console.log(`wrote 4 proofs and ${refused.length} refused messages`);
