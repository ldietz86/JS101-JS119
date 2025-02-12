/**
 * Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are
 * lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.
 *
 * Input: string
 * Output: object
 *
 * The function accepts a string and returns an array that contains the number of lowercase and uppercase characters in the string, as well as all other characters (neither)
 *
 * Declare an object to hold the three key value pairs (lowercase, uppercase and neither) and set them to 0
 * Loop over the string and use two helper functions to check whether the current character is equal to an uppercase or lowercase letter
 * If the current character is lowercase, increment the lowercase key value by 1
 * If the current character is uppercase, increment the uppercase key value by 1
 * If neither are true, increment the neither key value by 1
 * Return the object
 */

function letterCaseCount(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < str.length; i++) {
    if (isLowerCaseLetter(str[i])) {
      obj.lowercase += 1;
    } else if (isUpperCaseLetter(str[i])) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}

function isLowerCaseLetter(char) {
  return char >= "a" && char <= "z";
}

function isUpperCaseLetter(char) {
  return char >= "A" && char <= "Z";
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }

//Alternative solutions
function letterCaseCount(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      obj.lowercase += 1;
    } else if (/[A-Z]/.test(str[i])) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}

function letterCaseCount(string) {
  let lowercase = string.match(/[a-z]/g)?.length || 0;
  let uppercase = string.match(/[A-Z]/g)?.length || 0;
  let neither = string.length - lowercase - uppercase;
  return { lowercase, uppercase, neither };
}

function letterCaseCount(str) {
  let arrChar = str.split("");

  let result = {};
  result.lowercase = arrChar.filter(
    (char) => char >= "a" && char <= "z"
  ).length;
  result.uppercase = arrChar.filter(
    (char) => char >= "A" && char <= "Z"
  ).length;
  result.neither = arrChar.filter(
    (char) => char.toLowerCase() === char.toUpperCase()
  ).length;

  return result;
}

//LS solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || []; //g: tells the regex engine to search the entire string
  let neitherChars = string.match(/[^a-z]/gi) || []; // /[^a-z]/gi: Checks whether the character is neither an uppercase nor a lowercase letter and tells the regex engine to ignore case.

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length,
  };
}

