import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireRole } from '../middleware/requireRole.js';

const router = Router();

// POST /bookings (receptionist/manager/admin)
router.post('/', 
  requireAuth,
  requireRole('receptionist', 'manager', 'admin'),
  (req, res) => {
    res.status(501)
      .json({ ok: false, message: 'Create booking not implemented yet.' });
});

// GET /bookings (receptionist sees own; manager/admin see all) — stub
router.get('/', requireAuth, requireRole('receptionist', 'manager', 'admin'), (req, res) => {
  res.status(501).json({ ok: false, message: 'List bookings not implemented yet.' });
});

export default router;
