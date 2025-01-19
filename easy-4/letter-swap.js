/**
 * Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
 * You may assume that every word contains at least one letter, and that the string will always contain at least one word.
 * You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
 */

function swap(str) {
  let result = [];
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) {
      let firstChar = words[i].slice(0, 1);
      let lastChar = words[i].slice(-1);

      let newWord =
        lastChar + words[i].slice(1, words[i].length - 1) + firstChar;

      result.push(newWord);
    } else {
      result.push(words[i].split("").reverse().join(""));
    }
  }
  return result.join(" ");
}

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"

//LS solution
function swap(words) {
  let wordsArray = words.split(" ");

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(" ");
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
