/**
 * Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded
 * down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
 */

function average(nums) {
  let sum = nums.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 1);

  return Math.floor(sum / arr.length);
}

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40

//Alternative solution
function average(arr) {
  return Math.floor(arr.reduce((a, b) => a + b) / arr.length);
}

//LS solution
function average(numbers) {
  let sum = 0;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }

  return Math.floor(sum / numbers.length);
}

//Further exploration
function average(nums) {
  let sum = 0;

  nums.forEach((num) => {
    sum += num;
  });

  return Math.floor(sum / nums.length);
}
