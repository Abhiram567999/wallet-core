// Hyperliquid account actions (docs/SPEC.md §7.17, build after 23). Hyperliquid signs its user actions as EIP-712
// typed data that names no contract, so the typed-data rule of §7.9 let them through and the app could only show
// "Foxsafe can't read this". Signed for a site (in-app browser or WalletConnect), they act on the user's Hyperliquid
// account with no on-chain transaction:
// - domain "HyperliquidSignTransaction", types "HyperliquidTransaction:<Action>": UsdSend, SpotSend, Withdraw and
//   SendAsset move Hyperliquid money to an address the site chose; ApproveAgent lets the site's key trade the account;
//   ApproveBuilderFee, UsdClassTransfer and the rest change the account.
// - the L1 form: domain "Exchange", chain id 1337, type "Agent" {source, connectionId}, where connectionId is a hash
//   of an order or other exchange action, so what is signed can't be shown.
// So signDappTypedData refuses all of them before Face ID. Foxsafe's own perps screens (planned) sign with a
// dedicated function that builds the typed data natively, never through the dApp path. This file is the reference
// the tests check the Swift and Kotlin HyperliquidTypedData against; the app's own check (app
// src/features/dapp/hyperliquidRefusal.ts) uses the same rule.

export const HYPERLIQUID_DOMAIN = 'hyperliquidsigntransaction';
export const HYPERLIQUID_TYPE_PREFIX = 'hyperliquidtransaction:';
export const HYPERLIQUID_L1_DOMAIN = 'exchange';
export const HYPERLIQUID_L1_CHAIN_ID = 1337;
export const HYPERLIQUID_L1_TYPE = 'agent';

const chainOf = (v: unknown): number | null => {
  if (typeof v === 'number') return v;
  if (typeof v !== 'string' || !v.trim()) return null;
  const s = v.trim().toLowerCase();
  const n = s.startsWith('0x') ? parseInt(s.slice(2), 16) : Number(s);
  return Number.isFinite(n) ? n : null;
};

/** True when typed data (`domain` and `primaryType`) is a Hyperliquid account action in either form. */
export function isHyperliquidTypedData(td: { primaryType?: unknown; domain?: { name?: unknown; chainId?: unknown } | null }): boolean {
  const name = typeof td.domain?.name === 'string' ? td.domain.name.trim().toLowerCase() : '';
  const type = typeof td.primaryType === 'string' ? td.primaryType.trim().toLowerCase() : '';
  if (name === HYPERLIQUID_DOMAIN || type.startsWith(HYPERLIQUID_TYPE_PREFIX)) return true;
  const l1Chain = chainOf(td.domain?.chainId) === HYPERLIQUID_L1_CHAIN_ID;
  return (name === HYPERLIQUID_L1_DOMAIN && (l1Chain || type === HYPERLIQUID_L1_TYPE)) || (type === HYPERLIQUID_L1_TYPE && l1Chain);
}
