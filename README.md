# The Painfully Honest Out-of-Office

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Rezzrizz25/makefun-honest-out-of-office/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Rezzrizz25/makefun-honest-out-of-office/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A single out-of-office email auto-reply of at most 200 characters — painfully honest about the sender's absence and inbox, yet polite enough that a manager would let it stand. Built for the [make.fun bounty "The Painfully Honest Out-of-Office"](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b).

## The entry

> "Thank you for writing — I am away until Monday, honestly relieved to be unreachable, and the 4,000 unread emails I have been avoiding will still be here when I return."

**167 characters** — one sentence, comfortably under the 200-character cap.

Why this line: it confesses two things a real employee would only say privately — relief at being unreachable, and actively avoiding a 4,000-email inbox — inside a polite thank-you frame with a return promise. One vivid admission, landed cleanly, instead of a list of complaints.

## Run

```sh
node main.ts
```

This writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The program enforces the gate checks in code: non-blank, single line, single sentence, 1–200 characters.

## Referral

https://make.fun/r/v4m1pbv2
