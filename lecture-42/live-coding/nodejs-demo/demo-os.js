import os from "node:os";

console.log(os.platform());
console.log(os.cpus());
console.log(os.tmpdir());

setTimeout(() => {
    console.log("tick")
}, 500);