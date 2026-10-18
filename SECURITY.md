# Security policy

This repository holds the part of Foxsafe that creates wallets and protects
private keys. It is public so anyone can check that keys never leave the
phone.

## Reporting a vulnerability

Email **security@thefoxsafe.com** with the details and, if you can, a way to
reproduce it. Please do not open a public issue for security problems.

We reply within 3 working days and keep you updated until it is fixed. We
will credit you in the release notes unless you ask us not to. A paid bug
bounty will be announced before the public launch.

## What is in scope

- Anything in this repository: key creation and import, encrypted storage,
  the on-phone recovery copy, backup envelopes, signing.
- The envelope format and its parameters (docs/SPEC.md).

Out of scope here: the closed-source Foxsafe app, servers and partner
services. Report those to the same address.

## Rules we hold ourselves to

- Secrets (phrases, private keys) never leave the phone in readable form and
  are never sent to any Foxsafe server.
- Every stored secret is encrypted with AES-256-GCM (docs/SPEC.md).
- Only audited libraries: Trust Wallet Core, CryptoKit, libsodium,
  BouncyCastle, @noble.
- No secret, API key or signing key is ever committed to this repository.
  Every push is scanned with gitleaks.
- Dependencies are pinned to exact versions and install scripts are disabled.
- Every change is reviewed before it reaches `main`.
- An independent security audit will be completed before the public launch
  and published in `audits/`.
