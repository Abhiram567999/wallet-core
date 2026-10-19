// HD accounts: many accounts from one secret phrase (docs/SPEC.md §2.1).
// Account 0 is always the chain's default path. Other accounts follow the
// conventions of the popular wallets so imported phrases show the same
// accounts:
//   - EVM chains, TRON, Cosmos: the last (address) index counts up
//     (m/44'/60'/0'/0/i, as MetaMask and TokenPocket do)
//   - everything else: the account level counts up (m/84'/0'/i'/0/0 for
//     Bitcoin, m/44'/501'/i' for Solana)
//   - if a chain's default account level is not 0' (Pactus uses it for the
//     address type), the last index counts up instead
// The iOS and Android code implements exactly this; test/vectors/hd.json
// pins it down.

export const LAST_INDEX_BLOCKCHAINS = ['ethereum', 'tron', 'cosmos'] as const;
export const MAX_ACCOUNT_INDEX = 0x7fffffff;

export function accountPath(defaultPath: string, blockchain: string, index: number): string {
  if (!Number.isInteger(index) || index < 0 || index > MAX_ACCOUNT_INDEX) throw new RangeError('bad account index');
  if (index === 0) return defaultPath;
  const parts = defaultPath.split('/');
  if (parts[0] !== 'm' || parts.length < 4) throw new Error(`unexpected path ${defaultPath}`);
  if ((LAST_INDEX_BLOCKCHAINS as readonly string[]).includes(blockchain) || parts[3] !== "0'") {
    const last = parts[parts.length - 1]!;
    parts[parts.length - 1] = last.endsWith("'") ? `${index}'` : `${index}`;
  } else {
    parts[3] = `${index}'`;
  }
  return parts.join('/');
}
