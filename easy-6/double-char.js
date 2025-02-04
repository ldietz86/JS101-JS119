/**
 * Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
 * 
 * Declare a variable to hold the result
 * Loop over the string and concatenate each char twice to newStr
 * Return newStr containing the doubled characters
 */

function repeater(str) {
    let newStr = "";

    for(let i = 0; i < str.length; i++) {
        newStr += str[i] + str[i]
    }
    return newStr;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

//LS solutions
function repeater(string) {
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx], string[idx]);
  }

  return stringArray.join("");
}

function repeater(string) {
  return string
    .split("")
    .map((char) => char + char)
    .join("");
}