// Question: Develop a Node.js program that deletes a file called "mynewfile2.txt" using the fs.unlink() method.

const fs = require("fs");

fs.unlink("mynewfile2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
