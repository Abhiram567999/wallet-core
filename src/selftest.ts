// On-device self-test: runs the native module against the shared test
// vectors and through a full create / sign / recover / backup cycle.
// Development builds only. It WIPES all wallets on the device it runs on.

import { sha256 } from '@noble/hashes/sha2.js';
import { toHex, utf8 } from './encoding.ts';
import { open } from './envelope.ts';
import { WalletCore } from './native.ts';
import { decodeVault } from './vault.ts';

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
