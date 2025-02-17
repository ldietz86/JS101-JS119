/**
 * Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.
 */

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

//Solution using unshift()
function reverseSentence(str) {
  let words = str.split(" ");
  let result = [];
  words.map((word) => result.unshift(word));
  return result.join(" ");
}

