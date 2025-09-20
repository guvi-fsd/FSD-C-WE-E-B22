import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireRole } from '../middleware/requireRole.js';
import { sendBookingEmail } from '../services/email.service.js';

const router = Router();

// POST /bookings (receptionist/manager/admin)
router.post('/', 
  requireAuth,
  requireRole('receptionist', 'manager', 'admin'),
  async (req, res) => {
    const { customerName, customerEmail, serviceId, bookingStart } = req.body || {};
    
    if(!customerName || !customerEmail || !serviceId || !bookingStart) {
      return res.status(400).json({ error: true, message: "Missing or invalid fields"});
    }
    
    // Stub for a booking (no database involvement, yet)
    const booking = {
      id: 'bk_stub',
      customerName,
      customerEmail,
      serviceId,
      bookingStart,
      status: "ACTIVE",
      bookingDate: new Date().toISOString(),
      createdBy: req.user.id
    };

    // Send an email
  let email = { sent: false };
  try {
    /* 
      TODO: 
        create a function, sendBookingEmail
        Input: to, customerName, bookingStartISO
        Return: { messageId }
    */
    const info = await sendBookingEmail(
      { to: customerEmail, customerName, bookingStartISO: bookingStart, serviceName: "Haircut" }
    );
    email = { sent: true, messageId: info.messageId };
  } catch(err) {
    email = { sent: false, error: "Email dispatch failed" };
  }

    return res.status(201).json({ ...booking, email });

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
