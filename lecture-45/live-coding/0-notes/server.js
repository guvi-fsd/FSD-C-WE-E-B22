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

function findIndexById(id) {
    return notes.findIndex(note => note.id === id);
}

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
app.get("/notes/:id", (req, res) => {
    const { id } = req.params;
    const note = notes.find(note => note.id === id);
    if(!note) {
        return res.status(404).json({ error: true, message: "Note not found" });
    }
    return res.status(200).json(note);
});

/**
 * PUT /notes/:id (replace a note)
 */
app.put("/notes/:id", (req, res) => {
    const idx = findIndexById(req.params.id);
    if(idx === -1) {
        return res
                .status(400)
                .json({ error: true, message: "Note ID is invalid"});
    }

    const { title, content } = req.body;
    if(typeof title !== "string" || typeof content !== "string") {
        return res
                .status(400)
                .json({ error: true, message: "Invalid title or content"});
    }

    const updated = {
        ...notes[idx],
        title,
        content
    };
    notes[idx] = updated;
    return res
            .status(200)
            .json(updated);
});

/**
 * PATCH /notes/:id (Partial update)
 */
app.patch("/notes/:id", (req, res) => {
    const idx = findIndexById(req.params.id);
    if(idx === -1) {
        return res
                .status(400)
                .json({ error: true, message: "Note ID is invalid"});
    }

    const payload = req.body || {};
    const hasTitle = Object.hasOwn(payload, "title");       // true/false
    const hasContent = Object.hasOwn(payload, "content");   // true/false
    if(!hasTitle && !hasContent) {
        return res.status(400).json({ error: true, message: "Invalid title or content"});
    }

    if(hasTitle) {
        if(typeof payload.title !== "string") {
            return res.status(400).json({ error: true, message: "Invalid title"});
        }
        notes[idx].title = payload.title;
    }
    if(hasContent) {
        if(typeof payload.content !== "string") {
            return res.status(400).json({ error: true, message: "Invalid content"});
        }
        notes[idx].content = payload.content;
    }

    return res
            .status(200)
            .json(notes[idx]);
});

/**
 * DELETE /notes/:id (delete a note)
 */
app.delete("/notes/:id", (req, res) => {
    const idx = findIndexById(req.params.id);
    if(idx === -1) {
        return res
                .status(404)
                .json({ error: true, message: "Note not found"});
    }
    notes.splice(idx, 1);
    return res.status(204).send();
})

// EADDRINUSE - if the port is already taken
// TODO: command to identify the process that is using the port

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
