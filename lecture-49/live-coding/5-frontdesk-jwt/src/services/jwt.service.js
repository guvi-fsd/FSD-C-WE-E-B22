import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

export function signJwt(payload) {
    return jwt.sign(payload, secret, { expiresIn });
}

export function verifyJwt(token) {
    return jwt.verify(token, secret);
}