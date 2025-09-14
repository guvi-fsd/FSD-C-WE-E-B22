import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import authRouter from './routes/auth.routes.js';
import servicesRouter from './routes/services.routes.js';
import bookingsRouter from './routes/bookings.routes.js';

import { logger } from './middleware/logger.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Core middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Health check
app.get('/health', (req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

// Mount routers (handlers are placeholders for now)
app.use('/auth', authRouter);
app.use('/services', servicesRouter);
app.use('/bookings', bookingsRouter);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`FrontDesk starter listening on http://localhost:${PORT}`);
});
