/**
 * Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number.
 * If the argument is a negative number, return it as-is.
 */

function negative(num) {
  return num < 0 ? num : -num;
}

negative(5); // -5
negative(-3); // -3
negative(0); // -0

/**
 * Further exploration
 * 
 * JS uses a system called IEEE 754 to represent numbers. In this system, every number has a special sign bit (0 or 1)
 * to represent whether it's + or -. The standard for floating point arithmetic requires +0 and -0.
 * 
 * The strict equality comparison algorithm (ecma international)
 * The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:
 * If Type(x) is Number, then
 * If x is +0 and y is −0, return true.
 * If x is −0 and y is +0, return true.
 */


//LS solution
function negative(number) {
  return Math.abs(number) * -1;
}