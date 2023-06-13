// Question: Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    let current = new Date().toString();
    res.write(current);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is up running...");
});
