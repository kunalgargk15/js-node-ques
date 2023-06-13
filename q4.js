// Question: Write a JavaScript program that uses a while loop to reverse a given number.

const revNum = (num) => {
  let ans = 0;
  while (num > 0) {
    let digit = num % 10;
    ans = ans * 10 + digit;
    num = Math.floor(num / 10);
  }

  return ans;
};

console.log(revNum(12345));
