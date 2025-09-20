import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireRole } from '../middleware/requireRole.js';
import { createService, listServices } from '../controllers/services.controller.js';

const router = Router();

// GET /services (auth): return a hard-coded list for the starter
router.get('/', requireAuth, listServices);

// POST /services (admin only): stub for now
router.post('/', requireAuth, requireRole("admin"), createService);

export default router;
