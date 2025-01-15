/**
 * Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
 */

let readlineSync = require("readline-sync");

let num1 = parseInt(readlineSync.prompt("Enter the 1st number: "));
let num2 = parseInt(readlineSync.prompt("Enter the 2nd number: "));
let num3 = parseInt(readlineSync.prompt("Enter the 3rd number: "));
let num4 = parseInt(readlineSync.prompt("Enter the 4th number: "));
let num5 = parseInt(readlineSync.prompt("Enter the 5th number: "));
let num6 = parseInt(readlineSync.prompt("Enter the last number: "));

let arr = [num1, num2, num3, num4, num5];

let lastNum = num6;
let containsNum = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === lastNum) {
    containsNum = true;
    break;
  }
}

if (containsNum) {
  console.log(
    `The number ${lastNum} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`
  );
} else {
  console.log(
    `The number ${lastNum} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`
  );
}

//Includes method
if (arr.includes(lastNum)) {
  console.log(
    `The number ${lastNum} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`
  );
} else {
  console.log(
    `The number ${lastNum} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`
  );
}


// Futher exploration - LS solution
function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

//Array.some() non-destructive method that returns true if it finds an element that passes the test implemented by the provided function, false otherwise.
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even)); //true
