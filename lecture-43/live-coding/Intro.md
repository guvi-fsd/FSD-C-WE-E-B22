## Request - Response Cycle with a backend emphasis

Logger: reads the request information; doesn't modify the request
JSON Body Parser: build the request body from JSON
Authentication: validating a token that says user exists in our system
Route Handling: decides the endpoint that needs to be invoked

## Express & Beyond

### What is Express?

A minimal framework built on top of Node's HTTP server. It gives us:
    - Routing (match requests by the HTTP method + path)
    - A middleware pipeline (ordered functions that processes requests)
    - Response helpers; eg: return a response in JSON

### What's middlewares?

A middleware is a function in the request pipeline that:
    - receive the request and response
    - can read/modify the request or response
    - can send the response
    - can call next() to pass control to the next step

#### Order Matters

When you create middlewares in Express, the order in which they're registered will matter.

### Built-in middleware

- express.json() - parses the JSON body from the HTTP request and it populates the request.body
- express.urlencoded() - parses HTML form posts
- express.static(): serves files from a folder
