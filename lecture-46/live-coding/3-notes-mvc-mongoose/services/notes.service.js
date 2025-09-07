import { Note } from "../models/notes.model.js";

export async function listWithQuery({ q, limit, offset }) {
    const filter = {};
    const rx = new RegExp(q, 'i');  // i allows us to match A,a
    // query (q) can be found in title or content of the note
    filter.$or = [{ title: rx }, { content: rx }];

    let query = Note.find(filter);
    query = query.skip(offset);
    query = query.limit(limit);

    const docs = await query.exec();
    return docs;
}

export async function createNoteInDB({ title, content}) {
    const doc = await Note.create({ title, content });
    return doc;
}

export async function getNoteByIdFromDb(id) {
    const doc = await Note.findById(id).exec();
    return doc;
}

export async function updateNote(id, { title, content }) {
    const doc = await Note.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
    ).exec();
    return doc;
}

export async function patchNote(id, { title, content }) {
    const update = {};
    if(title) {
        update.title = title;
    }
    
    if(content) {
        update.content = content;
    }

    const doc = await Note.findByIdAndUpdate(
        id,
        update,
        { new: true }
    ).exec();
    return doc;
}


export async function deleteNote(id) {
    const doc = await Note.findByIdAndDelete(id).exec();
    return !!doc;
}