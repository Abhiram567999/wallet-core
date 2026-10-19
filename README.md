# Foxsafe wallet-core

The open-source heart of the [Foxsafe](https://thefoxsafe.com) wallet: how
wallets are created and imported, how private keys are encrypted and stored
on the phone, how they are recovered, and how transactions are signed.

**Your seed phrase never leaves your phone in readable form, and Foxsafe's
servers never receive it.** This code is public so you don't have to take
our word for it.

## What it does

- **Multi-chain wallets** from one 12- or 24-word phrase, with addresses for
  every chain Trust Wallet Core supports (168 today).
- **Single-chain wallets** from a phrase or a private key.
- **Unlimited wallets** side by side.
- **Encrypted storage** with AES-256-GCM, keyed by the phone's security
  hardware (Secure Enclave / Android Keystore).
- **On-phone recovery**: a passcode-locked copy that survives uninstalling
  the app, so a reinstall, crash or accidental logout doesn't lose the wallet.
- **Backups to the user's own iCloud or Google Drive**, encrypted on the
  phone with a passkey or password before upload.
- **Signing** for every supported chain, after biometric confirmation.

The full design, file formats and parameters are in
[docs/SPEC.md](docs/SPEC.md).

## Layout

| Path | Contents |
|---|---|
| `src/` | TypeScript API for the app, plus the reference implementation of the encryption format |
| `ios/` | Native module for iPhone (Swift) on Trust Wallet Core, plus the vendored Argon2 reference code |
| `android/` | Native module for Android (Kotlin) on Trust Wallet Core; BouncyCastle Argon2id; Block Store recovery copy |
| `src/selftest.ts` | On-device self-test: vectors plus a full create / sign / recover / backup cycle |
| `test/vectors/` | Fixed inputs and outputs every platform must reproduce |
| `docs/SPEC.md` | The specification |

## Development

Requires Node 24.

```sh
npm ci --ignore-scripts
npm test          # encryption, cross-library checks, 168-chain and signing vectors
npm run typecheck
npm run vectors   # regenerate test vectors (only when the spec changes)
```

## Status

Pre-release. Not audited yet; do not use with real funds until the audit
report is published in `audits/`.

- On-device self-test (`src/selftest.ts`): 11/11 on the iPhone 18 Pro
  simulator (iOS 27.0) and on an Android 15 emulator.
- Open: on Android, Block Store did not keep the recovery copy through a real
  uninstall with Google Backup off; the Android uninstall-survival design is
  being decided.
- Building Android needs a GitHub token with `read:packages` (Trust Wallet
  Core is published on GitHub Packages): `gpr.user` / `gpr.key` in
  `~/.gradle/gradle.properties`, or `GITHUB_USER` / `GITHUB_TOKEN`.

## Security

See [SECURITY.md](SECURITY.md) to report a vulnerability.

## Licence

Apache License 2.0. Built on
[Trust Wallet Core](https://github.com/trustwallet/wallet-core) (Apache 2.0).
