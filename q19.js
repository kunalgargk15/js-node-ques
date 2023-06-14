// Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number.
// The promise should be rejected if the generated number is less than 5.

const getRandomNumber = () => {
  const promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10 + 1);
    if (num >= 5) {
      resolve(num);
    } else {
      reject(new Error(`Number is ${num}`));
    }
  });

  return promise;
};

console.log(getRandomNumber());
