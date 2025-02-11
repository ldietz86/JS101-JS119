/**
 * Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
 */

function removeVowels(arr) {
  let vowels = /[aeiouAEIOU]/g;
  return arr.map((str) => str.replace(vowels, ""));
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]

//LS solution
function removeVowels(stringArray) {
  return stringArray.map(string => {
    let chars = string.split("");
    let removedVowels = deleteVowels(chars);
    return removedVowels.join("");
  });
}

function deleteVowels(array) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return "";
    } else {
      return char;
    }
  });
}