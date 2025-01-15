/**
 * Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.
 */

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function isPalindromicNumber(num) {
  return isPalindrome(num.toString());
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

