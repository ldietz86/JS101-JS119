/**
 * Write a function that returns a list of all palindromic substrings of a string. The substrings in the returned list should be sorted by their order of appearance in the input string.
 * Duplicate substrings should be included multiple times. Use the substrings function you wrote in the previous exercise. For the purpose of this exercise, you should consider all characters
 * and pay attention to case;that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
 */

function leadingSubstrings(str) {
  let result = [];

  for (let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i));
  }
  return result;
}

function substrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    substrings.push(leadingSubstrings(str.slice(i)));
  }
  return substrings.flat();
}

function palindromes(str) {
  return substrings(str).filter((el) => el === el.split("").reverse().join(""));
}

palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

//LS solution
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}
