// TRON multisig transactions (SPEC §7.8): Foxsafe's builder must give exactly the bytes a TRON
// node builds for the same permission setup, TRX send and USDT send (vectors/tron-multisig.json).
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { tronMultisigRaw, tronTxId, type TronMultisigAction } from '../src/tronMultisig.ts';

const v = JSON.parse(readFileSync(new URL('./vectors/tron-multisig.json', import.meta.url), 'utf8'));

test('TRON multisig: our raw transactions equal the TRON node, and the txID is their SHA-256', () => {
  for (const c of v.cases) {
    const a = { ...c.action, ...(c.action.amount ? { amount: BigInt(c.action.amount) } : {}) } as TronMultisigAction;
    const raw = tronMultisigRaw(a, c.permissionId, c.ref, c.feeLimit);
    assert.equal(raw, c.rawDataHex, c.action.type);
    assert.equal(tronTxId(raw), c.txID, c.action.type);
  }
});
