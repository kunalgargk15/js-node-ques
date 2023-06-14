// Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum.
// The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.

const calculateSum = (arr, callback) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  callback(sum);
};

const callback = (sum) => {
  console.log(sum);
};

arr = [2, 4, 6, 8];
calculateSum(arr, callback);
