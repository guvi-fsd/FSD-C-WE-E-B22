import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireRole } from '../middleware/requireRole.js';

const router = Router();

// GET /services (auth): return a hard-coded list for the starter
router.get('/', requireAuth, (req, res) => {
  res.json([
    { id: 'svc1', name: 'Haircut', durationMins: 30, price: 300 },
    { id: 'svc2', name: 'Shave', durationMins: 15, price: 150 },
  ]);
});

// POST /services (admin only): stub for now
router.post('/', requireAuth, requireRole('admin'), (req, res) => {
  res.status(501).json({ ok: false, message: 'Create service not implemented yet.' });
});

export default router;
