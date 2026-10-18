// Small, dependency-free encoders. Hermes (React Native) has no Buffer and no
// Uint8Array base64 helpers, so these are written out by hand.

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const B64_INDEX = new Map([...B64].map((c, i) => [c, i]));

export function toBase64(bytes: Uint8Array): string {
  let out = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i]!;
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    out += B64[a >> 2];
    out += B64[((a & 3) << 4) | ((b ?? 0) >> 4)];
    out += b === undefined ? '=' : B64[((b & 15) << 2) | ((c ?? 0) >> 6)];
    out += c === undefined ? '=' : B64[c & 63];
  }
  return out;
}

/** Strict standard base64 with padding. Rejects anything that would not
 * re-encode to the same string, so the header used as AAD is canonical. */
export function fromBase64(text: string): Uint8Array {
  if (text.length % 4 !== 0) throw new TypeError('base64: bad length');
  const pad = text.endsWith('==') ? 2 : text.endsWith('=') ? 1 : 0;
  const out = new Uint8Array((text.length / 4) * 3 - pad);
  let o = 0;
  for (let i = 0; i < text.length; i += 4) {
    const n = [0, 1, 2, 3].map((k) => {
      const ch = text[i + k]!;
      if (ch === '=' && i + 4 === text.length && k >= 4 - pad) return 0;
      const v = B64_INDEX.get(ch);
      if (v === undefined) throw new TypeError('base64: bad character');
      return v;
    }) as [number, number, number, number];
    const triple = (n[0] << 18) | (n[1] << 12) | (n[2] << 6) | n[3];
    if (o < out.length) out[o++] = (triple >> 16) & 255;
    if (o < out.length) out[o++] = (triple >> 8) & 255;
    if (o < out.length) out[o++] = triple & 255;
  }
  if (toBase64(out) !== text) throw new TypeError('base64: not canonical');
  return out;
}

export function toHex(bytes: Uint8Array): string {
  let out = '';
  for (const b of bytes) out += b.toString(16).padStart(2, '0');
  return out;
}

export function utf8(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

export function fromUtf8(bytes: Uint8Array): string {
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}

export function concat(...parts: Uint8Array[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

/** Best-effort wipe of key material held in a typed array. */
export function wipe(...arrays: Uint8Array[]): void {
  for (const a of arrays) a.fill(0);
}
