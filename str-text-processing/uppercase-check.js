/**
 * Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
 */

let isUppercase = (str) => str === str.toUpperCase();

//Alternative solution using a for loop
function isUppercase(str) {
  if (str === "") return true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}
