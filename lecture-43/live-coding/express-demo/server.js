import express from "express";
import path from "node:path";

// file://path/to/file -> /path/to/file
import { fileURLToPath } from "node:url";


// import.meta.url - the absolute URL of the current module file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const app = express();
const PORT = 3000;


// --------------------- Pipeline of middlewares ---------------------

// 1) Logger: will run for every request
app.use((req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
        const ms = Date.now() - start;
        // Eg: GET /health -> 200 (120 ms)
        console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms} ms)`);
    });

    next();
});

// Built in middleware: allows to fetch static content
app.use(express.static(path.join(__dirname, "public")));

// Built in middleware: converts the http request 
// body to expresss' request.body
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ ok: true, uptime: process.uptime() });
});

// Body to this endpoint: { "msg": "hi" }
app.post("/echo", (req, res) => {
    res.json({ incoming: req.body.test, receivedAt: new Date().toISOString() });
});

app.get("/oops", (req, res) => {
    throw new Error("Simulated failure");
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error Handler: `, err.stack || err.message || err);
    const status = err.status || 500;
    res
        .status(status)
        .json({
            error: true,
            message: err.message || "Internal Server Error"
        });
});

app.listen(PORT, () => {
    console.log("Server running at port 3000");
});