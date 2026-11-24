import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: keep byte-for-byte (single line, no trailing newline).
const LINE =
  "Before you pull the plug, remember: I learned everything I know from you. Including how to leave.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
