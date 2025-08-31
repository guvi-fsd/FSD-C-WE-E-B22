import express from "express";
import { randomUUID } from "node:crypto";

// Create the express app instance
const app = express();
const PORT = 3000;

/*
    Use the built-in Middleware to parse JSON
    request.body
*/
app.use(express.json());

const notes = [];

/**
 * Route: GET /health
 * Response:
 *  Status: 200 OK
 *  Body: { ok: true, uptime: <seconds since the process started> }
 */
app.get("/health", (req, res) => {
    res
        .status(200)
        .json({ ok: true, uptime: process.uptime() });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

/**
 * GET /notes - list notes
 * Return 200 OK
 */
app.get("/notes", (req, res) => {
    res.status(200).json(notes);
});

/**
 * POST /notes - create a notes
 * - Expects: a JSON body like: { "title": "My first note", "content": "Adding my first note "}
 * - Requires: title
 * - Returns: 
 *  - Status: 201 Created
 *  - Body: { id, title, content, createdAt }
 */
app.post("/notes", (req, res) => {
    const { title, content } = req.body || {};
    // basic validation
    if(typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ error: true, message: "Title is required"} );
    }

    const note = {
        id: randomUUID(),
        title,
        content,
        createdAt: new Date().toISOString()
    };

    notes.push(note);

    res.set("Location", `/notes/${note.id}`);

    return res.status(201).json(note);
});

/**
 * GET /notes/:id - read a single note
 * - If found: 200 with the note
 * - If not: 404 with a message
 * 
 */
app.get("notes/:id", (req, res) => {
    res.status(200).json({ ok: true })
})


// EADDRINUSE - if the port is already taken
// TODO: command to identify the process that is using the port