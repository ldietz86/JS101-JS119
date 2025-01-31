/**
 * Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
 */

function digitList(num) {
  return num.toString().split("").map(Number);
}

digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]

//Alternative solutions
let digitList = (num) => Array.from(num.toString()).map(Number);

function digitList(num) {
  let result = [];

  while (num > 0) {
    arr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

function digitList(num) {
  let result = [];
  num
    .toString()
    .split("")
    .forEach((digit) => {
      result.push(Number(digit));
    });
  return result;
}
