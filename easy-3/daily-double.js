/**
 * Write a function that takes a string argument and returns a new string that contains the value of the
 * original string with all consecutive duplicate characters collapsed into a single character.
 *
 * Input: String
 * Output: String
 * Requirements:
 * Remove consecutive duplicate characters from string.
 * Keep only one instance of each character if there are duplicates.
 *
 * Example:
 * "ggggggggg" -> "g"
 * "" -> ""
 *
 * Algorithm:
 * Declare a variable, uniqueChars, and set it to an empty string.
 * Iterate over the input string.
 * Compare the the current character in the string to the one before it.
 * If the character is unique, append it to the uniqueChars string.
 * Return the variable containing unique characters.
 */

function crunch(str) {
  let uniqueChars = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      uniqueChars += str[i];
    }
  }
  return uniqueChars;
}
