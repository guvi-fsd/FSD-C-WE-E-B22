import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireRole } from '../middleware/requireRole.js';
import { createBooking, listBookings } from '../controllers/bookings.controller.js';

const router = Router();

// POST /bookings (receptionist/manager/admin)
router.post('/', 
  requireAuth, requireRole('admin'),
  createBooking);

// GET /bookings (receptionist sees own; manager/admin see all) — stub
router.get('/', 
  requireAuth, requireRole('receptionist', 'manager', 'admin'),
  listBookings
);

export default router;
