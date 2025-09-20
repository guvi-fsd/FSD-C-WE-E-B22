import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
const router = Router();

// We will implement real login (JWT) in-class.
router.post('/login', (req, res) => {
  const { email = "demo@local.com", role = "receptionist", name = "Demo User" } = req.body || {};
  const allowed = ["admin", "manager", "receptionist"];
  const userRole = allowed.includes(role) ? role : "receptionist";

  return res.status(200).json({
    token: userRole,
    user: { id: `${userRole}-id`, email, name, role: userRole }
  });
});

router.get('/me', [requireAuth], (req, res) => {
  console.log(req.user);
  if(!req.user) {
    return res.status(401).json({ error: true, message: "Unauthorized" });
  }
  res.json({ user: req.user });
});

export default router;
