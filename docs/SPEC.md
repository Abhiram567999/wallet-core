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

### 3.4 Backup password and the backup file

Decision 2026-10-24: backups off the phone (cloud and the Android file) are
locked with a **backup password** the user creates, separate from the app
passcode. Foxsafe never sees it; a forgotten backup password cannot be
recovered by anyone.

- `setBackupPassword(password, passcode)`: at least 8 characters. Derives
  `K = Argon2id(password, fresh 16-byte salt, default m/t)` and stores, in the
  main copy (item `backup`, so it is gone after a reinstall or logout):
  `{ v: 1, salt, m, t, key }` where `key` is a `recovery`-kind envelope of the
  32 bytes of K, locked with the app passcode (recovery `meta` salt).
  `changePasscode` re-locks it with the new passcode.
- `buildBackup(passcode)`: opens K and every wallet's recovery entry with the
  passcode (one Argon2id run, no Face ID) and seals a `backup` envelope of all
  wallets with K. Its header names `argon2id` with the backup password's salt
  and parameters, so it opens with the password alone. Current wallet and
  account names are used.
- Android keeps the newest file at `Download/Foxsafe/foxsafe-backup.json`
  (MediaStore; survives uninstalling). The new copy is written in full under a
  temporary name before the older copy is removed. After a reinstall the user
  picks the file in the system file picker. iOS: the user saves the file with
  the share sheet (Files, iCloud Drive, AirDrop); the Keychain recovery copy
  (3.2) already survives uninstalling there.
- Restoring is `importBackup(file, { type: "password", password }, passcode)`.

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

### 7.1 Bitcoin family

A Bitcoin transaction spends earlier outputs (UTXOs), and every input needs
its own signature, so steps 3–5 don't fit. For coins whose blockchain is
Bitcoin or Bitcoin Cash (BTC, LTC, DOGE, BCH), the native module instead:

1. parses the `Bitcoin.Proto.SigningInput` the app built with
   `bitcoinTransferInput` (`src/tx.ts`): recipient, amount, fee rate in
   sat/vB, UTXOs, and whether to send the maximum,
2. **sets the change address to the wallet's own address** and every input's
   locking script to that address's script, whatever the app sent, so the
   app layer can't redirect the change (the user only sees and confirms the
   recipient and the amount),
3. adds the key and signs with Trust Wallet Core's Bitcoin signer
   (`AnySigner`), then removes the key from the input,
4. returns the `Bitcoin.Proto.SigningOutput` (`bitcoinOutput` reads the raw
   transaction and its id).

Inputs use sequence `0xfffffffd`, so a stuck transaction can later be
replaced with a higher fee (RBF). `test/vectors/bitcoin.json` deliberately
names a wrong change address; the signed transaction must match byte for
byte, paying the change to the wallet's own address.

### 7.2 Gasless TRON batches (one Face ID)

`signTransactions(id, coin, inputs)` signs a TRON transaction plus Foxsafe's
network-fee extras after ONE Face ID. Checked natively before the prompt
(shape) and after it (sender), so a changed app can't widen it:

1. 1–4 inputs, TRON only when there is more than one.
2. Every input after the first is either
   - **the fee transfer**: USDT (`TR7NHq…Lj6t`) to Foxsafe's fee wallet
     (`TRmToSto…yEVJ`, compiled in), more than 0 and at most 5 USDT; at most one, or
   - **an energy payment** (builds with `signsTronEnergyPayments`): plain TRX,
     more than 0 and at most 0.5 TRX, no note; at most two. Foxsafe's server
     first sends the wallet that TRX, then the payment buys energy + bandwidth
     from a "send TRX, get energy" seller for the transfer that follows
     (founder, 14 Nov 2026).
3. Every extra input is sent from this wallet.

Worst case for the extras with a fully compromised app and server: 5 USDT to
Foxsafe's own fee wallet and 2 × 0.5 TRX to anyone. The first transaction is
the user's own send and is not limited here (see §7.12).

Every TRON input is rebuilt from its `transaction` before it is checked and
signed, and an input carrying `raw_json` is refused: Trust Wallet Core signs
`raw_json` instead of `transaction` when both are present, so a rule reading
`transaction` could otherwise be shown a small decoy (§7.12).

### 7.5 Cosmos family (THORChain, Cosmos Hub, Osmosis, Injective …)

Cosmos transactions are signed in Protobuf mode, and Trust Wallet Core's
pre-image step needs the signer's public key inside the `SigningInput`. The
app never holds keys, so these go through their own native function,
`signCosmos(id, coin, input, account?)`, not `signTransaction`. The app
builds the input with `cosmosSendInput` (a plain send; THORChain uses its own
MsgSend with raw 20-byte addresses) or `thorchainDepositInput` (MsgDeposit of
RUNE, for swaps), both in `src/tx.ts`, with no key and no public key. The
native module:

1. refuses unless the coin's blockchain is Cosmos, THORChain or Injective,
   the input is Protobuf mode with an empty public key and private key, and
   it has at least one message, each of them a send or (THORChain only) a
   THORChain send or deposit — checked before Face ID,
2. asks for Face ID ("Confirm the transaction") and derives the coin's key,
3. checks every message is from this wallet: a send's `from_address` equals
   the wallet's address; a THORChain send's `from_address` and a deposit's
   `signer` equal the address's raw bytes. Otherwise: `INVALID: this
   transaction is not from this wallet`,
4. sets `public_key` to the key's public key for the coin and runs steps 3–5
   above, returning the Cosmos `SigningOutput` (base64).

`cosmosOutput` reads `tx_bytes` from the output's `serialized` JSON and the
transaction id (uppercase hex SHA-256 of the bytes). `test/cosmos.test.ts`
runs this path on all 14 supported Cosmos-family chains and must equal Trust
Wallet Core's own signer byte for byte; it also reproduces Trust Wallet
Core's THORChain Protobuf test transaction. Builds without `signCosmos`
(`canSignCosmos()` is false) can show balances and receive, but not send.

### 7.6 XRP, Stellar, Polkadot, NEAR, TON, Aptos, Sui, Cardano

These networks go through `signNetwork(id, coin, input, account?)` (build 12
on). The app builds the input with the builders in `src/tx.ts`
(`xrpPaymentInput`, `stellarPaymentInput`, `polkadotTransferInput`,
`nearTransferInput`, `tonTransferInput`, `aptosTransferInput`,
`suiTransferInput`, `cardanoTransferInput`), with no key and no public key.
The native module:

1. refuses anything but one plain transfer of the network's own coin — on
   XRP a Payment of XRP drops (a memo payment is raw JSON limited to the
   Payment fields, no flags); on Stellar a native payment or create-account;
   on Polkadot a balances transfer; on NEAR one Transfer action; on TON one
   message (plain, or a jetton transfer) with no state-init or custom
   payload, wallet v4R2; on Aptos an APT transfer; on Sui paySui / payAllSui;
   on Cardano a transfer with no plan, staking, extra outputs or metadata —
   checked before Face ID,
2. asks for Face ID and derives the coin's key,
3. checks the sender is this wallet where the chain names one (XRP
   `Account`, Stellar `account`, NEAR `signer_id`, Aptos `sender`, Sui
   `signer`); Polkadot and TON have no sender field (the key itself decides
   the account),
4. fills in what the app can't: the public key (XRP, NEAR and TON need it in
   the pre-image) and, on Cardano, the change address and every input's
   address, forced to the wallet's own (like Bitcoin, §7.1),
5. runs steps 3–5 of §7. TON and Aptos sign the whole message (`data`), like
   Solana; the others sign `dataHash`.

`test/network.test.ts` runs every builder through this path and must equal
Trust Wallet Core's own signer byte for byte. Stellar, Polkadot and Sui also
sign correctly through the older `signTransaction` (no sender check), so the
app may use it on build 11; XRP, NEAR, TON, Aptos and Cardano need build 12.

### 7.7 Safe multi-sig owner signatures, and no open message signing

`signSafe(id, coin, typedData, request, account?)` (build 13 on) signs one EIP-712
`SafeTx` as a Safe owner. `request` is `{safe, chainId}`. Before Face ID the
native module refuses unless:

1. the coin is an EVM network Foxsafe supports for Safe and `chainId` is that
   network's (Ethereum, Base, Arbitrum, Optimism, Polygon, BNB Chain, Avalanche,
   Gnosis; Sepolia and Base Sepolia for tests) and equals `domain.chainId`,
2. the types are exactly Safe's (`EIP712Domain {chainId, verifyingContract}`,
   `SafeTx` with its ten fields in order) and `domain.verifyingContract` is
   `request.safe`,
3. there is no gas refund: `gasPrice` 0, `gasToken` and `refundReceiver` the
   zero address,
4. `operation` is 0 (call), or 1 (delegatecall) only to Safe's official
   `MultiSendCallOnly` (1.4.1 `0x9641…02e2`; 1.3.0 `0x40A2…130D` and
   `0xA1da…102B`), whose batch steps are all calls,
5. no call, also inside a batch, is to the Safe itself with `setGuard`,
   `setModuleGuard`, `enableModule`, `disableModule`, `setFallbackHandler`,
   `changeMasterCopy` or `setup` (the ways to take a Safe over without the
   owners noticing). Owner and threshold changes are allowed; the app shows
   them in red.

It returns `{signature, signer}` with `v` = 27/28, as Safe expects. Whether
the account is really an owner is checked by the app and by the Safe contract
itself. `test/vectors/safe.json` (made with viem by
`app/scripts/make-safe-vector.mjs`) holds signatures the native signer must
reproduce and tampered requests it must refuse; `test/safe.test.ts` checks
Trust Wallet Core against viem and the self-test checks the native rule.

`signMessage` and `signTypedData` (sign any text or EIP-712 data after one
Face ID) are switched off from the same build: they always refuse and never
open a key. Every signature goes through a function with its own rule
(`signGaslessEvm`, `signSafe`, the dApp ones (§7.9) and `signPolymarket`
(§7.11)).

### 7.8 TRON multisig (account permissions)

Trust Wallet Core's TRON signer has no `Permission_id` and no
`AccountPermissionUpdateContract`, so Foxsafe builds the raw transaction
itself (`src/tronMultisig.ts`, equal byte for byte to a TRON node:
`test/vectors/tron-multisig.json`) and signs it with
`signTronMultisig(id, rawDataHex, request, account?)` (build 13 on). The
signature is over SHA-256 of `Transaction.raw` (the txID); each owner signs
the same bytes. `request` is `{kind, account, permissionId, owners?, threshold?}`.

Before Face ID the native module parses the protobuf and refuses unless:

1. the raw transaction has only the usual fields (ref block, expiration,
   one contract, timestamp, fee limit), no extra signers, scripts or memo,
   and no field written twice (protobuf keeps the last copy);
2. it expires in the future and at most 24 h (+10 min clock slack) away;
3. the contract's owner is `account`;
4. `kind = "send"`: a TRX `TransferContract`, or a `TriggerSmartContract`
   that is exactly `transfer(to, amount)` on TRON USDT or USDC with fee limit
   ≤ 100 TRX, with `Permission_id` = `permissionId` (2–9, an active
   permission);
5. `kind = "setup"`: an `AccountPermissionUpdateContract` with
   `Permission_id` 0, an owner permission and exactly one active permission
   (id 2), each with exactly `owners` (2–5, weight 1, in order) and
   `threshold`; the active permission's operations allow only TRX transfers
   (1) and contract calls (31), never permission changes (46); no witness.

After Face ID a setup is also refused when this phone's own TRON address is
not one of the owners (it would lock itself out). The network fees (100 TRX
per permission update, 1 TRX per multi-signature transaction, chain
parameters #22 and #23) are paid in TRX by the account. Nothing else changes:
`signTransaction` still can't sign any permission update, and the gasless
fee rule (§7.3/7.4) is unchanged. The self-test builds fresh transactions,
checks each signature recovers to the wallet's TRON address, and checks 12
tampered versions are refused.

### 7.9 dApp signatures (in-app browser and WalletConnect)

Every request from a dApp is signed by one of five functions with a compiled-in
rule (build 16 on). Each takes `request` = `{origin, address, chainId?, txID?}`:
`origin` is the site's host (and port) shown to the user, `address` the
connected account. Before Face ID the native module refuses anything outside
the rule; after Face ID it also refuses if the key's address is not `address`.

| Function | Signs | Refused unless |
|---|---|---|
| `signDappMessage(id, coin, messageHex, request)` | EVM `personal_sign` (EIP-191, exact bytes), TRON message (TronWeb V2 prefix) | the bytes are readable text: valid UTF-8, ≤ 16 KB, no control characters except line breaks and tabs, no bidi overrides or zero-width marks. Hashes, transactions and other binary data are never signed as "messages". A sign-in message (EIP-4361) must name `origin`, `address` and, if it has one, `chainId`. Build 23 on: never text containing "connect an AI agent to this wallet" (§7.14), an XMTP chat sign-in text (§7.15) or "move my eSIMs to this phone" (§7.16), in any case. |
| `signDappTypedData(id, coin, typedData, request)` | EIP-712 (`eth_signTypedData_v4`) | `domain.chainId` equals `chainId`; data naming a `verifyingContract` must name a network; not a `SafeTx` (§7.7 only); not a Permit2 batch of two or more tokens where any amount is ≥ 2^159; not a Seaport `OrderComponents` where no consideration pays the offerer. |
| `signDappEvm(id, coin, input, request)` | EVM transaction (SigningInput without a key, `evmDappInput`) | chain id equals `chainId`; legacy or EIP-1559 only (no user operation, no EIP-7702 authorization, no SetCode mode); a value transfer to an address, or a contract call / deployment; no key inside. |
| `signDappSolana(id, kind, payload, request)` | Solana message (`kind` "message") or whole serialized transaction, legacy or v0 (`kind` "transaction") | message: readable text as above, sign-in domain/address checked, never the AI agent proof text, an XMTP chat sign-in text or the eSIM restore text (build 23 on, §7.14, §7.15, §7.16). Transaction: this account is one of the required signers; no System `Assign` / `AssignWithSeed` of this account; no Token / Token-2022 `SetAuthority` signed by this account. Only our signature slot is filled; nothing is broadcast. |
| `signDappTron(id, rawDataHex, request)` | TRON transaction raw data | exactly one contract of an allowed type (transfers, contract calls, staking, votes; never `AccountPermissionUpdate`), owner = `address`, permission id 0 (multisig is §7.8), no extra signers or scripts, expiry in the future and ≤ 24 h, and `txID` (if given) = sha256(raw). |

Unlimited approvals (`approve`, `setApprovalForAll`, Permit, single Permit2),
contract calls Foxsafe can't decode and other risks that a real dApp may need
are not refused here: the app shows them in plain words with an extra tick
first. `test/vectors/dapp.json` (viem and noble, `app/scripts/make-dapp-vector.mjs`)
holds signatures the native signers must reproduce and requests they must
refuse; `test/dapp.test.ts` checks Trust Wallet Core against them, and the
on-device self-test checks every refusal, including TRON permission changes and
Solana account takeovers built at run time.


### 7.10 Vault payouts (build 19 on)

Foxsafe's network fees collect in the **Vault**: a normal TRON account on the
founder's phone (seed-phrase backed). The server holds no Vault key; it only
prepares refill rounds (swap, provider top-ups, profit) and the founder
approves them on the phone (founder, 14 Nov 2026).

- `FeePolicy` accepts USDT fees to the hardware wallet `TRmToSto…yEVJ` **or**
  the Vault (`VaultPolicy.vault`, compiled in; empty = no Vault).
- `signVaultRound(id, coin, inputs)` signs 1–8 TRON transactions with ONE
  Face ID. Before Face ID: every input is a plain TRX transfer to an address
  on the compiled list (`VaultPolicy.trxReceivers`: the Netts, CatFee and
  TronSave deposit addresses, Foxsafe's top-up wallet and the energy sellers;
  founder, 16 Nov 2026) or a USDT `transfer` to the hardware wallet; no
  notes; all from one sender, and that sender is the compiled Vault address;
  at most 1,000 TRX in the round and at most 1,000 TRX signed in the same UTC
  day (counted when signed, kept beside the recovery copy on iOS and in the
  main store on Android). After Face ID: the key's address must be the Vault.
- The swap (USDT → TRX) is a separate, normal Swap with its own Face ID.

Worst case through `signVaultRound` with a fully compromised app and server:
1,000 TRX a day from the Vault, and only to Foxsafe's own provider accounts and
sellers; USDT can only go to his own hardware wallet. A new deposit address
needs a new build. This limits `signVaultRound` only: the plain
`signTransaction` is not limited for the Vault either (§7.12).

### 7.11 Polymarket (build 20 on)

`signPolymarket(id, coin, typedData, request, account?)` is the only way the
app may sign anything for Polymarket (prediction markets on Polygon). It
signs one EIP-712 message (`eth_signTypedData_v4` JSON; uints as decimal
strings, or JSON whole numbers up to 2^53) and returns
`{signature, signer, prompt}`: `v` = 27/28, `signer` is the wallet's own
address (EOA), `prompt` is what Face ID showed. `request` is
`{kind: 'login' | 'order' | 'batch', depositWallet?, label?}`.

Everything below is checked before Face ID. The wallet's own address comes
from the public addresses stored with it, and after Face ID the key's address
must match it. The coin must be Polygon (966) and every `chainId` 137. Then
the message must be exactly one of these three, or it is refused with
"Polymarket signature refused: …":

1. **login** (Polymarket's CLOB login, Face ID says "Sign in to Polymarket"):
   domain exactly `{name 'ClobAuthDomain', version '1', chainId 137}` (no
   verifyingContract); types exactly `EIP712Domain(name, version, chainId)`
   and `ClobAuth(address address, string timestamp, uint256 nonce, string
   message)` in that order; `message.address` is this wallet's own address;
   `message.message` is "This message attests that I control the given
   wallet"; the timestamp is digits only. A login can't move money; it only
   gets API keys tied to this address.

2. **order** (a Deposit Wallet order, ERC-7739 wrapper, signatureType 3 =
   POLY_1271): primaryType `TypedDataSign`; types exactly
   `EIP712Domain(name, version, chainId, verifyingContract)`,
   `Order(salt, maker, signer, tokenId, makerAmount, takerAmount, side,
   signatureType, timestamp, metadata, builder)` and `TypedDataSign(Order
   contents, string name, string version, uint256 chainId, address
   verifyingContract, bytes32 salt)`, names, types and order exact, nothing
   else. Domain `Polymarket CTF Exchange`, chainId 137, and (version,
   exchange) one of ('3', `0xe333…00Aa`), ('2', `0xE111…996B`), ('2',
   `0xe222…0F59`). The wrapper is `{name 'DepositWallet', version '1',
   chainId 137, salt 0}` and its verifyingContract, the order's maker and its
   signer all equal `request.depositWallet`. signatureType 3, side 0 (buy) or
   1 (sell), both amounts above 0 and at most 10^15 units (one billion
   dollars or shares). `builder` must equal the compiled-in
   `PolymarketPolicy.builderCode`, Foxsafe's builder code
   0x200dd1f35b63047f5e80336dbc8ddffbf617fac25fc9a81ebd3168ca38ac4cb4 (set
   16 Nov 2026; builds before it carry '' and require 32 zero bytes).
   `polymarketBuilderCode()` returns it. Face
   ID's text is computed natively from the amounts (6 decimals both sides):
   buy: "Buy {takerAmount} shares for up to ${makerAmount} ({price}¢ each)";
   sell: "Sell {makerAmount} shares for at least ${takerAmount}". After it
   comes " · " and `request.label` (the app's text, e.g. `Yes · Will X
   happen?`) with control and invisible characters turned into spaces, cut to
   80 characters.

   Why there is no check that the deposit wallet belongs to this wallet
   (CREATE2 address): the Deposit Wallet checks an order's signature against
   its own owner (ERC-1271), so a signature made for someone else's deposit
   wallet is useless. A tampered app could only make this wallet sign orders
   that no exchange accepts.

3. **batch** (a Deposit Wallet batch sent through Polymarket's gasless
   relayer): primaryType `Batch`; types exactly `EIP712Domain(name, version,
   chainId, verifyingContract)`, `Batch(address wallet, uint256 nonce,
   uint256 deadline, Call[] calls)`, `Call(address target, uint256 value,
   bytes data)`. Domain `{name 'DepositWallet', version '1', chainId 137,
   verifyingContract}` with verifyingContract = `message.wallet` =
   `request.depositWallet`. The deadline is at most an hour away. 1 to 20
   calls, every `value` 0, and every call is exactly one of these. Calldata
   is decoded natively, exact length, with no extra bytes except
   redeemPositions' dynamic array:
   - pUSD `0xC011…2DFB` `approve(spender, amount)`, spender one of the
     three exchanges, collateralAdapter `0xAdA1…cE1f`,
     negRiskCollateralAdapter `0xadA2…eAab`, protocolV2Router `0x1212…2600`,
     CollateralOfframp `0x2957…5854`;
   - Conditional Tokens `0x4D97…6045` `setApprovalForAll(operator, bool)`,
     operator one of the v2 exchanges `0xE111…`/`0xe222…`, the two adapters,
     autoRedeemOperator `0xa120…00af`, binaryModule `0x1000…00Ba`,
     negRiskModule `0x2000…8933`;
   - PositionManager `0x006F…9fEF` `setApprovalForAll(operator, bool)`,
     operator protocolV2Router, the v3 exchange or autoRedeemOperator;
   - collateralAdapter or negRiskCollateralAdapter
     `redeemPositions(collateralToken, parentCollectionId, conditionId,
     indexSets[])` with collateralToken pUSD and parentCollectionId 0;
   - protocolV2Router `redeem(bytes31 conditionId, outcomeIndex, amount)`
     with outcomeIndex 0 or 1;
   - pUSD `transfer(recipient, amount)` to this wallet's own address;
   - CollateralOfframp `unwrap(asset, to, amount)` with asset USDC.e
     `0x2791…4174` and `to` this wallet's own address.

   Anything else is refused: other contracts or functions, POL value, calls
   on the deposit wallet itself (e.g. `authorizeSessionSigner`, so no
   session key can be added), perps deposits. Face ID's text comes from
   the calls: "Set up Predictions" (approvals), "Claim winnings" (redeems),
   "Move ${sum} to your Foxsafe wallet" (transfers and unwraps, 6 decimals),
   joined with " · " when mixed. Approvals only let Polymarket's own
   contracts trade or redeem, and money can only leave the deposit wallet
   to this wallet's own address.

What is signed is rebuilt natively from the checked values (types from the
rule, uints as decimal strings, lowercase hex), not the app's JSON, so two
JSON readers can never disagree about what was signed.

`test/vectors/polymarket.json` (made with viem by
`app/scripts/make-polymarket-vector.mjs` from the public test phrase, never
a real key) holds the allowed messages with viem's signatures and the
expected prompts, and 36 tampered requests with the reason each must be
refused for. `test/polymarket.test.ts` checks that Trust Wallet Core's EIP-712
signer hashes the nested `TypedDataSign`→`Order` and the `Call[]` array with
`bytes` exactly like viem, both as sent and in the rebuilt form. It also
checks that the selectors are keccak256 of their signatures, that iOS and
Android carry the same contracts, builder code and refusal reasons, and that
every allowed contract appears in a vector. The on-device self-test runs
every vector through the native code: signatures, prompts and the reason for
each refusal. When the builder code is set, regenerate the vector (the
script reads it from `ios/WalletStore.swift`).

### 7.12 Changes after the security audit of 15 Nov 2026 (build 21 on)

- **TRON raw JSON.** `signTransactions` and `signVaultRound` rebuild every TRON
  input from its `transaction` field and refuse `raw_json` (§7.2, §7.10).
  `test/audit.test.ts` proves the library behaviour this guards against.
- **dApp typed data.** `signDappTypedData` also refuses primary types
  `PackedUserOperation`, `TypedDataSign`, `Batch`, `ClobAuth` and domain names
  `ERC4337`, `DepositWallet`, `ClobAuthDomain`, `Polymarket CTF Exchange`: the
  messages only `signGaslessEvm` and `signPolymarket` may sign.
- **iOS signs the JSON it checked.** Apple's JSON reader keeps the first copy
  of a key written twice; Trust Wallet Core keeps the last. `signGaslessEvm`,
  `signSafe`, `signDappTypedData` and XRP memo payments now sign the JSON
  written back from the checked object, never the app's text. (Android's
  reader keeps the last copy, like the signer.)
- **Backup password.** `setBackupPassword` needs the passcode AND the wallet's
  hardware key (Face ID / fingerprint prompt "Set your backup password") when
  the phone holds a wallet. `buildBackup` still needs only the passcode, so
  the file can be rebuilt after every wallet change; it is sealed with the key
  of the password set under Face ID, and that key never reaches the app.
- **Wrong passcodes.** After 5 wrong tries each further wrong try locks
  passcode checks for 1, 5, 15, then 60 minutes (`PASSCODE: too many wrong
  tries; try again in N min`). A right passcode clears the count. iOS keeps
  the count beside the recovery copy (survives a reinstall); Android in the
  main store. Wrong tries never erase anything.

Still open, by design or waiting for a decision:

- `signTransaction` signs whatever single transaction the app builds, with
  the prompt "Confirm the transaction". The rules in §7.2–7.11 limit what one
  prompt can cover beyond that, and what a dApp can ask for; they do not stop
  a tampered app from asking for a normal send to another address. The
  instant-update signing key must be guarded accordingly.
- `wipe` and `deleteRecovery` need no passcode (the "forgot my passcode,
  start again" path uses them).
- Android: the Keystore key is not StrongBox-backed and the app's settings
  are included in Android backup (§3.1 describes the intended design).


### 7.13 Secure send screen (planned for build 22; branch `secure-send-screen`)

Founder, 16 Nov 2026. Today the user checks the receiver and amount on the Review screen, which
the app's JavaScript draws, and Face ID then says only "Confirm the transaction". JavaScript that
was tampered with (a stolen instant-update key) could show one receiver and have another signed.

From build 22, `signTransactions` (and so `signTransaction`) shows a screen of its own before
Face ID, drawn by the native code and filled only from the SigningInput bytes that will be signed:

- title "Send 50 USDT", the network, the whole receiver address in groups of four with start,
  middle and end marked, and the fee-free extras (USDT fee, TRX energy) signed with the same Face ID;
- the tick "I checked the receiver's address…" and "Slide to send" live on this screen. The app's
  Review screen keeps every detail and ends with one button that opens it;
- anything that is not a plain send of a coin or token (a swap's contract call, an approval, a
  network this screen can't read yet) shows "Not a simple send … Foxsafe can't read what this
  transaction does", never a guess;
- the app can't draw, change or press it, and can't skip it: it is part of signing.

`src/sendSummary.ts` is the reference for what is shown (`sendSummary`, `summaryText`);
`test/sendSummary.test.ts` builds transactions with the app's own builders and reads them back.
The Swift and Kotlin code mirrors it and the on-device self-test runs the same cases.

Not shown on purpose: the contact's name (app data) and the value in money (server prices).
`canConfirmSends()` tells the app the build has this screen; older builds keep the tick and
slide on Review.


### 7.14 AI agent connect proof (build 23)

When an AI agent connects to a wallet, Foxsafe's server (`mcp.thefoxsafe.com`, foxsafe-server
`src/agents/proof.ts` → `proofMessage`) lets the phone prove it owns the connected addresses by signing
this text, one network family being enough (lines joined with `\n`, no final line break):

```
Foxsafe: connect an AI agent to this wallet.

Address: <the account's address on that network>
Code: <pairing id>
Site: mcp.thefoxsafe.com

Signing this is free and moves no money.
```

A site could ask the user, through the in-app browser or WalletConnect, to sign the same text for an
attacker's pairing. So:

- **Only `signAgentProof(id, coin, pairingId, account?)` signs it.** The native code builds the text from
  the address it derives for that account and `pairingId`; the app never passes text. Before Face ID it
  refuses other networks and any `pairingId` that is not `pr_` + 22 of `A–Z a–z 0–9 _ -` (checked by hand,
  so a final line break can't add a line). One Face ID, "Connect an AI agent". EVM (60 and every EVM coin):
  EIP-191 `personal_sign`; TRON (195): `signMessageV2` (keccak256 of `"\x19TRON Signed Message:\n"` + byte
  length + text); both 0x hex with v = 27/28. Solana (501): ed25519 over the UTF-8 bytes, base58. Returns
  `{address, signature}`; the app sends `address` as returned (its EIP-55 case is part of the text).
  `canSignAgentProof()` tells the app the build has it.
- **The dApp signers refuse it.** `signDappMessage` (EVM, TRON) and `signDappSolana` with kind `"message"`
  refuse, before Face ID, any readable text containing "connect an ai agent to this wallet" (lowercased,
  anywhere in the text): "signature refused: this text can only be signed from Foxsafe's own AI agents
  screen". Typed data and transactions are signed over other bytes (EIP-712 hash, transaction hash,
  TRON txID), and a Solana transaction's message can't be this text (its header would claim 70 signers and
  115 keys), so none of them gives a signature the server accepts.

`src/agentProof.ts` is the reference text. `test/vectors/agent-proof.json`
(`scripts/make-agent-proof-vector.ts`: Trust Wallet Core keys, noble signatures, a made-up pairing id) holds
the text and signature per family for the test phrase, account 0 (Solana on both paths), the refused
dApp messages and bad pairing ids; `test/agent-proof.test.ts` checks Trust Wallet Core's signers against it,
and the on-device self-test signs four proofs (Ethereum, BNB Chain, TRON, Solana; each signature recovers to the
account) and checks every refusal. Apps before build 23 have no `signAgentProof`, and their `signDappMessage` still signs this text.
So build 23 alone does not make a proof trustworthy: a site can still get an older phone to sign exactly this
text (rewording it would not help, the old signer signs any readable text). The proof stays an abuse check that
grants nothing until builds before 23 can no longer use the app at all (a forced minimum version), or until the
grant also needs something an older build cannot produce.

### 7.15 XMTP chat sign-in texts (build 23)

XMTP (the chat network Family, the Base app and Coinbase Wallet use, and Foxsafe Chat's planned base) ties a
chat identity ("inbox") to an Ethereum address with a readable text the address signs with EIP-191
`personal_sign`. libxmtp builds it as (crates/xmtp_id/src/associations/unsigned_actions.rs):

```
XMTP : Authenticate to inbox

Inbox ID: <inbox id>
Current time: <RFC 3339>

- Create inbox / Link address to inbox / Grant messaging access to app / Link passkey to inbox /
  Unlink address from inbox / Revoke messaging access from app / Unlink passkey from inbox /
  Change inbox recovery address / Claim handle
  (<Owner|Address|ID|Passkey|Handle>: <value>)

For more info: https://xmtp.org/signatures
```

A site that gets this signed for the user's address (in-app browser or WalletConnect) adds its own device
("Grant messaging access to app") to the user's chat identity, or creates one: it then receives the messages
other XMTP apps send to that address and writes as the user. So `signDappMessage` (EVM, TRON) and
`signDappSolana` with kind `"message"` refuse, before Face ID, any readable text containing (lowercased,
anywhere) "xmtp : authenticate to inbox", "xmtp.org/signatures", or XMTP V2's old "xmtp : create identity" /
"xmtp : enable identity": "signature refused: this is an XMTP chat sign-in, and signing it would let the site
read and send your chat messages. Foxsafe never signs it for a site". XMTP checks the exact bytes it built, so a
reworded text gives a signature XMTP rejects. Typed data and transactions sign other bytes.

Cost: a Foxsafe wallet can't sign in to another XMTP web app through the browser or WalletConnect. Foxsafe
Chat signs its own sign-in with a separate signer (planned with the chat-only key), never through the dApp path.
Apps before build 23 still sign these texts, so this protects only phones that have updated: a site can still get an older phone to sign one (as with §7.14). What removes it for chat is Foxsafe Chat's chat-only key (planned): the money key then never needs to sign an XMTP text at all.

`src/xmtpIdentity.ts` is the reference marker list. `test/vectors/xmtp-identity.json` holds libxmtp's own test
texts, the attack shape (add a device), case and place variants, the V2 texts and allowed texts;
`test/xmtp-identity.test.ts` checks the list, that the Swift and Kotlin copies match it and that
`src/xmtpIdentityTexts.ts` holds the same texts; the on-device self-test sends every one of them through the EVM,
TRON and Solana dApp signers.

### 7.16 eSIM restore proof (build 23)

eSIMs bought in Foxsafe belong to the phone that bought them (the server keeps only the SHA-256 of that phone's
eSIM key). After a lost phone, the new phone moves them over by proving it holds the wallet that paid. Foxsafe's
server (`api.thefoxsafe.com`, foxsafe-server `src/esim/restore.ts` → `restoreText`) gives the new phone a one-time
code and checks this text, signed per network family (lines joined with `\n`, no final line break):

```
Foxsafe: move my eSIMs to this phone.

Address: <the account's address on that network>
Phone: <SHA-256 hex of the new phone's eSIM key>
Code: <one-time code>
Site: api.thefoxsafe.com

Signing this is free and moves no money.
```

A site could ask the user, through the in-app browser or WalletConnect, to sign the same text for an attacker's
code and phone, and the server would then move the user's eSIMs (and their install codes) to the attacker. So:

- **Only `signEsimRestore(id, code, phone, account?)` signs it.** The native code builds the text from the
  addresses it derives for that account; the app passes only `code` and `phone`. Before Face ID it refuses any
  `code` that is not `er_` + 22 of `A–Z a–z 0–9 _ -` and any `phone` that is not 64 lowercase hex (both checked by
  hand, so a final line break can't add a line). One Face ID, "Move eSIMs to this phone", signs every family the
  wallet has: a phrase wallet EVM (coin 60, the same address on every EVM network), TRON (195) and Solana (501, the
  wallet's own Solana path); a private-key wallet only its own family. Signatures as in §7.14 (EIP-191 / TRON
  `signMessageV2`, 0x hex with v = 27/28; Solana ed25519 over the UTF-8 bytes, base58). Returns
  `[{coin, address, signature}]`; the app sends each `address` as returned. `canSignEsimRestore()` tells the app the
  build has it.
- **The dApp signers refuse it.** `signDappMessage` (EVM, TRON) and `signDappSolana` with kind `"message"` refuse,
  before Face ID, any readable text containing "move my esims to this phone" (lowercased, anywhere in the text):
  "signature refused: this text can only be signed from Foxsafe's own eSIM screen". Typed data and transactions
  are signed over other bytes, as in §7.14.

`src/esimRestore.ts` is the reference text. `test/vectors/esim-restore.json` (`scripts/make-esim-restore-vector.ts`:
Trust Wallet Core keys, noble signatures, a made-up code and phone) holds the text and signature per family for the
test phrase, account 0 (Solana on both paths), the refused dApp messages and bad codes and phones;
`test/esim-restore.test.ts` checks Trust Wallet Core's signers against it, and the on-device self-test signs the
three proofs in one call (each verifies to the account) and checks every refusal. As in §7.14, builds before 23
still sign this text through `signDappMessage`, so the server keeps restore switched off until builds before 23 can
no longer use the app (a forced minimum version).
