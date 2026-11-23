// XMTP chat sign-in texts (docs/SPEC.md §7.15, build 23). XMTP (the chat network Family, the Base app and
// Coinbase Wallet use) ties a chat identity to an Ethereum address with a readable text the wallet signs:
// "XMTP : Authenticate to inbox …" plus lines such as "- Grant messaging access to app (ID: <device key>)".
// A site that gets that text signed adds ITS device to the user's chat identity: it then reads the messages
// sent to the user's address and writes as them. So the dApp message signers (in-app browser, WalletConnect)
// refuse every XMTP identity text, in any case and anywhere in the message. Foxsafe Chat signs its own
// sign-in with a separate signer (planned with the chat-only key), never through the dApp path.
//
// Templates checked against libxmtp's source (crates/xmtp_id/src/associations/unsigned_actions.rs, main at
// c038bd4, 19 Nov 2026): header "XMTP : Authenticate to inbox", footer "For more info:
// https://xmtp.org/signatures", actions Create inbox / Link address to inbox / Grant messaging access to app /
// Link passkey to inbox / Unlink address from inbox / Revoke messaging access from app / Unlink passkey from
// inbox / Change inbox recovery address / Claim handle. XMTP V2's old texts ("XMTP : Create Identity",
// "XMTP : Enable Identity") are refused too. This file is the reference the tests and the self-test check the
// Swift and Kotlin XmtpIdentity against.

/** Lowercase. A dApp message containing any of these, in any case, is refused before Face ID. */
export const XMTP_IDENTITY_MARKERS = [
  'xmtp : authenticate to inbox',
  'xmtp.org/signatures',
  'xmtp : create identity',
  'xmtp : enable identity',
] as const;

/** True when a dApp message would be refused as an XMTP chat sign-in. */
export const isXmtpIdentityText = (text: string) => {
  const low = text.toLowerCase();
  return XMTP_IDENTITY_MARKERS.some((m) => low.includes(m));
};
