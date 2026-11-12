// On-device self-test: runs the native module against the shared test
// vectors and through a full create / sign / recover / backup cycle.
// Development builds only. It WIPES all wallets on the device it runs on.

import { sha256 } from '@noble/hashes/sha2.js';
import { toHex, utf8 } from './encoding.ts';
import { open } from './envelope.ts';
import { ed25519 } from '@noble/curves/ed25519.js';
import { canBackupWithPassword, canSaveBackupFile, canSignDapp, canSignGaslessEvm, canSignGaslessSolana, canSignSafe, canSignTronMultisig, signDappEvm, signDappMessage, signDappSolana, signDappTron, signDappTypedData, signGaslessEvm, signGaslessSolana, signSafe, signTronMultisig, signTransactions, WalletCore, type DappSignRequest, type GaslessEvmRequest, type GaslessSolanaRequest, type SafeSignRequest } from './native.ts';
import { associatedTokenAddress, base58Decode } from './solana.ts';
import { gaslessSolanaMessage } from './solanaGasless.ts';
import { bitcoinOutput, evmDappInput, tronOutput, tronTransferInput } from './tx.ts';
import { TW } from './proto/tw.js';
import { decodeVault } from './vault.ts';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { keccak_256 } from '@noble/hashes/sha3.js';
import { base58Encode } from './solana.ts';
import { tronMultisigRaw, tronTxId, fromHex, type TronMultisigAction } from './tronMultisig.ts';

export interface Vectors {
  hd: {
    words: string;
    accounts: Record<string, { coin: number; paths: string[]; addresses: string[] }>;
    solanaPhantom: { paths: string[]; addresses: string[] };
    solanaKey: { base58: string; array: string; address: string };
  };
  derivation: { mnemonic: { words: string; addresses: Record<string, { coin: number; address: string }> }[] };
  envelopes: { wallets: unknown[]; cases: { name: string; secret: Record<string, string>; envelope: { kind: string; [k: string]: unknown } }[] };
  signing: { coin: number; privateKeyHex: string; inputBase64: string; outputBase64: string };
  bitcoin: { inputBase64: string; rawHex: string; txid: string; ownAddress: string };
  utxo: Record<'litecoin' | 'dogecoin' | 'bitcoinCash', { coin: number; inputBase64: string; rawHex: string }>;
  gaslessEvm: { coin: number; sender: string; typedData: string; request: GaslessEvmRequest; signature: string; authorization: { r: string; s: string; yParity: number } };
  /** Optional so older app builds without the vector still run the rest. */
  safe?: { coin: number; signer: string; request: SafeSignRequest; allowed: { what: string; typedData: string; signature: string }[]; refused: { what: string; typedData: string }[] };
  /** Optional so older app builds without the vector still run the rest (SPEC §7.9). */
  dapp?: {
    evm: { coin: number; address: string; request: DappSignRequest; messages: { allowed: { what: string; hex: string; signature: string }[]; refused: { what: string; hex: string }[] }; typedData: { allowed: { what: string; typedData: string; signature: string }[]; refused: { what: string; typedData: string }[] } };
    tron: { coin: number; address: string; request: DappSignRequest; message: { hex: string; signature: string } };
    solana: { address: string; request: DappSignRequest };
  };
}

export interface CheckResult {
  name: string;
  ok: boolean;
  detail: string;
  ms: number;
}

const PASSCODE = '482915';
const ethKeyIdPlaceholder = () => 'no-such-wallet';

export async function runSelfTest(v: Vectors, log: (r: CheckResult) => void = () => {}): Promise<CheckResult[]> {
  const results: CheckResult[] = [];
  const check = async (name: string, fn: () => Promise<string>) => {
    const t = Date.now();
    let r: CheckResult;
    try {
      r = { name, ok: true, detail: await fn(), ms: Date.now() - t };
    } catch (e) {
      r = { name, ok: false, detail: String((e as Error)?.message ?? e), ms: Date.now() - t };
    }
    results.push(r);
    log(r);
  };
  const expect = (cond: boolean, msg: string) => {
    if (!cond) throw new Error(msg);
  };
  const rejects = async (p: Promise<unknown>, code: string) => {
    try {
      await p;
    } catch (e) {
      const m = String((e as Error)?.message ?? e);
      expect(m.includes(code), `expected ${code}, got: ${m}`);
      return;
    }
    throw new Error(`expected ${code}, but it succeeded`);
  };

  // 1. Same addresses as the JavaScript build of Trust Wallet Core, every chain.
  await check('addresses for every chain match the vectors', async () => {
    let n = 0;
    for (const m of v.derivation.mnemonic) {
      const got = await WalletCore.previewAddresses(m.words, null, [], 0, 'trust'); // vectors use the library's default paths
      const byCoin = new Map(got.map((a) => [a.coin, a.address]));
      for (const [name, want] of Object.entries(m.addresses)) {
        expect(byCoin.get(want.coin) === want.address, `${name}: ${byCoin.get(want.coin)} != ${want.address}`);
        n++;
      }
    }
    return `${n} addresses`;
  });

  await check('HD accounts 2 and 3 match on every chain', async () => {
    let n = 0;
    for (const account of [1, 2]) {
      const got = await WalletCore.previewAddresses(v.hd.words, null, [], account, 'trust');
      const byCoin = new Map(got.map((a) => [a.coin, a]));
      for (const [name, want] of Object.entries(v.hd.accounts)) {
        const g = byCoin.get(want.coin);
        expect(g?.address === want.addresses[account] && g?.derivationPath === want.paths[account], `${name} account ${account}: ${g?.address} ${g?.derivationPath}`);
        n++;
      }
    }
    const sol = await WalletCore.previewAccounts(v.hd.words, null, [501], 0, 3, 'phantom');
    sol.forEach((a, i) => {
      expect(a.account === i && a.addresses[0]!.address === v.hd.solanaPhantom.addresses[i], `Phantom Solana account ${i}: ${a.addresses[0]!.address}`);
      expect(a.addresses[0]!.derivationPath === v.hd.solanaPhantom.paths[i], `Phantom Solana path ${i}: ${a.addresses[0]!.derivationPath}`);
    });
    return `${n + 3} addresses`;
  });

  // 2. Envelopes made by the JavaScript reference open natively.
  await check('envelope vectors open natively', async () => {
    for (const c of v.envelopes.cases) {
      const wallets = c.envelope.kind === 'device' ? v.envelopes.wallets.slice(0, 1) : v.envelopes.wallets;
      const want = toHex(sha256(utf8(JSON.stringify({ v: 1, wallets }))));
      const got = await WalletCore.envelopeDigest(JSON.stringify(c.envelope), c.secret);
      expect(got === want, `${c.name}: plaintext differs`);
    }
    return `${v.envelopes.cases.length} envelopes`;
  });

  await check('a changed envelope is refused', async () => {
    const c = v.envelopes.cases.find((x) => x.name === 'backup-passkey')!;
    await rejects(WalletCore.envelopeDigest(JSON.stringify({ ...c.envelope, kind: 'recovery' }), c.secret), 'ENVELOPE_AUTH');
    return 'refused';
  });

  // 3. Full cycle on this device.
  await WalletCore.wipe(false);
  let multiId = '';
  let ethKeyId = '';
  let importedId = '';

  await check('passcode', async () => {
    expect(!(await WalletCore.hasPasscode()), 'passcode left over');
    await rejects(WalletCore.setPasscode('123'), 'PASSCODE');
    await WalletCore.setPasscode(PASSCODE);
    expect(await WalletCore.verifyPasscode(PASSCODE), 'correct passcode refused');
    expect(!(await WalletCore.verifyPasscode('000000')), 'wrong passcode accepted');
    return 'set and verified';
  });

  await check('create a multi-chain wallet', async () => {
    await rejects(WalletCore.createWallet({ name: 'x', kind: 'multi', passcode: '000000' }), 'PASSCODE');
    const w = await WalletCore.createWallet({ name: 'Wallet 1', kind: 'multi', passcode: PASSCODE });
    multiId = w.id;
    const [eth] = await WalletCore.getAddresses(w.id, [60]);
    expect(!!eth && WalletCore.validateAddress(eth.address, 60), 'no valid Ethereum address');
    const phrase = await WalletCore.revealSecret(w.id);
    expect(phrase.split(' ').length === 12 && WalletCore.validateMnemonic(phrase), 'bad phrase');
    return `${w.kind}, ${eth!.address.slice(0, 10)}…`;
  });

  await check('import a phrase', async () => {
    const m = v.derivation.mnemonic[0]!;
    const w = await WalletCore.importMnemonic({ name: 'Imported', words: `  ${m.words.toUpperCase()} `, kind: 'hd', solanaPath: 'trust', passcode: PASSCODE });
    importedId = w.id;
    const got = await WalletCore.getAddresses(w.id, [0, 60, 195, 501]);
    for (const a of got) {
      const want = Object.values(m.addresses).find((x) => x.coin === a.coin)!.address;
      expect(a.address === want, `coin ${a.coin}: ${a.address}`);
    }
    await rejects(WalletCore.importMnemonic({ name: 'bad', words: 'one two three', kind: 'multi', passcode: PASSCODE }), 'INVALID');
    return '4 chains match';
  });

  await check('add, rename and remove HD accounts', async () => {
    const w1 = await WalletCore.addAccount(importedId, null, PASSCODE);
    const w2 = await WalletCore.addAccount(importedId, 'Savings', PASSCODE);
    expect(w2.accounts.length === 3 && w2.accounts[2]!.name === 'Savings' && w1.accounts[1]!.name === 'Account 2', JSON.stringify(w2.accounts));
    const [eth2] = await WalletCore.getAddresses(importedId, [60], 2);
    expect(eth2!.address === v.hd.accounts.ethereum!.addresses[2], `account 3 ETH ${eth2!.address}`);
    await WalletCore.renameAccount(importedId, 1, 'Trading');
    const w3 = await WalletCore.removeAccount(importedId, 2, PASSCODE);
    expect(w3.accounts.length === 2 && w3.accounts[1]!.name === 'Trading', `after remove: ${JSON.stringify(w3.accounts)}`);
    await rejects(WalletCore.removeAccount(importedId, 0, PASSCODE), 'INVALID');
    await rejects(WalletCore.addAccount(ethKeyIdPlaceholder(), null, PASSCODE), 'NOT_FOUND');
    await rejects(WalletCore.addAccount(multiId, null, PASSCODE), 'INVALID'); // only HD wallets get more accounts
    return 'accounts 2 and 3 work';
  });

  await check('sign Bitcoin; change is forced to the own address', async () => {
    // The vector's input names a wrong change address on purpose; native signing must replace it.
    const out = bitcoinOutput(await WalletCore.signTransaction(importedId, 0, v.bitcoin.inputBase64));
    expect(out.raw === v.bitcoin.rawHex && out.txid === v.bitcoin.txid, `bitcoin tx differs: ${out.txid}`);
    return 'matches the reference';
  });

  await check('sign Litecoin, Dogecoin and Bitcoin Cash', async () => {
    for (const name of ['litecoin', 'dogecoin', 'bitcoinCash'] as const) {
      const c = v.utxo[name];
      const out = bitcoinOutput(await WalletCore.signTransaction(importedId, c.coin, c.inputBase64));
      expect(out.raw === c.rawHex, `${name}: signed transaction differs`);
    }
    return '3 coins match';
  });

  await check('sign a payment and its fee with one Face ID (gasless)', async () => {
    const from = (await WalletCore.getAddresses(importedId, [195]))[0]!.address;
    const block = { number: 70_000_000, timestamp: 1_760_000_000_000, txTrieRoot: '00'.repeat(32), parentHash: '00'.repeat(32), witnessAddress: `41${'00'.repeat(20)}`, version: 30 };
    const usdt = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
    const feeWallet = 'TRmToStoTAxU414feHAS67w33Qzi4VyEVJ';
    const t = (to: string, amount: bigint, owner = from) =>
      tronTransferInput({ from: owner, to, amount, token: usdt, feeLimit: 30_000_000n, block, now: 1_760_000_001_000, expiresInMs: 120_000 });
    const payment = t('TCEezhePNTyie5gkrb77zAZLBx9RMffLuN', 5_000_000n);
    const fee = t(feeWallet, 2_000_000n);

    const batch = await signTransactions(importedId, 195, [payment, fee]);
    const single = [await WalletCore.signTransaction(importedId, 195, payment), await WalletCore.signTransaction(importedId, 195, fee)];
    expect(batch.length === 2, 'expected two signed transactions');
    for (let i = 0; i < 2; i++) expect(tronOutput(batch[i]!).json === tronOutput(single[i]!).json, `transaction ${i + 1} differs from signing it alone`);

    if (typeof (WalletCore as { signTransactions?: unknown }).signTransactions !== 'function') return 'this build signs one by one';
    // The native rule: the second transaction may only be a fee of at most 5 USDT to Foxsafe's fee wallet.
    const refused = async (inputs: string[], what: string) => {
      const ok = await signTransactions(importedId, 195, inputs).then(
        () => true,
        () => false,
      );
      expect(!ok, `${what} was signed`);
    };
    await refused([payment, t('TRdfD4J3ddSMV5nu5hFDvwzQA4MLS3XdiV', 2_000_000n)], 'a second transfer to someone else');
    await refused([payment, t(feeWallet, 6_000_000n)], 'a fee above 5 USDT');
    await refused([payment, fee, fee], 'a third transaction');
    await refused([payment, t(feeWallet, 2_000_000n, 'TCEezhePNTyie5gkrb77zAZLBx9RMffLuN')], 'a fee from another wallet');
    return 'one unlock for both, same signatures; 4 bad batches refused';
  });

  await check('gasless EVM: one Face ID signs the operation and the 7702 upgrade; tampering is refused', async () => {
    if (!canSignGaslessEvm()) return 'this build has no gasless EVM signing';
    const g = v.gaslessEvm;
    const out = await signGaslessEvm(importedId, g.coin, g.typedData, g.request);
    expect(out.signature.toLowerCase() === g.signature.toLowerCase(), 'operation signature differs from viem');
    expect(BigInt(out.authorization!.r) === BigInt(g.authorization.r) && BigInt(out.authorization!.s) === BigInt(g.authorization.s), 'upgrade signature differs from viem');
    const refused = async (typedData: string, request: GaslessEvmRequest, what: string) => {
      const ok = await signGaslessEvm(importedId, g.coin, typedData, request).then(() => true, () => false);
      expect(!ok, `${what} was signed`);
    };
    const td = JSON.parse(g.typedData);
    const swap = (path: (t: any) => void) => { const c = JSON.parse(g.typedData); path(c); return JSON.stringify(c); };
    await refused(g.typedData, { ...g.request, fee: (6n * 10n ** 18n).toString() }, 'a fee above 5');
    await refused(g.typedData, { ...g.request, to: '0x000000000000000000000000000000000000bEEF' }, 'a payment the operation does not contain');
    await refused(swap((t) => (t.message.callData = t.message.callData.replace(/4fe28082398c2ddf89c010785e9acd8604ea9607/i, '000000000000000000000000000000000000bEEF'))), g.request, 'a fee redirected to another address');
    await refused(swap((t) => (t.domain.verifyingContract = '0x0000000071727De22E5E9d8BAf0edAc6f37da032')), g.request, 'another EntryPoint');
    await refused(swap((t) => (t.message.paymasterAndData = '0x')), g.request, 'an operation without a paymaster');
    await refused(swap((t) => (t.message.initCode = '0x63c0c19a282a1B52b07dD5a65b58948A07DAE32B')), g.request, 'an upgrade to another contract');
    await refused(swap((t) => (t.message.sender = '0x000000000000000000000000000000000000bEEF')), g.request, 'an operation from another wallet');
    void td;
    return 'signatures equal viem; 7 tampered versions refused';
  });

  await check('Safe: owner signatures equal viem; tampered Safe transactions are refused', async () => {
    if (!canSignSafe() || !v.safe) return 'this build has no Safe signing';
    const sv = v.safe;
    for (const a of sv.allowed) {
      const out = await signSafe(importedId, sv.coin, a.typedData, sv.request);
      expect(out.signature.toLowerCase() === a.signature.toLowerCase(), `${a.what}: signature differs from viem`);
      expect(out.signer.toLowerCase() === sv.signer.toLowerCase(), `${a.what}: wrong signer`);
    }
    for (const r of sv.refused) {
      const ok = await signSafe(importedId, sv.coin, r.typedData, sv.request).then(() => true, () => false);
      expect(!ok, `${r.what} was signed`);
    }
    const wrongChain = await signSafe(importedId, sv.coin, sv.allowed[0]!.typedData, { ...sv.request, chainId: 1 }).then(() => true, () => false);
    expect(!wrongChain, 'a request for another network was signed');
    const openMessage = await WalletCore.signTypedData(importedId, 60, sv.allowed[0]!.typedData).then(() => true, () => false);
    const openText = await WalletCore.signMessage(importedId, 60, 'hello').then(() => true, () => false);
    expect(!openMessage && !openText, 'open message signing still works');
    return `${sv.allowed.length} signatures equal viem; ${sv.refused.length + 1} tampered versions and open message signing refused`;
  });

  await check('TRON multisig: setup and sends sign (signature recovers to this account); tampering is refused', async () => {
    if (!canSignTronMultisig()) return 'this build has no TRON multisig signing';
    const me = (await WalletCore.getAddresses(importedId, [195]))[0]!.address;
    const B = 'TRdfD4J3ddSMV5nu5hFDvwzQA4MLS3XdiV';
    const C = 'TCEezhePNTyie5gkrb77zAZLBx9RMffLuN';
    const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
    const now = Date.now();
    const ref = (expiresIn = 3_600_000) => ({ refBlockBytes: 'ab12', refBlockHash: '0011223344556677', timestamp: now, expiration: now + expiresIn });
    const tronAddressOf = (sigHex: string, txID: string) => {
      const sig = fromHex(sigHex);
      const pub = secp256k1.Signature.fromBytes(sig.slice(0, 64), 'compact').addRecoveryBit(sig[64]! % 27).recoverPublicKey(fromHex(txID)).toBytes(false);
      const body = new Uint8Array([0x41, ...keccak_256(pub.slice(1)).slice(12)]);
      const { sha256: h } = { sha256 };
      return base58Encode(new Uint8Array([...body, ...h(h(body)).slice(0, 4)]));
    };
    const ok = async (a: TronMultisigAction, req: Parameters<typeof signTronMultisig>[2], pid: number, fee = 0) => {
      const raw = tronMultisigRaw(a, pid, ref(), fee);
      const out = await signTronMultisig(importedId, raw, req);
      expect(out.txID === tronTxId(raw), 'txID differs');
      expect(out.signer === me && tronAddressOf(out.signature, out.txID) === me, 'signature does not recover to this account');
    };
    const refused = async (raw: string, req: Parameters<typeof signTronMultisig>[2], what: string) => {
      const signed = await signTronMultisig(importedId, raw, req).then(() => true, () => false);
      expect(!signed, `${what} was signed`);
    };
    const setup: TronMultisigAction = { type: 'setup', owner: me, owners: [me, B, C], threshold: 2 };
    const setupReq = { kind: 'setup' as const, account: me, permissionId: 0 as const, owners: [me, B, C], threshold: 2 };
    const sendReq = { kind: 'send' as const, account: me, permissionId: 2 };
    await ok(setup, setupReq, 0);
    await ok({ type: 'transfer', owner: me, to: B, amount: 1_000_000n }, sendReq, 2);
    await ok({ type: 'token', owner: me, token: USDT, to: B, amount: 5_000_000n }, sendReq, 2, 30_000_000);

    const raw = (a: TronMultisigAction, pid: number, expiresIn?: number, fee = 0) => tronMultisigRaw(a, pid, ref(expiresIn), fee);
    await refused(raw({ type: 'setup', owner: me, owners: [B, C, 'TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G'], threshold: 2 }, 0), { ...setupReq, owners: [B, C, 'TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G'] }, 'a setup without this phone');
    await refused(raw(setup, 0), { ...setupReq, owners: [me, B] }, 'a setup with other owners than confirmed');
    await refused(raw(setup, 0), { ...setupReq, threshold: 3 }, 'a setup with another threshold than confirmed');
    await refused(raw(setup, 0).replace('0200008000000000', '0200008000400000'), setupReq, 'an active permission that may change permissions');
    await refused(raw({ type: 'transfer', owner: me, to: B, amount: 1n }, 0), { ...sendReq, permissionId: 0 }, 'a send with the owner permission');
    await refused(raw({ type: 'transfer', owner: me, to: B, amount: 1n }, 3), sendReq, 'a send with another permission id');
    await refused(raw({ type: 'token', owner: me, token: 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8', to: B, amount: 1n }, 2, undefined, 200_000_000), sendReq, 'a fee limit above 100 TRX');
    await refused(raw({ type: 'token', owner: me, token: C, to: B, amount: 1n }, 2), sendReq, 'a token that is not USDT or USDC');
    // Co-owners do sign sends FROM the shared account (not their own address); what must match is the account shown.
    await refused(raw({ type: 'transfer', owner: B, to: C, amount: 1n }, 2), sendReq, 'a send from another account than the one shown');
    await refused(raw({ type: 'transfer', owner: me, to: B, amount: 1n }, 2, 3 * 86_400_000), sendReq, 'an expiry 3 days away');
    await refused(raw({ type: 'transfer', owner: me, to: B, amount: 1n }, 2, -60_000), sendReq, 'an expired transaction');
    await refused(raw(setup, 0), { ...sendReq, permissionId: 2 }, 'a setup passed off as a send');
    return '3 signatures recover to this account; 12 tampered versions refused';
  });

  await check('dApp signing: messages, typed data and transactions sign like viem; drainer patterns are refused', async () => {
    if (!canSignDapp() || !v.dapp) return 'this build has no dApp signing';
    const d = v.dapp;
    let refusedCount = 0;
    const refuses = async (p: Promise<unknown>, what: string) => {
      const signed = await p.then(() => true, () => false);
      expect(!signed, `${what} was signed`);
      refusedCount++;
    };
    // EVM messages and typed data (signatures from viem)
    for (const m of d.evm.messages.allowed) {
      const sig = await signDappMessage(importedId, 60, m.hex, d.evm.request);
      expect(sig.toLowerCase() === m.signature.toLowerCase(), `${m.what}: signature differs from viem`);
    }
    for (const m of d.evm.messages.refused) await refuses(signDappMessage(importedId, 60, m.hex, d.evm.request), m.what);
    for (const t of d.evm.typedData.allowed) {
      const sig = await signDappTypedData(importedId, 60, t.typedData, d.evm.request);
      expect(sig.toLowerCase() === t.signature.toLowerCase(), `${t.what}: signature differs from viem`);
    }
    for (const t of d.evm.typedData.refused) await refuses(signDappTypedData(importedId, 60, t.typedData, d.evm.request), t.what);
    await refuses(signDappTypedData(importedId, 60, d.evm.typedData.allowed[0]!.typedData, { ...d.evm.request, chainId: 137 }), 'typed data while connected to another network');
    await refuses(signDappMessage(importedId, 60, d.evm.messages.allowed[0]!.hex, { ...d.evm.request, address: '0x000000000000000000000000000000000000bEEF' }), 'a message for another account');

    // EVM transactions
    const to = '0x000000000000000000000000000000000000bEEF';
    const base = { chainId: 1n, nonce: 7n, gasLimit: 21000n, maxFeePerGas: 30_000_000_000n, maxPriorityFeePerGas: 1_000_000_000n };
    const P = TW.Ethereum.Proto;
    const raw = (m: Record<string, unknown>) => {
      const b = P.SigningInput.encode(P.SigningInput.create({ chainId: new Uint8Array([1]), nonce: new Uint8Array([7]), gasLimit: new Uint8Array([0x52, 0x08]), toAddress: to, ...m })).finish();
      let x = ''; for (const c of b) x += String.fromCharCode(c); return btoa(x);
    };
    for (const input of [evmDappInput({ ...base, to, value: 1n }), evmDappInput({ ...base, to, value: 0n, data: '0xa9059cbb' + '00'.repeat(64) }), evmDappInput({ chainId: 1n, nonce: 7n, gasLimit: 21000n, gasPrice: 1n, to, value: 1n })]) {
      const out = await signDappEvm(importedId, 60, input, d.evm.request);
      expect(out.length > 80, 'EVM transaction not signed');
    }
    await refuses(signDappEvm(importedId, 60, evmDappInput({ ...base, chainId: 137n, to, value: 1n }), d.evm.request), 'a transaction for another network');
    await refuses(signDappEvm(importedId, 60, raw({ txMode: P.TransactionMode.SetCode, eip7702Authorization: { address: to }, transaction: { transfer: { amount: new Uint8Array([1]) } } }), d.evm.request), 'an EIP-7702 delegation of the account');
    await refuses(signDappEvm(importedId, 60, raw({ txMode: P.TransactionMode.Enveloped, transaction: { erc20Approve: { spender: to, amount: new Uint8Array([1]) } } }), d.evm.request), 'a prebuilt token approval');
    await refuses(signDappEvm(importedId, 60, evmDappInput({ ...base, to, value: 1n }), { ...d.evm.request, address: to }), 'a transaction for another account');

    // TRON message and transactions
    const tsig = await signDappMessage(importedId, 195, d.tron.message.hex, d.tron.request);
    expect(tsig.toLowerCase() === d.tron.message.signature.toLowerCase(), 'TRON message signature differs from noble');
    const me = d.tron.address;
    const B = 'TRdfD4J3ddSMV5nu5hFDvwzQA4MLS3XdiV';
    const now = Date.now();
    const ref = (expiresIn = 600_000) => ({ refBlockBytes: 'ab12', refBlockHash: '0011223344556677', timestamp: now, expiration: now + expiresIn });
    const send = (pid = 0, expiresIn?: number, owner = me) => tronMultisigRaw({ type: 'transfer', owner, to: B, amount: 1_000_000n }, pid, ref(expiresIn), 0);
    const okRaw = send();
    const tron = await signDappTron(importedId, okRaw, { ...d.tron.request, txID: tronTxId(okRaw) });
    expect(tron.txID === tronTxId(okRaw) && tron.signature.length === 130, 'TRON transaction not signed');
    await refuses(signDappTron(importedId, tronMultisigRaw({ type: 'setup', owner: me, owners: [me, B], threshold: 1 }, 0, ref(), 0), d.tron.request), 'a TRON permission change (account takeover)');
    await refuses(signDappTron(importedId, send(2), d.tron.request), 'a TRON shared-account permission');
    await refuses(signDappTron(importedId, send(0, -60_000), d.tron.request), 'an expired TRON transaction');
    await refuses(signDappTron(importedId, send(0, 3 * 86_400_000), d.tron.request), 'a TRON expiry 3 days away');
    await refuses(signDappTron(importedId, send(0, undefined, B), d.tron.request), 'a TRON transaction from another account');
    await refuses(signDappTron(importedId, okRaw, { ...d.tron.request, txID: '00'.repeat(32) }), 'a TRON transaction that is not the one shown');

    // Solana: legacy transactions built here, byte by byte
    const mePk = base58Decode(d.solana.address);
    const other = base58Decode('8kQ6nF3cWwfS1Lw5Yp6VQb2hZJg1pB4H8sTbKqfrbYxN');
    const system = new Uint8Array(32);
    const token = base58Decode('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
    const blockhash = base58Decode('A3znyaRYUvi7GbQv1pp9CqqiVo7anddU9rPKFH55V28R');
    const solTx = (signers: Uint8Array[], readonly: Uint8Array[], ixs: { program: number; accounts: number[]; data: number[] }[]) => {
      const keys = [...signers, ...readonly];
      const bytes = [signers.length, ...new Uint8Array(64 * signers.length), signers.length, 0, readonly.length, keys.length];
      for (const k of keys) bytes.push(...k);
      bytes.push(...blockhash, ixs.length);
      for (const ix of ixs) bytes.push(ix.program, ix.accounts.length, ...ix.accounts, ix.data.length, ...ix.data);
      return new Uint8Array(bytes);
    };
    const b64 = (b: Uint8Array) => { let x = ''; for (const c of b) x += String.fromCharCode(c); return btoa(x); };
    const transfer = solTx([mePk], [other, system], [{ program: 2, accounts: [0, 1], data: [2, 0, 0, 0, 0x40, 0x42, 0x0f, 0, 0, 0, 0, 0] }]);
    const sol = await signDappSolana(importedId, 'transaction', b64(transfer), d.solana.request);
    const signedTx = Uint8Array.from(atob(sol.transaction!), (c) => c.charCodeAt(0));
    expect(ed25519.verify(signedTx.slice(1, 65), transfer.slice(65), mePk), 'Solana signature does not verify');
    const text = new TextEncoder().encode(`${d.solana.request.origin} wants you to sign in with your Solana account:\n${d.solana.address}\n\nNonce: 1`);
    const msgSig = await signDappSolana(importedId, 'message', b64(text), d.solana.request);
    expect(ed25519.verify(base58Decode(msgSig.signature), text, mePk), 'Solana message signature does not verify');
    await refuses(signDappSolana(importedId, 'transaction', b64(solTx([mePk], [other, system], [{ program: 2, accounts: [0], data: [1, 0, 0, 0, ...other] }])), d.solana.request), 'a Solana Assign of this account to a program');
    await refuses(signDappSolana(importedId, 'transaction', b64(solTx([mePk], [other, token], [{ program: 2, accounts: [1, 0], data: [6, 2, 1, ...other] }])), d.solana.request), 'a Solana token SetAuthority by this account');
    await refuses(signDappSolana(importedId, 'transaction', b64(solTx([other], [mePk, system], [{ program: 2, accounts: [0, 1], data: [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] }])), d.solana.request), 'a Solana transaction this account does not sign');
    await refuses(signDappSolana(importedId, 'message', b64(transfer.slice(65)), d.solana.request), 'a Solana transaction passed off as a message');
    await refuses(signDappSolana(importedId, 'message', b64(new TextEncoder().encode(`evil.example wants you to sign in with your Solana account:\n${d.solana.address}`)), d.solana.request), 'a Solana sign-in for another site');
    return `${d.evm.messages.allowed.length + d.evm.typedData.allowed.length + 1} signatures equal viem/noble, 3 EVM + 1 TRON + 2 Solana signed; ${refusedCount} drainer or tampered requests refused`;
  });

  await check('gasless Solana: one Face ID signs payment + fee; tampering is refused', async () => {
    if (!canSignGaslessSolana()) return 'this build has no gasless Solana signing';
    const user = (await WalletCore.getAddresses(importedId, [501]))[0]!.address;
    const USDT = 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB';
    const FEE = '3DvVfRtM2SR49P6zkdA59g78BYsjXtnaKgvaUK1CPMnj';
    const payer = '9m1VupjQAYjjwaPwvw5tSuXX6jE52Jes1P8pR5Ek6iob';
    const to = '8kQ6nF3cWwfS1Lw5Yp6VQb2hZJg1pB4H8sTbKqfrbYxN';
    const blockhash = 'A3znyaRYUvi7GbQv1pp9CqqiVo7anddU9rPKFH55V28R';
    const b64 = (b: Uint8Array) => { let s = ''; for (const x of b) s += String.fromCharCode(x); return btoa(s); };
    const build = (o: { feeWallet?: string; fee?: bigint; amount?: bigint; to?: string }) =>
      gaslessSolanaMessage({ feePayer: payer, user, mint: USDT, decimals: 6, destination: associatedTokenAddress(o.to ?? to, USDT), recipientOwner: o.to ?? to, feeWallet: o.feeWallet ?? FEE,
        createFeeAccount: true, amount: o.amount ?? 10_000_000n, fee: o.fee ?? 500_000n, blockhash, computeUnitLimit: 120_000, computeUnitPrice: 50_000n });
    const req: GaslessSolanaRequest = { to, mint: USDT, amount: '10000000', fee: '500000', feePayer: payer, blockhash, toIsTokenAccount: false, createRecipient: true, createFeeAccount: true, computeUnitLimit: '120000', computeUnitPrice: '50000' };
    const msg = build({});
    const sig = await signGaslessSolana(importedId, b64(msg), req);
    expect(ed25519.verify(base58Decode(sig), msg, base58Decode(user)), 'signature does not verify for this wallet');
    const refused = async (m: Uint8Array, r: GaslessSolanaRequest, what: string) => {
      const ok = await signGaslessSolana(importedId, b64(m), r).then(() => true, () => false);
      expect(!ok, `${what} was signed`);
    };
    await refused(build({ feeWallet: to }), req, 'a fee redirected to another wallet');
    await refused(build({ fee: 6_000_000n }), { ...req, fee: '6000000' }, 'a fee above 5');
    await refused(build({ amount: 99_000_000n }), req, 'a different payment amount');
    await refused(build({ to: payer }), req, 'a different receiver');
    await refused(msg, { ...req, feePayer: user }, 'the user as fee payer');
    const flipped = msg.slice(); flipped[flipped.length - 1] = flipped[flipped.length - 1]! ^ 1;
    await refused(flipped, req, 'a changed byte');
    return 'signature valid; 6 tampered versions refused';
  });

  await check('Phantom import: many accounts at once, Solana path, base58 key', async () => {
    const w = await WalletCore.importMnemonic({ name: 'Phantom', words: v.hd.words, kind: 'hd', solanaPath: 'phantom', accounts: 3, passcode: PASSCODE });
    expect(w.accounts.length === 3 && w.accounts[2]!.name === 'Account 3' && w.solanaPath === 'phantom', JSON.stringify(w));
    for (const i of [0, 1, 2]) {
      const [sol, eth] = await WalletCore.getAddresses(w.id, [501, 60], i);
      expect(sol!.address === v.hd.solanaPhantom.addresses[i], `SOL account ${i}: ${sol!.address}`);
      expect(eth!.address === v.hd.accounts.ethereum!.addresses[i], `ETH account ${i}: ${eth!.address}`);
    }
    await rejects(WalletCore.importMnemonic({ name: 'x', words: v.hd.words, kind: 'multi', accounts: 2, passcode: PASSCODE }), 'INVALID');
    const t = await WalletCore.setSolanaPath(w.id, 'trust', PASSCODE);
    const [sol2] = await WalletCore.getAddresses(w.id, [501], 2);
    expect(t.solanaPath === 'trust' && sol2!.address === v.hd.accounts.solana!.addresses[2], `after switch: ${sol2!.address}`);
    const [eth2] = await WalletCore.getAddresses(w.id, [60], 2);
    expect(eth2!.address === v.hd.accounts.ethereum!.addresses[2], 'switching the Solana path changed Ethereum');
    await WalletCore.deleteWallet(w.id, PASSCODE);

    const k = v.hd.solanaKey;
    for (const privateKey of [k.base58, k.array]) {
      const kw = await WalletCore.importPrivateKey({ name: 'SOL key', privateKey, coin: 501, passcode: PASSCODE });
      const [a] = await WalletCore.getAddresses(kw.id, [501]);
      expect(a!.address === k.address, `Solana key: ${a!.address}`);
      await WalletCore.deleteWallet(kw.id, PASSCODE);
    }
    const broken = JSON.stringify([...JSON.parse(k.array).slice(0, 63), 0]);
    await rejects(WalletCore.importPrivateKey({ name: 'x', privateKey: broken, coin: 501, passcode: PASSCODE }), 'INVALID');
    await rejects(WalletCore.importPrivateKey({ name: 'x', privateKey: k.base58, coin: 60, passcode: PASSCODE }), 'INVALID');
    return '3 accounts, path switch, 2 key formats';
  });

  await check('import a private key and sign (EIP-155)', async () => {
    const w = await WalletCore.importPrivateKey({ name: 'ETH key', privateKey: `0x${v.signing.privateKeyHex}`, coin: v.signing.coin, passcode: PASSCODE });
    ethKeyId = w.id;
    expect(w.kind === 'single' && w.coins.length === 1, 'not single-chain');
    const out = await WalletCore.signTransaction(w.id, v.signing.coin, v.signing.inputBase64);
    expect(out === v.signing.outputBase64, 'signed transaction differs from the vector');
    const bsc = await WalletCore.getAddresses(w.id, [20000714]);
    expect(bsc.length === 1, 'EVM key should also have a BNB Chain address');
    return 'signature matches';
  });

  await check('backup with a passkey opens in the JavaScript reference', async () => {
    const prf = new Uint8Array(32).map((_, i) => i + 1);
    const env = await WalletCore.exportBackup([importedId], { type: 'prf', prf: btoa(String.fromCharCode(...prf)) });
    const vault = decodeVault(await open(env, { type: 'prf', prf }, 'backup'));
    expect(vault.wallets[0]!.secret.type === 'mnemonic' && vault.wallets[0]!.secret.words === v.derivation.mnemonic[0]!.words, 'wrong secret');
    return 'secret matches';
  });

  await check('recovery copy survives a reinstall', async () => {
    const before = (await WalletCore.listWallets()).length;
    expect(before === 3, `expected 3 wallets, got ${before}`);
    expect(await WalletCore.recoveryHasAddress(Object.values(v.derivation.mnemonic[0]!.addresses).find((a) => a.coin === 60)!.address.toLowerCase()), 'address not found');
    expect(!(await WalletCore.recoveryHasAddress('0x0000000000000000000000000000000000000000')), 'unknown address found');
    await WalletCore.wipe(true); // what reinstalling does to the main copy
    expect((await WalletCore.listWallets()).length === 0, 'main copy not wiped');
    expect(!(await WalletCore.hasPasscode()), 'passcode not wiped');
    const scan = await WalletCore.scanRecovery();
    expect(scan.found && scan.walletCount === 3, `scan: ${JSON.stringify(scan)}`);
    await rejects(WalletCore.restoreFromRecovery('111111'), 'PASSCODE');
    const restored = await WalletCore.restoreFromRecovery(PASSCODE);
    expect(restored.length === 3, `restored ${restored.length}`);
    const back = restored.find((w) => w.id === importedId)!;
    expect(back.accounts.length === 2 && back.accounts[1]!.index === 1, `accounts after recovery: ${JSON.stringify(back.accounts)}`);
    expect(await WalletCore.verifyPasscode(PASSCODE), 'passcode not restored');
    const out = await WalletCore.signTransaction(ethKeyId, v.signing.coin, v.signing.inputBase64);
    expect(out === v.signing.outputBase64, 'restored key signs differently');
    return '3 wallets back';
  });

  await check('change passcode re-locks the recovery copy', async () => {
    await WalletCore.changePasscode(PASSCODE, '739104');
    await WalletCore.wipe(true);
    await rejects(WalletCore.restoreFromRecovery(PASSCODE), 'PASSCODE');
    expect((await WalletCore.restoreFromRecovery('739104')).length === 3, 'not restored with the new passcode');
    return 'ok';
  });

  await check('delete needs the passcode', async () => {
    await rejects(WalletCore.deleteWallet(multiId, PASSCODE), 'PASSCODE');
    await WalletCore.deleteWallet(multiId, '739104');
    expect((await WalletCore.listWallets()).length === 2, 'not deleted');
    expect((await WalletCore.scanRecovery()).walletCount === 2, 'recovery entry not deleted');
    return 'ok';
  });

  await check('backup password: the file holds every wallet and opens only with that password', async () => {
    if (!canBackupWithPassword()) return 'this build has no backup password';
    const PASS = 'correct horse 9';
    let pc = '739104';
    expect(!(await WalletCore.hasBackupPassword!()), 'a backup password is already set');
    await rejects(WalletCore.buildBackup!(pc), 'INVALID');
    await rejects(WalletCore.setBackupPassword!('short', pc), 'INVALID');
    await rejects(WalletCore.setBackupPassword!(PASS, PASSCODE), 'PASSCODE');
    await WalletCore.setBackupPassword!(PASS, pc);
    expect(await WalletCore.hasBackupPassword!(), 'not saved');
    await rejects(WalletCore.buildBackup!(PASSCODE), 'PASSCODE');
    await WalletCore.renameAccount(importedId, 1, 'Savings');
    await WalletCore.changePasscode(pc, '582047');
    pc = '582047';
    const file = await WalletCore.buildBackup!(pc); // still works after a passcode change
    if (canSaveBackupFile()) {
      // Android: saving twice keeps one file with the plain name (old copy removed only after the new one is written).
      const p1 = await WalletCore.saveBackupFile!('foxsafe-selftest.json', file);
      const p2 = await WalletCore.saveBackupFile!('foxsafe-selftest.json', file);
      expect(p2 === 'Download/Foxsafe/foxsafe-selftest.json', `saved as ${p1}, then ${p2}`);
    }
    await WalletCore.wipe(false); // a new phone
    await WalletCore.setPasscode('264810');
    await rejects(WalletCore.importBackup(file, { type: 'password', password: 'wrong password 1' }, '264810'), 'ENVELOPE');
    const back = await WalletCore.importBackup(file, { type: 'password', password: PASS }, '264810');
    expect(back.length === 2, `restored ${back.length} wallets`);
    const hd = back.find((w) => w.id === importedId);
    expect(!!hd && hd.accounts.length === 2 && hd.accounts[1]!.name === 'Savings', `accounts: ${JSON.stringify(hd?.accounts)}`);
    const out = await WalletCore.signTransaction(ethKeyId, v.signing.coin, v.signing.inputBase64);
    expect(out === v.signing.outputBase64, 'restored key signs differently');
    expect(!(await WalletCore.hasBackupPassword!()), 'backup password should not come back on a new phone');
    return '2 wallets back; wrong password refused';
  });

  await WalletCore.wipe(false);
  return results;
}

/**
 * Real-uninstall check, in two runs with an actual uninstall + reinstall in
 * between: `prepareUninstallTest` leaves one wallet and its recovery copy on
 * the device; `checkUninstallTest` (after reinstalling) looks for it.
 */
export async function prepareUninstallTest(): Promise<string> {
  await WalletCore.wipe(false);
  await WalletCore.setPasscode(PASSCODE);
  const w = await WalletCore.createWallet({ name: 'Uninstall test', kind: 'multi', passcode: PASSCODE });
  const [eth] = await WalletCore.getAddresses(w.id, [60]);
  const scan = await WalletCore.scanRecovery();
  return `prepared: 1 wallet ${eth!.address}, recovery entries ${scan.walletCount}`;
}

export async function checkUninstallTest(): Promise<string> {
  const wallets = await WalletCore.listWallets();
  const scan = await WalletCore.scanRecovery();
  if (!scan.found) return `NOT FOUND after reinstall (main copy wallets: ${wallets.length})`;
  const restored = await WalletCore.restoreFromRecovery(PASSCODE);
  const [eth] = await WalletCore.getAddresses(restored[0]!.id, [60]);
  await WalletCore.wipe(false);
  return `FOUND after reinstall: ${scan.walletCount} entr${scan.walletCount === 1 ? 'y' : 'ies'}, restored ${restored.length}, ${eth!.address} (main copy before restore: ${wallets.length})`;
}
