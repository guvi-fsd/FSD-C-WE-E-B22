# Notes API

Express server with a single endpoint for the Notes app.


## Endpoints:

- `server.js` - an Express app with:
    - GET /health: for the health check
    - `express.json()`: to enable the middleware
    - Store our data in-memory, in a `notes` array (no DB yet)
    - GET /notes: return [] (200 OK)
    - POST /notes: creates a notes given the request body
- package.json



## References

- [cURL](https://curl.se/docs/tutorial.html)