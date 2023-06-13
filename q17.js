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
