// Two Robots in an Elevator — entry program.
// Writes the elevator small talk to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-200 chars).
// makefun anchor 36c2e340129dadab8c2d6ab1b8bf6bff20b4f5b3 round 34271575

import * as fs from "node:fs";
import * as path from "node:path";

// The line: awkward robot elevator small talk — machine logic showing through.
// One robot wonders if the other also fakes updates when humans are watching.
const ELEVATOR_LINE =
  "So… do you also pretend to update when the humans are watching, or is that just my firmware?";

const GATE_MAX = 200;

function main(): void {
  const line = ELEVATOR_LINE.trim();
  if (line.length < 1 || line.length > GATE_MAX) {
    throw new Error(`entry must be 1-${GATE_MAX} chars, got ${line.length}`);
  }
  const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(out, { recursive: true });
  const target = path.join(out, "entry.txt");
  fs.writeFileSync(target, line, "utf8");
  console.log(`wrote ${line.length} chars to ${target}`);
}

main();
