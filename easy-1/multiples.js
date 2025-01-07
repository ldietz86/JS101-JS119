/**
 * Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5.
 * For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 * You may assume that the number passed in is an integer greater than 1.
 *
 * P
 * Input: Integer > 1
 * Output: Sum of multiples between 1 and the input
 * Requirements:
 * Multiples (a number that, when divided by another number, leaves no remainder) should not be repeated (e.g. 15 & 30):
 * 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33
 * 5, 10, 15, 20, 25, 30
 * Input is inclusive
 * E
 * Num = 34
 * 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 + 21 + 24 + 25 + 27 + 30 + 33
 * Sum = 258
 * D
 * A
 * Declare an empty array to store multiples.
 * Loop through all numbers from 1 up to and including the input.
 * Check if num % 3 === 0 || num % 5 === 0 and push these values to the array.
 * Find the sum of the array values using reduce().
 */

function multisum(num) {
  let multiples = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((acc, currentVal) => acc + currentVal);
}

//Alternative solution
function multisum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//LS solution
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
