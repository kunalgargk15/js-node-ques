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
