// Typed data that repeats a key is never signed for a dApp (docs/SPEC.md §7.17, build after 23; security review
// 24 Nov 2026). JSON readers disagree on a repeated key: JavaScript (the app's review screen and checks) keeps the
// LAST copy, Apple's reader (the iPhone signer, which signs the JSON it wrote back) keeps the FIRST. So
// `"spender": A, "spender": B` could be shown as B and signed as A. A real dApp never repeats a key.
// signDappTypedData (Swift and Kotlin) scans the text before parsing it; this file is the reference those copies
// are tested against, and the app has the same refusal (app src/features/dapp/typedJson.ts).

/** True when any object in the JSON text has the same key twice. Keys are compared after decoding escapes
 *  ("name" and "name" are one key), unit by unit in UTF-16, as the Swift and Kotlin copies do. */
export function jsonRepeatsKey(text: string): boolean {
  const stack: { keys: Set<string> | null; wantKey: boolean }[] = [];
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '{') stack.push({ keys: new Set(), wantKey: true });
    else if (ch === '[') stack.push({ keys: null, wantKey: false });
    else if (ch === '}' || ch === ']') stack.pop();
    else if (ch === ',') {
      const top = stack[stack.length - 1];
      if (top?.keys) top.wantKey = true;
    } else if (ch === ':') {
      const top = stack[stack.length - 1];
      if (top) top.wantKey = false;
    } else if (ch === '"') {
      let key = '';
      let j = i + 1;
      while (j < text.length && text[j] !== '"') {
        if (text[j] === '\\' && j + 1 < text.length) {
          const e = text[j + 1]!;
          if (e === 'u') {
            const v = parseInt(text.slice(j + 2, j + 6), 16);
            if (!Number.isNaN(v)) key += String.fromCharCode(v);
            j += 6;
          } else {
            key += ({ n: '\n', t: '\t', r: '\r', b: '\b', f: '\f' } as Record<string, string>)[e] ?? e;
            j += 2;
          }
        } else key += text[j++];
      }
      const top = stack[stack.length - 1];
      if (top?.keys && top.wantKey) {
        if (top.keys.has(key)) return true;
        top.keys.add(key);
      }
      i = j;
    }
    i++;
  }
  return false;
}

/** Typed data the on-device self-test sends through signDappTypedData: each repeats one key and must be refused. */
export const REPEATED_KEY_SAMPLES: { what: string; typedData: string }[] = [
  {
    what: 'domain name written twice (Hyperliquid first, which Apple reads)',
    typedData: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"chainId","type":"uint256"}],"Mail":[{"name":"text","type":"string"}]},"primaryType":"Mail","domain":{"name":"HyperliquidSignTransaction","name":"Mail app","chainId":1},"message":{"text":"hi"}}',
  },
  {
    what: 'a Permit with two spenders',
    typedData: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"}],"Permit":[{"name":"owner","type":"address"},{"name":"spender","type":"address"},{"name":"value","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"deadline","type":"uint256"}]},"primaryType":"Permit","domain":{"name":"USD Coin","version":"2","chainId":1,"verifyingContract":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},"message":{"owner":"0x9858EfFD232B4033E47d90003D41EC34EcaEda94","spender":"0x000000000000000000000000000000000000dEaD","spender":"0x000000000000000000000000000000000000bEEF","value":"5000000","nonce":"0","deadline":"1763985600"}}',
  },
  {
    what: 'primaryType written twice',
    typedData: '{"types":{"EIP712Domain":[{"name":"chainId","type":"uint256"}],"Mail":[{"name":"text","type":"string"}]},"primaryType":"HyperliquidTransaction:Withdraw","primaryType":"Mail","domain":{"chainId":1},"message":{"text":"hi"}}',
  },
  {
    what: 'a repeated key spelled with an escape',
    typedData: '{"types":{"EIP712Domain":[{"name":"chainId","type":"uint256"}],"Mail":[{"name":"text","type":"string"}]},"primaryType":"Mail","domain":{"chainId":1,"ch\\u0061inId":1337},"message":{"text":"hi"}}',
  },
];
