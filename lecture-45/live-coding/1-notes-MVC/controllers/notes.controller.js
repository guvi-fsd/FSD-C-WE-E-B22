import {
    listWithQuery
} from "../services/notes.service";


export function listNotes(req, res, next) {
    try {
        const data = listWithQuery(req.query || {});
        res.status(200).json(data);
    } catch(err) {
        next(err);
    }
}