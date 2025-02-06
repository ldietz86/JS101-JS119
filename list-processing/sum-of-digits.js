/**
 * Write a function that takes one argument, a positive integer, and returns the sum of its digits.
 * Do this without using for, while, or do...while loops - instead, use a series of method calls.
 */

function sum(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, currentVal) => acc + Number(currentVal), 0);
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45

//Alternative solution
function sum(num) {
  return [...Array.from(String(num), Number)].reduce(
    (acc, currentVal) => acc + currentVal
  );
}
