import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The museum label for a television remote control, as catalogued in 3000.
const LABEL =
  "Sacred wand. Pointed at the glowing wall, its runes summoned moving pictures; the largest rune, marked POWER, woke the god within.";

const destination = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function checkLabel(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error("label must be between 1 and 200 characters long");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("label must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("label must not start or end with whitespace");
  }
}

checkLabel(LABEL);

mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, LABEL, "utf8");
