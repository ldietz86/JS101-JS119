/**
 * Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.
 * You may assume that a word is any sequence of non-whitespace characters.
 *
 * Input: string
 * Output: string with first letter of each word capitalized
 *
 * Split the input string into an array of words using str.split(" ")
 * Use map to transform each word in the newly created array
 * Capitalize the first letter using toUpperCase() and concatenate that portion with the rest of the word using .slice(1)
 * As a safeguard for mixed-case words, use toLowerCase() to ensure the rest of the string is lowercase
 * Join the array of words to return a single string
 */

function wordCap(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
