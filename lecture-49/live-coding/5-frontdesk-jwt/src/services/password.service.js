import bcrypt from "bcryptjs";

export async function hashPassword(plain) {
    const salt = await bcrypt.salt(10);
    return bcrypt.hash(plain, salt);
}
"123123" -> "abc"

export function comparePassword(plain, hashed) {
    return bcrypt.compare(plain, hashed);
}