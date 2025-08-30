import http from "node:http";

// https://nodejs.org/api/http.html

const server = http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Hello from bare http\n");
})

server.listen(3000, () => {
    console.log("Listening on port 3000...");
})