// One-Line Office Joke: 24-Hour Sprint
// Writes a single-line joke about office life (at most 200 characters)
// to /output/entry.txt. Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our sprint planning ran so long the sticky notes unionised — they filed a grievance for being moved to 'next sprint' for the third time running.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
