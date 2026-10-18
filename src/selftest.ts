// On-device self-test: runs the native module against the shared test
// vectors and through a full create / sign / recover / backup cycle.
// Development builds only. It WIPES all wallets on the device it runs on.

import { sha256 } from '@noble/hashes/sha2.js';
import { toHex, utf8 } from './encoding.ts';
import { open } from './envelope.ts';
import { WalletCore } from './native.ts';
import { decodeVault } from './vault.ts';

export interface Vectors {
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
      const got = await WalletCore.previewAddresses(m.words, null, []);
      const byCoin = new Map(got.map((a) => [a.coin, a.address]));
      for (const [name, want] of Object.entries(m.addresses)) {
        expect(byCoin.get(want.coin) === want.address, `${name}: ${byCoin.get(want.coin)} != ${want.address}`);
        n++;
      }
    }
    return `${n} addresses`;
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
    const w = await WalletCore.importMnemonic({ name: 'Imported', words: `  ${m.words.toUpperCase()} `, kind: 'multi', passcode: PASSCODE });
    importedId = w.id;
    const got = await WalletCore.getAddresses(w.id, [0, 60, 195, 501]);
    for (const a of got) {
      const want = Object.values(m.addresses).find((x) => x.coin === a.coin)!.address;
      expect(a.address === want, `coin ${a.coin}: ${a.address}`);
    }
    await rejects(WalletCore.importMnemonic({ name: 'bad', words: 'one two three', kind: 'multi', passcode: PASSCODE }), 'INVALID');
    return '4 chains match';
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
