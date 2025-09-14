export function requireRole(...allowed) {
  return (req, res, next) => {
    const role = req.user?.role;
    if (!role) return res.status(401).json({ error: true, message: 'Unauthorized' });
    if (!allowed.includes(role)) {
      return res.status(403).json({ error: true, message: `Forbidden for role: ${role}` });
    }
    next();
  };
}
