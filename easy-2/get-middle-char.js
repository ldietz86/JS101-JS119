/**
 * Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length,
 * you should return exactly one character. If the string has an even length, you should return exactly two characters.
 *
 * Input: String
 * Output: String
 * Requirements:
 * If input string is even, return two characters. If input string is odd, return one character.
 *
 * Example:
 * 'Launchschool' is even so it returns 2 characters ("hs")
 * 'I Love JavaScript' is odd so it returns 1 character ("a")
 *
 * Algorithm:
 * Split string into individual characters
 * Grab the middle index by dividing the length of the array by two and using Math.floor()
 * Check if the length of the array is odd.
 * Odd -> return one character in the middle
 * Even -> return two characters in the middle
 *
 */

function centerOf(str) {
  let centerIndex = Math.floor(str.length / 2);

  return str.length % 2 === 1
    ? str[centerIndex]
    : str[centerIndex - 1] + str[centerIndex];
}

//LS solution
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}