import { Staff } from "../models/staff.model.js";
import { signJwt } from "../services/jwt.service.js";
import { comparePassword } from "../services/password.service.js";


export async function login(req, res, next) {
  try {
    const { email, password }= req.body || {};
    if(!email || !password) {
        return res.status(400).json({ error: true, message: "Email and password are required" });
    }
    
    const user = await Staff.findOne({ email: String(email).toLowerCase() });
    if(!user) {
        return res.status(401).json({ error: true, message: "Invalid credentials" });
    }

    const ok = await comparePassword(password, user.passwordHash);
    if(!ok) {
        return res.status(401).json({ error: true, message: "Invalid credentials" });
    }

    const payload = { sub: user._id.toString(), role: user.role, name: user.name };
    const token = signJwt(payload);

    return res.status(200).json({
        token,
        user: { id: user._id, email: user.email, name: user.name, role: user.role }
    });
  } catch(err) {
    next(err);
  }
}

export async function me(req, res, next) {
  try {
    console.log(req.user);
    if(!req.user) {
        return res.status(401).json({ error: true, message: "Unauthorized" });
    }
    return res.json({ user: req.user });
  } catch(err) {
    next(err);
  }
}