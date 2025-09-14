// For the starter, we accept any non-empty Bearer token and attach a demo user.
// In class, we will replace this with real JWT verification.
export function requireAuth(req, res, next) {
  const auth = req.get('authorization') || '';
  const [, token] = auth.split(' ');
  if (!token) {
    return res.status(401).json({ error: true, message: 'Missing Authorization: Bearer <token>' });
  }
  // Attach a demo user so role checks can work during the starter
  req.user = { id: 'demo-user-id', role: 'receptionist', name: 'Demo User' };
  next();
}
