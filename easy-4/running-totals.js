/**
 * Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.
 *
 * Input: Array
 * Output: Array with modified values
 * Requirements:
 * Return a new array with the same length as the original
 * arr[0] stays the same
 * arr[1] = arr[0] + arr[1]
 * arr[2] = arr[1] + arr[2]
 *
 * Algorithm:
 * Declare an empty array to store running totals
 * Use the reduce method to iterate over the array and update running total
 * Initialize accumulator to 0 
 * Push the updated accumulator to the new array
 * Update the accumulator
 * Return the new array with running totals
 */

function runningTotal(arr) {
  let newArr = [];
  arr.reduce((acc, currentVal) => {
    newArr.push(acc + currentVal);
    return acc + currentVal;
  }, 0);
  return newArr;
}

//Using for loop
function runningTotal(arr) {
  let newArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArr.push(sum);
  }

  return newArr;
}

/**
 * Further exploration
 * .map() is a non-destructive method that applies a callback function to each element in the array and returns a new array with modified values
 */

function runningTotal(arr) {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}

//LS solution
function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
}
