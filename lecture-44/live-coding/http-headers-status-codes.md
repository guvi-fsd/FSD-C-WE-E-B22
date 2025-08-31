# HTTP Headers, Status Codes

## What're header?
- Metadata that URL/Body cannot express cleanly
- Request: parsing hints, client preferences, credentials
- Response: body format, location of new resources, Caching

Request headers:
- Content-Type: how to parse the body (eg: application/json)
- Accept: preferred response format (eg: application/json)
- Authorization: credentials (Bearer <token>)
- X-API-KEY: custom credential header
- X-Request-ID: correlation id for tracing
- User-Agent: Identify the client (Chrome/Mozilla/etc)

Response:
- Content-Type: response body format (eg: application/json)
- Location: url of the newly created resource (with 201 HTTP Created)
- Cache-Control: setting the limits on cache
- X-Request-ID: correlation id for tracing
- Access-Control-Allow-* (CORS): browser cross-origin controls

## Status Codes
- 200 OK: success with body
- 201 Created: created; include location and the resource body
- 204 No Content: success with no body (eg: delete)
- 400 Bad Request: malformed request (eg: invalid JSON)
- 401 Unauthorized: missing/invalid credentials
- 403 Forbidden: authenticated but not allowed
- 404 Not Found: resource absent
- 415 Unsupported Media Type: wrong/missing Content-Type
- 422 Unprocessable Entity: well-formed JSON but failed validation
        - Eg: POST /users
        {
            "name": "test",
            "age": 25
        }
        This is missing "email" field
- 429 Too Many Requests: Rate Limit Exceeded
- 500 Internal Server Error: unhandled server error