import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from "node:path";

// .../data/
const dataDir = join(process.cwd(), "data");
await mkdir(dataDir);

const file  = join(dataDir, "notes.txt");
await writeFile(file, "Hello World\n");
await writeFile(file, "Hello World Again", { flag: "a" });

// https://en.wikipedia.org/wiki/UTF-8
const text = await readFile(file, "utf-8");
console.log(text);

console.log(await readdir(dataDir));
