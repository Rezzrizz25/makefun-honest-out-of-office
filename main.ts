// The Painfully Honest Out-of-Office
// make.fun bounty: u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// REASONING (v3) — final pass: hardening the gates, keeping the line.
// The v2 line is final: "Thank you for writing — I am away until
// Monday, honestly relieved to be unreachable, and the 4,000 unread
// emails I have been avoiding will still be here when I return."
// (167 chars). One last read-through against the judge's five criteria,
// in order, to be sure nothing else should change:
// 1. Honest AND polite: yes — two private admissions (relief at being
//    unreachable; avoiding the inbox) inside a thank-you frame with a
//    return promise. Neither admission alone would be enough; together
//    they are the most honest thing that still sounds professional.
// 2. Admits something true said only privately: "the 4,000 unread
//    emails I have been avoiding" — a behaviour, not a mood.
// 3. Warm, professional tone: opens with thanks, closes with return;
//    no swearing, no blame, no eye-roll at the sender.
// 4. One sentence, ≤200 chars, no cramming: exactly one sentence,
//    167 chars — 33 chars of headroom, so it reads unhurried.
// 5. Quotable turn of phrase: the sentence pivots on "honestly
//    relieved to be unreachable" — that clause is the line people
//    would quote; the inbox confession is the punchline, not a list.
//
// NEW THINKING in v3 (gates, not the line): the v2 gates checked the
// sealed scorer's rules (non-blank, single line, 1–200 chars) but not
// the judge's "one sentence" requirement, and a stray double space or
// trailing whitespace would silently weaken the entry. So v3 adds:
// - Single-sentence check: exactly one sentence-terminating period,
//   at the very end. The em dash is safe here — it joins clauses
//   without ending a sentence, which is why the line uses "—" rather
//   than a second full stop (a second full stop would make it two
//   sentences and break criterion 4).
// - No leading/trailing whitespace and no double spaces: a trailing
//   space would count toward the 200-char gate and look sloppy on
//   the public feed, where the text shows beside the entrant's handle.
// - Output-path handling made robust: MAKEFUN_OUTPUT_DIR may be a
//   directory (the normal case, e.g. /tmp/out-ooo) or a path ending
//   in entry.txt; both now resolve correctly instead of assuming one.
//
// The entry line (v3, unchanged from v2 — the line earned its keep):
// "Thank you for writing — I am away until Monday, honestly relieved
// to be unreachable, and the 4,000 unread emails I have been avoiding
// will still be here when I return." — 167 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Thank you for writing — I am away until Monday, honestly relieved to be unreachable, and the 4,000 unread emails I have been avoiding will still be here when I return.";

// Gate checks (the sealed scorer requires 1–200 chars, non-blank,
// single line of UTF-8 text; the judge requires a single sentence).
if (!ENTRY.trim()) throw new Error("entry must not be blank");
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.includes("  ")) {
  throw new Error("entry must not contain double spaces");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
// Single sentence: exactly one sentence-terminating period, at the end.
const terminators = (ENTRY.match(/[.!?]/g) ?? []).length;
if (terminators !== 1 || !ENTRY.endsWith(".")) {
  throw new Error(
    `entry must be exactly one sentence, found ${terminators} terminator(s)`,
  );
}

// Output: $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// MAKEFUN_OUTPUT_DIR may name a directory or a path ending in entry.txt.
const outTarget = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const outFile = outTarget.endsWith("entry.txt")
  ? outTarget
  : join(outTarget, "entry.txt");
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-character entry to ${outFile}`);
