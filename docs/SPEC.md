# Foxsafe wallet-core — key management specification

Version 1 · status: draft for review

This document says exactly how Foxsafe creates, stores, backs up and recovers
wallet secrets. Anyone can check the code in this repository against it.

## 1. Rules

1. A secret (seed phrase or private key) is created on the phone and never
   leaves it in readable form.
2. Foxsafe servers never receive a secret, encrypted or not.
3. Every stored secret is encrypted with AES-256-GCM.
4. Only audited, widely used cryptography libraries are used. No homemade
   cryptography.
5. Secrets are decrypted only for the moment they are needed (signing,
   showing the phrase to its owner) and are not logged, sent to analytics or
   crash reports, or written anywhere in readable form.

## 2. Wallets

| Field | Meaning |
|---|---|
| `id` | Random UUID v4 |
| `name` | Label shown to the user ("Wallet 1") |
| `kind` | `multi` (every chain from one phrase) or `single` (one chain) |
| `coins` | Enabled chains, as Trust Wallet Core `CoinType` numbers (SLIP-44 based: 0 Bitcoin, 60 Ethereum, 195 TRON, 501 Solana …) |
| `secret` | `{ type: "mnemonic", words, passphrase? }` or `{ type: "privateKey", hex, coin }` |

Every new wallet gets its **own** secret phrase. A phrase wallet is one of:

| `kind` | Chains | Accounts |
|---|---|---|
| `single` | starts on the one chain picked; more can be switched on later | one (account 0) |
| `multi` | all supported chains on | one (account 0), so importing the phrase into any other wallet app shows everything |
| `hd` | all supported chains on | many (section 2.1); other apps may show only account 0 until accounts are added there too |

A private key always makes a `single` wallet with exactly one chain (an EVM
key's address is shown on every EVM network). Addresses for all 168 chains
are derived for every phrase wallet, so switching chains on needs no secret.
There is no limit on the number of wallets. A multi-signature wallet type
(Safe) is planned as a separate module.

New phrases are made from 16 or 32 bytes taken from the operating system's
secure random generator (`SecRandomCopyBytes` on iOS, `SecureRandom` on
Android) and turned into words by Trust Wallet Core (`HDWallet(entropy:)`).
The library's own random generator is never used for keys: in 2023 Trust
Wallet Core's WebAssembly build was found to produce weak randomness.

### 2.1 HD accounts

A phrase wallet holds one or more accounts derived from the same phrase
("Account 1", "Account 2" …). The record lists them as
`"accounts": [{ "index": 0, "name": "Account 1" }, …]` (missing means just
account 0). Account 0 always uses each chain's default path. For account
`i > 0` (`src/hd.ts`, mirrored in Swift and Kotlin):

| Chains | Rule | Example (i = 2) |
|---|---|---|
| EVM networks (61), TRON, Cosmos family (32) | last index counts up | `m/44'/60'/0'/0/2` (as MetaMask, TokenPocket) |
| Chains whose default account level isn't `0'` (Pactus) | last index counts up | `m/44'/21888'/3'/2'` |
| All others (Bitcoin family, Solana, TON, Aptos, Sui …) | account level counts up | `m/84'/0'/2'/0/0`, `m/44'/501'/2'/0'` |

`test/vectors/hd.json` pins accounts 1 and 2 for all 168 chains; for the
standard test phrase, Ethereum account 1 is
`0x6Fac4D18c912343BF86fa7049364Dd4E424Ab9C0`, the same as MetaMask.

Account names are public data (stored with the wallet's info, renaming needs
no secret); adding or removing an account re-seals the wallet and its
recovery entry with the current names. Account 0 can't be removed.
Only `hd` wallets can add accounts; private-key wallets have only account 0.
An import may create several accounts at once (`accounts: n` makes
indexes 0 … n-1), so an app can bring back every account it found on the
networks with one Face ID prompt.

### 2.2 Solana path

Wallets disagree on Solana. Phantom, Solflare and Backpack use
`m/44'/501'/i'/0'`; Trust Wallet uses `m/44'/501'/i'`. The same phrase gives
different Solana addresses in each. A phrase wallet's record says which one it
uses:

| `solanaPath` | Account 0 | Account i |
|---|---|---|
| `"phantom"` | `m/44'/501'/0'/0'` | `m/44'/501'/i'/0'` |
| `"trust"` (also when missing) | `m/44'/501'/0'` | `m/44'/501'/i'` |

New wallets are `"phantom"`. Wallets made before this field existed have no
field and stay `"trust"`, so their addresses never change. On import the app
checks both paths on the network and picks the one that was used. Every
other chain is the same for both. `test/vectors/hd.json` pins
`solanaPhantom` for accounts 0-2: account 0 of the standard test phrase is
`HAgk14JpMQLgt6rVgv7cBQFJWFto5Dqxi472uT3DKpqk`, as in Phantom.

A Solana private key can also be imported the way Phantom and Solflare
export it: base58 of the 64-byte secret key (private key + public key, which
must match) or of the 32-byte private key, or the Solana CLI's JSON array of
64 numbers.

## 3. Where secrets live on the phone

There are two independent copies. Either one can bring the wallets back.

### 3.1 Main copy (used every day)

Each wallet's secret is stored as an envelope (section 4, `kind: "device"`,
`kdf.alg = "none"`) encrypted with its **own random 256-bit data key**. The
data key is stored only in wrapped form:

| Platform | Wrapping |
|---|---|
| iOS | Secure Enclave P-256 key (`kSecAttrTokenIDSecureEnclave`, access control `.privateKeyUsage` + `.userPresence`, `WhenUnlockedThisDeviceOnly`), ECIES `eciesEncryptionCofactorVariableIVX963SHA256AESGCM`. Wrapping uses the public half (no prompt); unwrapping happens inside the Secure Enclave and needs Face ID / Touch ID / the device passcode. The simulator has no Secure Enclave, so there the key is an ordinary Keychain key without a prompt (`isHardwareBacked()` returns false). |
| Android | Non-exportable AES-256-GCM key in Android Keystore, StrongBox-backed where the phone has it, `setUserAuthenticationRequired(true)`, unlocked per use through `BiometricPrompt` with a `CryptoObject`. |

Main-copy items live in the Keychain service `app.foxsafe.wallet`
(`WhenUnlockedThisDeviceOnly`): `w.<id>` holds the wallet's public details,
its derived addresses (public), the wrapped data key and the envelope.

### 3.2 On-phone recovery copy (survives uninstalling the app)

Every wallet also gets a recovery entry: an envelope (`kind: "recovery"`)
holding that one wallet, encrypted with a key derived from the user's app
passcode with Argon2id. All entries share one salt (kept in a `meta` item),
so unlocking many wallets costs one Argon2id run, and adding a wallet needs
only the passcode, not Face ID.

| Platform | Storage |
|---|---|
| iOS | Keychain, service `app.foxsafe.recovery`, `kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly`: `meta`, `w.<id>` (envelope) and `i.<id>` (address index) per wallet. Keychain items have survived app deletion on every iOS release so far, but Apple does not promise it. "This device only" items are never copied to iCloud or another phone. |
| Android | Google Block Store with `setShouldBackupToCloud(false)`, same items packed into one JSON map split across up to 16 entries of 4 KB (`foxsafe.recovery.0` … `.15`), room for roughly 30 wallets. **Tested 2026-10-19 (Android 15 emulator, Google Backup off, no Google account): the entry did NOT survive a real uninstall + reinstall.** Google documents survival only when the phone's Google Backup is on. The Android design for surviving an uninstall is therefore open (see README status). |

On the first launch after an install, the app deletes any main copy left in
the Keychain from an earlier install (iOS keeps Keychain items after an
uninstall), so wallets can come back **only** through the recovery copy and
its passcode. It then offers "Recover my wallet"; the user types their old
passcode. If they already set a new passcode, it is needed too, to re-lock the
recovered entries.

The passcode itself is checked against a separate Argon2id verifier (own
salt) in the main Keychain service. Creating, importing or deleting a wallet
and changing the passcode all require it.

What it cannot survive: losing the phone, a factory reset, or moving to a new
phone. For that the user needs a backup (section 3.3).

When the user logs out on purpose, the app asks whether to keep the recovery
copy. If the wallets are not backed up, it warns first.

### 3.3 Backups off the phone (user's own cloud or files)

A backup is an envelope (`kind: "backup"`) created on the phone and saved to
the user's own iCloud Drive or Google Drive. Foxsafe servers never see it.
It is locked by one of:

- **Passkey** (Sign in with Apple / Google): the WebAuthn PRF extension gives
  32 secret bytes from the user's passkey, which Apple and Google sync
  end-to-end encrypted. The AES key is
  `HKDF-SHA256(ikm = prf, salt = kdf.salt, info = "foxsafe-envelope-v1")`.
- **Backup password**: Argon2id, same parameters as the recovery copy.

Manual backup (writing down the phrase) is always available.

## 4. Envelope format v1

UTF-8 JSON:

```json
{
  "format": "foxsafe-envelope",
  "v": 1,
  "kind": "device | recovery | backup",
  "kdf": { "alg": "argon2id", "version": 19, "m": 65536, "t": 3, "p": 1, "salt": "<base64, 16 bytes>" },
  "cipher": "aes-256-gcm",
  "iv": "<base64, 12 bytes>",
  "ct": "<base64, ciphertext followed by the 16-byte tag>"
}
```

`kdf` is one of:

| `alg` | Fields | Key |
|---|---|---|
| `argon2id` | `version` (19 = 0x13), `m` KiB, `t`, `p`, `salt` | `Argon2id(password = UTF-8(passcode), salt, m, t, p, length 32)` |
| `hkdf-sha256` | `salt` | `HKDF-SHA256(ikm, salt, info "foxsafe-envelope-v1", length 32)` |
| `none` | – | the 32-byte key supplied by the platform keystore |

**Associated data.** The header is bound to the ciphertext so that changing
any parameter makes decryption fail. AAD is the UTF-8 string

```
foxsafe-envelope|1|<kind>|<kdf>|<iv>
```

where `<kdf>` is `argon2id|19|<m>|<t>|<p>|<salt>`, `hkdf-sha256|<salt>` or
`none`, numbers in decimal and `salt`/`iv` exactly as written in the JSON
(standard base64 with padding).

**Accepted parameters** (anything else is rejected before any work is done,
so a planted file cannot force a downgrade or exhaust memory):

| Parameter | Allowed |
|---|---|
| `m` | 19 456 – 1 048 576 KiB |
| `t` | 2 – 10 |
| `p` | 1 (keeps every platform's implementation identical and simple) |
| `version` | 19 |
| salt | Argon2id: exactly 16 bytes; HKDF: 16 – 64 bytes |
| iv | 12 bytes, fresh random for every encryption |

Defaults for new envelopes: `m = 65536` (64 MiB), `t = 3`, `p = 1`, 16-byte
salt (RFC 9106 second recommended option, with p = 1).

**Plaintext** is UTF-8 JSON:

```json
{ "v": 1, "wallets": [ { "id": "…", "name": "…", "kind": "multi", "coins": [0, 60, 195, 501], "createdAt": "…", "secret": { "type": "mnemonic", "words": "…" } } ] }
```

`device` and `recovery` envelopes hold exactly one wallet; a `backup`
envelope holds one or more.

## 5. Address index (one per recovery entry)

```json
{ "v": 1, "salt": "<base64, 16 bytes>", "hashes": ["<hex SHA-256(salt ‖ UTF-8(normalised address))>", "…"] }
```

Normalised address: trimmed; lower-cased if it starts with `0x` or if it is
entirely upper- or lower-case (bech32 addresses are case-insensitive);
otherwise unchanged (base58 addresses are case-sensitive).

The index covers the wallet's addresses on these chains (the ones people
remember addresses for), keeping each entry small enough for Android's
64 KB Block Store: Bitcoin 0, Litecoin 2, Dogecoin 3, Ethereum 60 (the same
address on every EVM network), Cosmos 118, XRP 144, Bitcoin Cash 145,
Stellar 148, TRON 195, Polkadot 354, NEAR 397, Solana 501, TON 607, Aptos 637,
Sui 784, Cardano 1815, BNB Smart Chain 20000714.

This lets the app confirm "this phone holds that wallet" from an address the
user remembers. An address can never unlock a wallet: the passcode is still
required. Someone holding the phone who already knows a person's address
could confirm the phone holds it; nothing more is revealed.

## 6. Implementations

| Part | iOS | Android | JavaScript (reference, tests, web) |
|---|---|---|---|
| Wallet maths | Trust Wallet Core (`TrustWalletCore` pod) | Trust Wallet Core (`com.trustwallet:wallet-core`) | `@trustwallet/wallet-core` (WASM) |
| AES-256-GCM | CryptoKit | `javax.crypto` / Android Keystore | `@noble/ciphers` |
| Argon2id | PHC reference implementation, vendored source (`ios/Argon2`) | BouncyCastle `Argon2BytesGenerator` | `@noble/hashes` |
| HKDF / SHA-256 | CryptoKit | BouncyCastle | `@noble/hashes` |

All three must reproduce the test vectors in `test/vectors/`. The JavaScript
implementation in `src/` is the reference; `src/selftest.ts` runs the vectors
and a full create / sign / recover / backup cycle on a device.

## 7. Signing

The app builds a Trust Wallet Core `SigningInput` **without** a private key
and passes it to the native module, which:

1. asks for Face ID / Touch ID / the device passcode (Secure Enclave),
2. decrypts the wallet and derives the key for that chain,
3. gets the pre-image with `TransactionCompiler.preImageHashes`,
4. signs it (the hash; for Solana the whole message, `data`, because
   ed25519 signs messages and Solana's pre-image output has its own layout),
   and
5. returns `TransactionCompiler.compileWithSignatures` output.

The key never reaches JavaScript. `test/vectors/signing.json` (the EIP-155
example transaction) must come out byte for byte on every platform.
