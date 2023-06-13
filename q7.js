// Question: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Hello, World!</h1></body></html>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is up running...");
});
