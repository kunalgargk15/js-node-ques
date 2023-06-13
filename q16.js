// Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.

const multiplyByTwo = (num, callback) => {
  num *= 2;
  callback(num);
};

const callback = (num) => {
  console.log(num);
};

multiplyByTwo(5, callback);
