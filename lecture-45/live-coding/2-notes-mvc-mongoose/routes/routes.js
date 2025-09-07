import { Router } from "express";
import {
    listNotes
} from "../controllers/notes.controller"

const router = Router();
router.get("/", listNotes);


export default router;