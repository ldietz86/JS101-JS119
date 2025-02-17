/**
 * Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive,
 * and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
 */

function isRealPalindrome(str) {
  let modifiedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return isPalindrome(modifiedStr);
}

function isPalindrome(modifiedStr) {
  return modifiedStr === modifiedStr.split("").reverse().join("");
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

//LS solution
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}

function isNumber(char) {
  return char >= "0" && char <= "9";
}
