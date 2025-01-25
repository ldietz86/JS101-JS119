/**
 * In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.
 * Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer. You may not use any of the standard conversion
 * functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct
 * the string by analyzing and manipulating the number.
 */

function integerToString(num) {
  const DIGITS = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };

  if (num === 0) {
    return "0";
  }

  let result = "";

  while (num > 0) {
    let digit = num % 10;
    result = DIGITS[digit] + result;
    num = Math.floor(num / 10);
  }

  return result;
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

//Alternative solution
function integerToString(num) {
  let digits = [];

  while (num > 0) {
    let remainder = num % 10;
    digits.push(remainder);
    num = Math.floor(num / 10);
  }

  return digits.reverse().join("");
}

//LS solution
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}
