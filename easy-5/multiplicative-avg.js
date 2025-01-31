/**
 * Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result
 * by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
 */

function multiplicativeAverage(arr) {
  let product = arr.reduce((acc, currentVal) => {
    return acc * currentVal;
  }, 1);
  return (product / arr.length).toFixed(3);
}

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"

//LS solution
function multiplicativeAverage(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}
