/**
 * Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.
 * For instance, the word size of "it's" is 3, not 4.
 */

function wordSizes(str) {
  let modifiedStr = str.replace(/[^a-z ]/gi, "");
  //let modifiedStr = str.replace(/[^a-z\s]/gi, ""); // Preserve spaces using \s or a space after ^a-z
  let wordCount = {};
  if (modifiedStr === "") {
    return wordCount;
  }
  let words = modifiedStr.split(" ");
  for (let i = 0; i < words.length; i++) {
    let length = words[i].length;

    if (wordCount[length]) {
      wordCount[length]++;
    } else {
      wordCount[length] = 1;
    }
  }
  return wordCount;
}

//Alternative solution
const wordSizes = (str) => {
  let obj = {};

  str.split(" ").forEach((word) => {
    word = word.split("").filter((char) => /[a-zA-Z]/.test(char));
    obj[word.length] ? obj[word.length]++ : (obj[word.length] = 1);
  });

  return obj;
};

//LS solution
function wordSizes(words) {
  let wordsArray = words.split(" ");
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}