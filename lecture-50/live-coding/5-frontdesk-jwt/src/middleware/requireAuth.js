// For the starter, we accept any non-empty Bearer token and attach a demo user.

import { verifyJwt } from "../services/jwt.service.js";

// In class, we will replace this with real JWT verification.
export function requireAuth(req, res, next) {
  // {
  //   "Authorization": "Bearer eabc..."
  // }
  // ["Bearer", "eabc..."]
  const auth = req.get('authorization') || '';
  const [scheme, token] = auth.split(' ');
  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ error: true, message: 'Missing Authorization: Bearer <token>' });
  }

  try {
    const payload = verifyJwt(token);
    // Attach a demo user so role checks can work during the starter
    req.user = { id: payload.sub, role: payload.role, name: payload.name };
    next();
  } catch(err) {
    return res.status(401).json({ error: true, message: "Invalid or expired token"});
  }
}
