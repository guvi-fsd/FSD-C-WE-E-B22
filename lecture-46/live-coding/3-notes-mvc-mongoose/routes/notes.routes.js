import { Router } from "express";
import {
    listNotes,
    createNote,
    getNoteById,
    replaceNoteById,
    patchNoteById,
    deleteNoteById
} from "../controllers/notes.controller.js"

const router = Router();
router.get("/", listNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", replaceNoteById);
router.patch("/:id", patchNoteById);
router.delete("/:id", deleteNoteById);


export default router;