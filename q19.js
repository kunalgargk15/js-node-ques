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
