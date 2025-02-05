/**
 * Write a function that takes a string argument consisting of a first name, a space, and a last name,
 * and returns a new string consisting of the last name, a comma, a space, and the first name.
 */

function swapName(str) {
  return str.split(" ").reverse().join(", ");
}

swapName("Joe Roberts"); // "Roberts, Joe"

//Further exploration
function swapName(str) {
  let words = str.split(" ");
  let lastName = words.pop();

  return `${lastName}, ${words.join(" ")}`;
}

swapName("Karl Oskar Henriksson Ragvals"); // "Ragvals, Karl Oskar Henriksson"
