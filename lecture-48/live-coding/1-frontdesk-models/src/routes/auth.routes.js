import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
const router = Router();

// We will implement real login (JWT) in-class.
router.post('/login', (_req, res) => {
  res.status(501).json({ ok: false, message: 'Login not implemented yet (will be wired in class).' });
});

export default router;
