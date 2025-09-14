export function notFound(req, res, _next) {
  res.status(404).json({ error: true, message: `Not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err, req, res, _next) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  // In production, avoid leaking stack traces to clients
  console.error('Error handler:', err.stack || err);
  res.status(status).json({ error: true, message });
}
