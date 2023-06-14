// Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises.
// The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise.
// If the file does not exist, reject the promise.

const fs = require("fs");

const checkFileExists = (filepath) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.access(filepath, fs.constants.F_OK, (err) => {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    }, 1000);
  });
};

checkFileExists("./q20.js");
