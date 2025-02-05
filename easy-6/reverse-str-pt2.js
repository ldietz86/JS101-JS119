/**
 * Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument.
 * All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces.
 * Words will be separated by a single space.
 */

function reverseWords(str) {
  let wordsArr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length >= 5) {
      newArr.push(wordsArr[i].split("").reverse().join(""));
    } else {
      newArr.push(wordsArr[i]);
    }
  }
  return newArr.join(" ");
}

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"

//Solution using map()
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
