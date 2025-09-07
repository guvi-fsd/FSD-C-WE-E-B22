import { mongoose } from "../lib/mongoose.js";

const NoteSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, default: "" }
}, { timestamps: true });

export const Note = mongoose.model("Note", NoteSchema);
