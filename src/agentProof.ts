// AI agent connect proof (docs/SPEC.md §7.14, build 23). The phone proves to Foxsafe's server that it owns the
// addresses an AI agent connects to by signing this exact text, which the native signAgentProof builds itself
// (the app passes only the pairing id). This file is the reference the tests and the self-test check the native
// text against; it must stay equal to foxsafe-server src/agents/proof.ts → proofMessage and to the Swift and
// Kotlin AgentProof.

export const AGENT_PROOF_SITE = 'mcp.thefoxsafe.com';
/** Lowercase. The dApp message signers refuse any text containing it, in any case (SPEC §7.9). */
export const AGENT_PROOF_MARKER = 'connect an ai agent to this wallet';
const PAIRING_ID = /^pr_[A-Za-z0-9_-]{22}$/;

/** The exact text signed for `address` (as the native code derives it) and the pairing id. */
export function agentProofText(pairingId: string, address: string): string {
  return [
    'Foxsafe: connect an AI agent to this wallet.',
    '',
    `Address: ${address}`,
    `Code: ${pairingId}`,
    `Site: ${AGENT_PROOF_SITE}`,
    '',
    'Signing this is free and moves no money.',
  ].join('\n');
}

/** "pr_" and 22 of A–Z a–z 0–9 _ - (JavaScript's "$" without the m flag matches only at the very end). */
export const isAgentPairingId = (s: string) => PAIRING_ID.test(s);

/** True when a dApp message would be refused as an agent proof. */
export const isAgentProofText = (text: string) => text.toLowerCase().includes(AGENT_PROOF_MARKER);
