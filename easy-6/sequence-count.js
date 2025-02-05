/**
 * Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create.
 * The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.
 * You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer.
 * If the count is 0, the function should return an empty array.
 *
 * Input: Two integers
 * Output: Array of integers
 * Requirements:
 * First integer represents the count or the length of the output array
 * Second integer represents the starting number
 *
 * sequence(3, 5) -> Output: [5, 10, 15] -> [5x1, 5x2, 5x3]
 * Multiply each number by index + 1
 *
 * Declare a variable to store the final array
 * Use a for loop to iterate from starting number to count + 1
 * Push the first number multiplied by the index to the final array
 * Return multiples array
 */

function sequence(count, num1) {
  let multiplesArr = [];
  for (let i = 1; i < count + 1; i++) {
    multiplesArr.push(num1 * i);
  }
  return multiplesArr;
}

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []

//Alternative solution
function sequence(count, startingNum) {
  return Array.from({ length: count }, (_, index) => startingNum * (index + 1));
}
