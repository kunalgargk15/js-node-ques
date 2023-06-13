// Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello World!");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is up running...");
});
