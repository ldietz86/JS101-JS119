/**
 * Write a function that takes a string argument and returns a list of substrings of that string. Each substring
 * should begin with the first letter of the word, and the list should be ordered from shortest to longest.
 *
 * Input: string
 * Ouput: array
 * Break up the input string into substrings that are sorted from shortest to longest
 *
 * 'dwtsd' -> ["d", "dw", "dwt", "dwts", "dwtsd"]
 *
 * Initialize an empty array to store the substrings
 * Iterate over the string from 1 to less than or equal to the length of the string
 * In each iteration extract a portion of the string from index 0 to the current index (exclusive) and push it to the substrings array
 * Return the array of substrings
 */

function leadingSubstrings(str) {
  let result = [];

  for (let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i));
  }
  return result;
}

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//Further exploration
function leadingSubstrings(str) {
  return [...str].map((_, i) => str.slice(0, i + 1));
}

function leadingSubstrings(str) {
  return Array.from(str)
    .filter((_, i) => i >= 0)
    .map((_, i) => str.slice(0, i + 1));
}

function leadingSubstrings(str) {
  let chars = str.split("");
  return chars.reduce((acc, _, i) => {
    acc.push(str.slice(0, i + 1));
    return acc;
  }, []);
}
