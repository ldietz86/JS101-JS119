/**
 * Write a function that returns an Array that contains every other element of an Array that is passed in as an argument.
 * The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
 *
 * Input: Array
 * Output: Array
 * Requirements:
 * Return an array that contains every other element starting at 1. Log this array to the console.
 *
 * Algorithm:
 * Declare an empty array oddElements.
 * Determine which elements are at index 0, 2, 4 etc.
 * Push the elements that are located at odd indices to the oddElements array.
 * Return the array.
 *
 */

function oddities(arr) {
  let oddElements = [];
  for (let i = 0; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}

//Further exploration
function evenities(arr) {
  return arr.filter((el) => el % 2 === 0);
}

//Alternative solutions
let oddities = (arr) => arr.filter((el) => array.indexOf(el) % 2 === 0);

let oddities = (arr) => array.filter((el, i) => i % 2 === 0);

let oddities = (arr) => arr.filter((_, idx) => idx % 2 === 0);

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
