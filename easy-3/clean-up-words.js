/**
 * Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
 * If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).
 */

function cleanUp(str) {
  let newStr = "";
  let lastCharWasSpace = false;

  for (let i = 0; i < str.length; i++) {
    let equalUpperLower = str[i].toUpperCase() === str[i].toLowerCase();

    if (equalUpperLower && !lastCharWasSpace) {
      newStr += " ";
      lastCharWasSpace = true;
    } else if (!equalUpperLower) {
      newStr += str[i];
      lastCharWasSpace = false;
    }
  }

  return newStr;
}

console.log(cleanUp("---what's my +*& line?")); // " what s my  line "

//Regex
function cleanUp(str) {
  return str.replace(/[^a-z]+/gi, " ");
}

cleanUp("---what's my +*& line?"); // " what s my line "

//LS solution 1
function cleanUp(text) {
  let cleanText = "";

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== " ") {
      cleanText += " ";
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= "a" && char <= "z";
}

function isUpperCaseLetter(char) {
  return char >= "A" && char <= "Z";
}


//LS solution 2
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}