/**
 * Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array.
 * Examine the examples to see what we mean. You may assume that the array always contains at least one number.
 *
 * Input: array
 * Output: string
 *
 * Declare a variable to keep track of running total
 * Use the reduce method to add the current value to the total
 * Set the initial value to 0
 * Return the sum of the accumulator and total
 *
 */

function sumOfSums(arr) {
  let total = 0;
  return arr.reduce((acc, currentVal) => {
    total += currentVal;
    return acc + total;
  }, 0);
}

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35

//Alternative solutions
function sumOfSums(arr) {
  return arr
    .flatMap((_, index, arr) => arr.slice(0, arr.length - index))
    .reduce((sum, val) => sum + val, 0);
}

const sumOfSums = (numArr) => {
  let total = 0;
  return numArr.map((num) => (total += num)).reduce((a, b) => a + b);
};

let sumOfSums = (arr) =>
  arr.reduce((sum, num, idx) => sum + num * (arr.length - idx), 0);

//LS solution #1
function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

//LS solution #2
function sumOfSums(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}
