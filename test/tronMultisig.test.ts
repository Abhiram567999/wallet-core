// TRON multisig transactions (SPEC §7.8): Foxsafe's builder must give exactly the bytes a TRON
// node builds for the same permission setup, TRX send and USDT send (vectors/tron-multisig.json).
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { readTronMultisigRaw, tronMultisigRaw, tronTxId, type TronMultisigAction } from '../src/tronMultisig.ts';

const v = JSON.parse(readFileSync(new URL('./vectors/tron-multisig.json', import.meta.url), 'utf8'));

test('TRON multisig: our raw transactions equal the TRON node, and the txID is their SHA-256', () => {
  for (const c of v.cases) {
    const a = { ...c.action, ...(c.action.amount ? { amount: BigInt(c.action.amount) } : {}) } as TronMultisigAction;
    const raw = tronMultisigRaw(a, c.permissionId, c.ref, c.feeLimit);
    assert.equal(raw, c.rawDataHex, c.action.type);
    assert.equal(tronTxId(raw), c.txID, c.action.type);
  }
});

test('TRON multisig: reading a transaction back gives what was built', () => {
  for (const c of v.cases) {
    const r = readTronMultisigRaw(c.rawDataHex);
    assert.equal(r.account, c.action.owner);
    assert.equal(r.permissionId, c.permissionId);
    assert.equal(r.action.type, c.action.type);
    if (r.action.type !== 'setup' && r.action.type !== 'other') {
      assert.equal(r.action.to, c.action.to);
      assert.equal(r.action.amount, BigInt(c.action.amount));
    }
    if (r.action.type === 'token') assert.equal(r.action.token, c.action.token);
  }
});
