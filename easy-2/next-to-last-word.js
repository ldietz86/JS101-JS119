/**
 * Write a function that returns the next to last word in the String passed to it as an argument.
 * Words are any sequence of non-blank characters.
 * You may assume that the input String will always contain at least two words.
 */

function penultimate(str) {
  let words = str.split(" ");
  let secondToLastWord = words.slice(-2)[0];
  return secondToLastWord;
}

console.log(penultimate("last word") === "last"); // true
console.log(penultimate("Launch School is great!") === "is"); // true

/**
 * Further exploration
 * Edge cases: empty string, one word, even number of words, extra spaces.
 */

function middleWord(str) {
  let words = str.split(" ").filter((word) => word !== "");

  if (words.length === 0) {
    return "Empty string";
  } else if (words.length === 1) {
    return words[0];
  }

  let middleIndex = Math.floor(words.length / 2);
  return words[middleIndex];
}

//LS solution
function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
}
