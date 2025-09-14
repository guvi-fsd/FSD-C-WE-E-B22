import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireRole } from '../middleware/requireRole.js';

const router = Router();

// POST /bookings (receptionist/manager/admin)
router.post('/', 
  requireAuth,
  requireRole('receptionist', 'manager', 'admin'),
  (req, res) => {
    const { customerName, customerEmail, serviceId, bookingStart } = req.body || {};
    return res.status(201).json({
      id: "bk_stub",
      customerName,
      customerEmail,
      serviceId,
      bookingStart,
      bookingDate: new Date().toISOString(),
      createdBy: req.user.id
    });
});

// GET /bookings (receptionist sees own; manager/admin see all) — stub
router.get('/', requireAuth, requireRole('receptionist', 'manager', 'admin'), (req, res) => {
  const samples = [
    {
      "id": "bk_stub",
      "customerName": "Test",
      "customerEmail": "test@gmail.com",
      "serviceId": "svc1",
      "bookingStart": "2025-09-14T14:42:12.596Z",
      "bookingDate": "2025-09-14T14:43:14.717Z",
      "createdBy": "demo-user-id"
    },
    {
        "id": "bk_stub_2",
        "customerName": "Test 2",
        "customerEmail": "test2@gmail.com",
        "serviceId": "svc2",
        "bookingStart": "2025-09-15T14:42:12.596Z",
        "bookingDate": "2025-09-14T14:43:14.717Z",
        "createdBy": "demo-user-id"
    }
  ]
  
  return res.json(samples);

});

export default router;
