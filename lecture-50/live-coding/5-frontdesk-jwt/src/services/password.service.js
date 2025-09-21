import bcrypt from "bcryptjs";

export async function hashPassword(plain) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(plain, salt);
}
// "123123" -> "abc"

export async function comparePassword(plain, hashed) {
    return await bcrypt.compare(plain, hashed);
}