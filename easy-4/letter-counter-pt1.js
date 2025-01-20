/**
 * Write a function that takes a string consisting of zero or more space separated words and returns an object that
 * shows the number of words of different sizes. Words consist of any sequence of non-space characters.
 *
 * Input: String
 * Output: Object
 * Requirements:
 * Take a string argument consisting of zero or more words separated by spaces.
 * Return an object with keys corresponding to the length of the word and values corresponding to the number of times words of that length appear in the sentence.
 *
 * Example:
 * 'Four score and seven.' -> first word has four characters, second word has five characters, third word has three characters, fourth word has five characters and they all appear once in the sentence.
 *   {
 *    "3": 1,
 *    "4": 1,
 *    "5": 1,
 *    "6": 1
 *   }
 *
 * Empty string outputs empty obj
 *
 * Algorithm:
 * Split the string up into words
 * Iterate over the array of words
 * Determine the length of each word
 * Initialize an empty object to store the counts
 * Check if the length exists in the object
 * If it does, increment it by one
 * If not, set it equal to one
 * Return the object
 */

function wordSizes(str) {
  let wordCount = {};
  if (str === "") {
    return wordCount;
  }
  let words = str.split(" ");
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

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}

// Use reduce() to create a frequency map
function wordSizes(str) {
  let wordsArr = str.split(" ");
  return wordsArr.reduce((lengthFreq, word) => {
    let wordLength = word.length;
    if (lengthFreq[wordLength] == null) {
      lengthFreq[wordLength] = 1;
    } else {
      lengthFreq[wordLength] += 1;
    }
    return lengthFreq;
  }, {});
}

//Use forEach()
function wordSizes(string) {
  let wordCount = {};
  if (string === "") return wordCount;
  string.split(" ").forEach((word) => {
    wordCount[word.length] = wordCount[word.length] + 1 || 1;
  });
  return wordCount;
}

//LS solution
function wordSizes(words) {
  let wordsArray = words.split(" ");
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}
