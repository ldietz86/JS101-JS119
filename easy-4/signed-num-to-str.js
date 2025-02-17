/**
 * In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.
 * Write a function that takes an integer and converts it to a string representation. You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString().
 * You may, however, use integerToString() from the previous exercise. You might also want to check the Math.sign() function.
 */

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

function signedIntegerToString(num) {
  if (num === 0) {
    return "0";
  }

  if (num < 0) {
    return "-" + integerToString(Math.abs(num));
  } else if (num > 0) {
    return "+" + integerToString(Math.abs(num));
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(-0) === "-0");

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

//Further exploration
console.log(signedIntegerToString(-0) === "-0"); //false

//Add an additional if statement to the signedIntegerToString function to handle -0
if (Object.is(num, -0)) {
  return "-0";
}

//LS solution
function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}
