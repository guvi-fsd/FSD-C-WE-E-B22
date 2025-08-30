import { createHash, randomBytes } from "node:crypto";

// https://miro.medium.com/v2/1*PkHLh296lpvyEyJ2KPxdSw.png
// https://nodejs.org/api/crypto.html

const nonce = randomBytes(8).toString("hex");
const hash = createHash("sha256").digest("hex");
console.log({ nonce, hash});