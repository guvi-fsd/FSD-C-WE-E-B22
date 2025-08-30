# Section 3 - Modules in Node (Built-in, Third-party, Custom)

## What do we need modules?

You're rarely going to write an entire Node.js app from scratch.


## Built-in ([core modules](https://nodejs.org/api/modules.html))

- `fs` / `fs/promises` - filesystem access. Read, write, create directories (folders), stream large files, inspect file metadata. 
- `path` - cross-platform file paths. Build and resolve file path safely on Windows/Linux/macOS. 
- `url` - URL parsing and building. Extract origin, path & query parameters, build URLs
- `https` / `http` - low-level netowrking primitives. You can create basic servers/clients
- `crypto` - cryptography primitives (OpenSSL). Hashes, [HMAC](https://en.wikipedia.org/wiki/HMAC)
- `events` - in-process publish/subscribes. Emitting an event in Node is possible because of this module
- `os` - permits OS specific inspection. CPU count, platform, memory, environment variables, etc etc
- `timers` / `process` - scheduling and process control

## Third party packages

- Express - HTTP API Framework
    - Fastify is an alternative to Express

- Winston - structured logs
    - Alternative: Pino

- Zod - schema validation
    - Alternative: Joi

- HTTP calls: built-in fetch method
    - Alternative: axios

- Database client: pg (Postgres) / Prisma / Mongoose (for MongoDB)
    - For MongoDB, official package: https://www.npmjs.com/package/mongodb


## Custom Modules

Custom modules are files that export specific functionality and are imported where needed. 