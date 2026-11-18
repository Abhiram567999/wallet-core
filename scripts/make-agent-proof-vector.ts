// Writes test/vectors/agent-proof.json: the AI agent connect proof (SPEC §7.14) for the test phrase, account 0,
// with a fixed, made-up pairing id. Keys come from Trust Wallet Core's HD wallet (the addresses are pinned by
// derivation.json and hd.json); the text comes from src/agentProof.ts; the signatures are made with noble,
// independently of the Trust Wallet Core signers the native signAgentProof uses. Also the dApp messages the
// native dApp signers must refuse (the proof text as a site would send it).
//
//   node scripts/make-agent-proof-vector.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { initWasm } from '@trustwallet/wallet-core';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { ed25519 } from '@noble/curves/ed25519.js';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { agentProofText, isAgentPairingId, isAgentProofText, AGENT_PROOF_SITE } from '../src/agentProof.ts';
import { base58Encode } from '../src/solana.ts';
import { concat, toHex, utf8 } from '../src/encoding.ts';
import { SOLANA_PATHS } from '../src/hd.ts';

const load = (f: string) => JSON.parse(readFileSync(new URL(`../test/vectors/${f}`, import.meta.url), 'utf8'));
const derivation = load('derivation.json');
const hd = load('hd.json');
const words: string = derivation.mnemonic[0].words;
/** Made up for the test vector; real ids come from the server. */
const PAIRING_ID = 'pr_Foxsafe-test_pairing01';
if (!isAgentPairingId(PAIRING_ID)) throw new Error('bad test pairing id');

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
const evmText = agentProofText(PAIRING_ID, evmAddress);

const tronKey = wallet.getKeyForCoin(CoinType.tron);
const tronAddress = AnyAddress.createWithPublicKey(tronKey.getPublicKeySecp256k1(false), CoinType.tron).description();
if (tronAddress !== derivation.mnemonic[0].addresses.tron.address) throw new Error('TRON address differs from derivation.json');
const tronText = agentProofText(PAIRING_ID, tronAddress);

const solana = (solanaPath: 'trust' | 'phantom', want: string) => {
  const key = wallet.getKey(CoinType.solana, SOLANA_PATHS[solanaPath]).data();
  const address = base58Encode(ed25519.getPublicKey(key));
  if (address !== want) throw new Error(`Solana ${solanaPath} address differs from the vectors`);
  const text = agentProofText(PAIRING_ID, address);
  return { coin: 501, solanaPath, path: SOLANA_PATHS[solanaPath], address, text, signature: base58Encode(ed25519.sign(utf8(text), key)) };
};

const refused = [
  { what: 'the EVM proof text, as a site would send it', coin: 60, text: evmText },
  { what: 'the TRON proof text, as a site would send it', coin: 195, text: tronText },
  { what: 'the Solana proof text, as a site would send it', coin: 501, text: agentProofText(PAIRING_ID, derivation.mnemonic[0].addresses.solana.address) },
  { what: 'the proof text in capitals', coin: 60, text: evmText.toUpperCase() },
  { what: 'the proof text in mixed case', coin: 60, text: evmText.replace('connect an AI agent to this wallet', 'Connect An Ai Agent To This Wallet') },
  { what: 'the proof text inside a longer message', coin: 60, text: `Welcome to Example!\n\n${evmText}\n\nNonce: 8122` },
  { what: 'the phrase mid-sentence', coin: 195, text: `Please CONNECT an AI agent to this WALLET to continue. Nonce: 99` },
  { what: 'the phrase mid-sentence (Solana)', coin: 501, text: `Sign to connect an ai agent to this wallet.` },
].map(({ what, coin, text }) => {
  if (!isAgentProofText(text)) throw new Error(`${what}: no marker`);
  return { what, coin, hex: hex0x(utf8(text)) };
});

const out = {
  note: 'Test phrase and a made-up pairing id only; never fund it. Made by scripts/make-agent-proof-vector.ts (keys: Trust Wallet Core HD wallet; signatures: noble).',
  pairingId: PAIRING_ID,
  site: AGENT_PROOF_SITE,
  account: 0,
  evm: { coin: 60, address: evmAddress, text: evmText, signature: signPrefixed('\x19Ethereum Signed Message:\n', evmText, evmKey.data()) },
  tron: { coin: 195, address: tronAddress, text: tronText, signature: signPrefixed('\x19TRON Signed Message:\n', tronText, tronKey.data()) },
  solana: solana('trust', derivation.mnemonic[0].addresses.solana.address),
  solanaPhantom: solana('phantom', hd.solanaPhantom.addresses[0]),
  refused,
  badPairingIds: [
    'pr_short',
    'pr_Foxsafe-test_pairing012',
    'pr_Foxsafe-test_pairing0',
    'PR_Foxsafe-test_pairing01',
    'pr_Foxsafe-test_pairing0!',
    'pr_Foxsafe-test_pairiné01',
    ' pr_Foxsafe-test_pairing1',
    'pr_Foxsafe-test_pairing\n',
    `${PAIRING_ID}\n`,
  ],
};
for (const b of out.badPairingIds) if (isAgentPairingId(b)) throw new Error(`accepted bad pairing id ${JSON.stringify(b)}`);
wallet.delete();
writeFileSync(new URL('../test/vectors/agent-proof.json', import.meta.url), `${JSON.stringify(out, null, 2)}\n`);
console.log(`wrote 4 proofs and ${refused.length} refused messages`);
