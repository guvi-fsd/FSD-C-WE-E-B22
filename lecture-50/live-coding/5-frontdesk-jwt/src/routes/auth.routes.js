import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { login, me } from '../controllers/auth.controller.js';
const router = Router();

// We will implement real login (JWT) in-class.
router.post('/login', login);

router.get('/me', [requireAuth], me);

export default router;
