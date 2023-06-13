// Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.

let vowels = ["a", "e", "i", "o", "u"];
let count = 0;

const countVowels = (str) => {
  for (let i = 0; i < str.length; i++) {
    char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

let input = "Hello, World!";
console.log(countVowels(input));
