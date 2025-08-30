// What will this program do?
// - Reads two values from the command line: --name and --city
// - Write the data to a data/ folder
// - node index.js --name Mohan --city Saravanan

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { join } from "node:path";


function parseArgs(argv) {
    let args = {};
    for(let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if(a === "--name") {
            args.name = argv[++i];
        } else if(a === "--city") {
            args.city = argv[++i];
        }
    }
    return args;
}

/**
 * The main function will handle reading/writing files
 */
async function main() {
    const { name, city } = parseArgs(process.argv);

    // Validate inputs
    try {
        if(name !== "string" || name.trim() === "") {
            throw new Error("Name is invalid");
        }
        if(city !== "string" || city.trim() === "") {
            throw new Error("City is invalid");
        }
    } catch(error) {
        console.error("Command usage was incorrect");
    }

    const dataDir = join(process.cwd(), "data");

    // recursive: true -> create the dir if it's missing
    await mkdir(dataDir, { recursive: true });

    const jsonFile = join(dataDir, "students.json");

    let list = [];
    try {
        const txt = await readFile(jsonFile, "utf-8");
        const parsed = JSON.parse(txt);
        if(Array.isArray(parsed)) {
            list = parsed;
        } else {
            throw new Error("students.json must contain an array");
        }
    } catch(err) {
        console.error("Error reading file");
    }

    const student = { name, city, createdAt: new Date() };
    list.push(student);

    const json = JSON.stringify(list, null, 2);
    await writeFile(jsonFile, json, "utf-8");

    console.log(`Added ${name} in city ${city}`);
}


main();


// node index.js --name "Logeshwaran" --city "Mumbai"

// '2025-08-24T15:41:05.258Z'
// 'YYYY-MM-DDTHH:MM:SS.MMMZ'