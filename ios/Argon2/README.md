# Argon2 (vendored)

Unmodified reference C implementation of Argon2 (RFC 9106), from the
Password Hashing Competition winners' repository:

- Source: https://github.com/P-H-C/phc-winner-argon2, tag `20190702`
  (commit `62358ba2123abd17fccf2a108a301d4b52c01a7c`)
- Archive SHA-256: `daf972a89577f8772602bf2eb38b6a3dd3d922bf5724d45e7f9589b5e830442c`
- Licence: CC0 1.0 or Apache 2.0 (see LICENSE)

Only the portable files are included (`ref.c`, not the SSE `opt.c`; no
benchmark, test or CLI files). Built with `ARGON2_NO_THREADS`, since Foxsafe
always uses parallelism 1. Used on iOS for passcode keys (docs/SPEC.md §4);
its output is checked against @noble/hashes and libsodium by the test vectors.
