// Question: Write a JavaScript program that checks if a given string is a palindrome.

const checkPalindrome = (str) => {
  let size = str.length;
  let i = 0;
  let j = size - 1;

  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(checkPalindrome("racecar"));
