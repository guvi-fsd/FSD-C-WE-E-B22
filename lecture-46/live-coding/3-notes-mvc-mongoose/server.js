import express from "express";
import notesRouter from "./routes/notes.routes.js";
import { errorHandler, notFound } from "./middlewares/error.js";
import { connectMongo } from "./lib/mongoose.js";

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/notes_dev";

// global, built-in middleware
app.use(express.json());

app.get("/health", (req, res) => {
    return res.status(200).json({ ok: true, uptime: process.uptime() });
});

app.use("/notes", notesRouter);

// custom middleware
app.use(notFound);
app.use(errorHandler);

try {
    connectMongo(MONGODB_URI);
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
} catch(error) {
    console.log("Startup aborted. Couldn't connect to DB");
}
