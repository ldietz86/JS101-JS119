/**
 * Write a function that determines and returns the UTF-16 string value of a string passed in as an argument.
 * The UTF-16 string value is the sum of the UTF-16 values of every character in the string.
 * (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
 *
 * P
 * Input: String
 * Output: Number
 * Requirements:
 * Determine the UTF-16 string value of each character in the string and return the sum of these values.
 * E
 * utf16Value('Four score') //984
 * F - 70, o - 111, u - 117, r - 114, space - 32, s - 115, c - 99, o - 111, r - 114, e - 101
 * 70 + 111 + 117 + 114 + 32 + 115 + 99 + 111 + 114 + 101 = 984
 *
 * D
 * A
 * Declare a sum and set it to 0.
 * Split the string into individual characters. (not required since strings are iterable)
 * Loop over these characters.
 * Determine the UTF-16 string value for each char using charCodeAt().
 * Add this value to the sum.
 */

function utf16Value(str) {
  let sum = 0;
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    sum += chars[i].charCodeAt();
  }
  return sum;
}

//Alternative solution
function utf16Value(str) {
  return [...str].reduce((acc, el) => acc + el.charCodeAt(0), 0);
}

//LS solution
function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}
