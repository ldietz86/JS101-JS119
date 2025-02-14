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

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

//Alternative solution
function crunch(text) {
  return [...text].reduce((result, char) => {
    if (result[result.length - 1] !== char) {
      result += char;
    }
    return result;
  }, "");
}

/**
 * Further exploration
 * In order for the if condition to evaluate to true on the last iteration, text[index + 1] must return undefined.
 * If we stop at index < text.length - 1, the last character will not be processed.
 *
 * Regex:
 * / start and end of regex
 * (.) dot is used to match any single character
 * () capturing group - captures the character matched by .
 * \1+ looks for one or more occurrences of the same character
 * "$1" first capture group - placeholder used in the replace method
 * /g global flag - find all matches within the given string
 */

function crunch(text) {
  return text.replace(/(.)\1+/g, "$1");
}

//LS solution
function crunch(text) {
  let index = 0;
  let crunchText = "";

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
