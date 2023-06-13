// Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./q9.html", "utf-8", (err, data) => {
    if (err) {
      res.end("Error");
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is up running...");
});
