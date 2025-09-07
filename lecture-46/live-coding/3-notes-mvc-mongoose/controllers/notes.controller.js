import { json } from "express";
import {
    listWithQuery,
    createNoteInDB,
    getNoteByIdFromDb,
    updateNote,
    patchNote,
    deleteNote
} from "../services/notes.service.js";


export async function listNotes(req, res, next) {
    try {
        const data = await listWithQuery(req.query || []);
        res.status(200).json(data);
    } catch(err) {
        next(err);
    }
}

export async function createNote(req, res, next) {
    try {
        const note = await createNoteInDB(req.body);
        res.set("Location", `/notes/${note.id}`);
        res.status(201).json(note);
    } catch(err) {
        next(err);
    }
}

export async function getNoteById(req, res, next) {
    try {
        const note = await getNoteByIdFromDb(req.params.id);
        res.status(200).json(note);
    } catch(err) {
        next(err);
    }
}

export async function replaceNoteById(req, res, next) {
    const updated = await updateNote(req.params.id, req.body);
    res.status(200).json(updated);
}

export async function patchNoteById(req, res, next) {
    const updated = await patchNote(req.params.id, req.body);
    res.status(200).json(updated);
}

export async function deleteNoteById(req, res, next) {
    const ok = await deleteNote(req.params.id);
    if(!ok) {
        return res.status(404).json({ error: true, code: 404 });
    }
    res.status(204).send();
}