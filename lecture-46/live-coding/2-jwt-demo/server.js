import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ISSUER = process.env.JWT_ISSUER;

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ ok: true });
});

function signToken({ sub, role, expiresIn }) {
    if(!sub) throw new Error("sub is required");

    const payload = { sub, role };
    const token = jwt.sign(payload, JWT_SECRET, {
        algorithm: "HS256",
        issuer: JWT_ISSUER,
        expiresIn
    });
    return token;
}

app.post("/auth/login", (req, res) => {
    const { username } = req.body || {};
    // validation

    const expiresIn = "15m";    // 15 minutes; "15s" -> 15 seconds
    const token = signToken({ sub: username, role: "user", expiresIn });

    return res.status(200).json({
        token,
        expiresIn
    })

})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

