// Question: Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.

const fs = require("fs");

fs.open("mynewfile2.txt", "w", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
