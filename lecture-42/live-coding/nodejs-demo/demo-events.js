import { EventEmitter } from "node:events";

const bus = new EventEmitter();
bus.on("processed", (fileName) => {
    console.log(`Processing: ${fileName}`);
});

bus.emit("processed", "notes.txt");