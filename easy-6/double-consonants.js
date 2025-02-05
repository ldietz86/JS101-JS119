/**
 * Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string.
 * The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
 */

function doubleConsonants(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      newStr += str[i];
    } else if (!/[0-9\s\W]/.test(str[i])) {
      newStr += str[i] + str[i];
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

//LS solution
function doubleConsonants(string) {
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx]);
    if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
      stringArray.push(string[idx]);
    }
  }

  return stringArray.join("");
}

