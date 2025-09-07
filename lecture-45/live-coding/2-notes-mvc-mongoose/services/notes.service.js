import store from "../models/note.store.js";

export function listWithQuery({ q, limit, offset }) {
    const all = store.listAll();
    // logic for pagination, fitlering, etc will be present here
    return all;
}