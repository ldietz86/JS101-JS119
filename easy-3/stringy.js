/**
 * Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
 *
 * Input: Number > 0
 * Output: String
 * Requirements:
 * Return a string with a length equal to the input.
 * The string will consist of repeating 1's and 0's and will always start with 1.
 *
 * Algorithm:
 * Declare an empty string to store the 1's and 0's.
 * Loop over numbers from 0 to Input - 1
 * In each iteration, append '1' to the string if the index is evenly divisible by 0 or '0' if it is not.
 * Return the final string.
 */

function stringy(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += i % 2 === 0 ? "1" : "0";
  }
  return str;
}

//LS solution
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};

