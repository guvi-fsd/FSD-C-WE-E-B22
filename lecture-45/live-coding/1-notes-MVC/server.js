import express from "express";
import notesRouter from "./routes/routes";
import { errorHandler, notFound } from "./middlewares/error";

const app = express();
const PORT = 3000;

// global, built-in middleware
app.use(express.json());

app.get("/health", (req, res) => {
    return res.status(200).json({ ok: true, uptime: process.uptime() });
});

app.use("/notes", notesRouter);

// custom middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
