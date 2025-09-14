# FrontDesk Starter (Section 4: Pipeline)

What this gives you
- Minimal Express app with JSON parsing, tiny logger, 404 + error handler
- Health endpoint: GET /health
- Placeholder routers for /auth, /services, /bookings
- Auth and role middlewares stubs so you can demonstrate 401/403
- No database or email wiring yet (we’ll add those in later phases)

Requirements
- Node.js >= 18

Setup
1) npm install
2) Copy .env.example to .env and adjust PORT if needed
3) Run: npm start
4) Try:
   - GET http://localhost:3000/health
   - GET http://localhost:3000/services  (need Authorization: Bearer demo)

Notes
- requireAuth is a stub: it only checks that an Authorization header with a token exists
  and attaches a demo user { id, role: 'receptionist', name }. We replace this with real JWT later.
- requireRole('admin') will return 403 unless you change the stubbed role in requireAuth
  or implement login.
