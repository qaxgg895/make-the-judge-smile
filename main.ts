// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Writes one line (<= 200 chars) about a small good thing that happened
// today to /output/entry.txt, after validating it in code.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning my neighbour's cat, who has blanked me for two years, marched over and headbutted my ankle like we'd been friends all along.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("line must not contain control characters");
    }
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
