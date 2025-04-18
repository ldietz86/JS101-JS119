/**
 * Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length.
 * If the argument is an empty string or if no argument is passed, the function should return an empty array.
 * You may assume that every pair of words in the string will be separated by a single space.
 *
 * Input: string
 * Output: array
 *
 * Return an array that contains each word followed by its length. If the input string is empty or the function is called without an argument, return an empty string.
 *
 * Set a default value for the string parameter to handle cases where no string is passed in. If the input string is empty, return []
 * Declare an empty array to hold each word and its corresponding length
 * Split the string into an array of words
 * Iterate over the words using map and push each word and its length to the empty array using string interpolation
 * Return the word length array
 */

function wordLengths(str = "") {
  if (str === "") return [];
  //or use: if(!string) return []; without a default parameter
  let words = str.split(" ");

  return words.map((word) => `${word} ${word.length}`);
}

wordLengths("cow sheep chicken");
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []

//Alternative solutions
function wordLengths(string) {
  if (!string) return [];

  return string.split(" ").map((word) => {
    return `${word} ${word.length}`;
  });
}

function wordLengths(phrase = "") {
  return phrase.length
    ? phrase.split(" ").map((item) => item + " " + item.length)
    : [];
}

//LS solution #1
function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(" ").map(function (word) {
    return word + " " + String(word.length);
  });
}

//LS solution #2
const wordLengths = (...args) => {
  if (args.length === 0 || args[0].length === 0) {
    return [];
  }

  return args[0].split(" ").map(function (word) {
    return `${word} ${word.length}`;
  });
};
