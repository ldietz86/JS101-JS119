/**
 * Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
 *
 * Input: number and count
 * Output: rotated number
 *
 * Convert input number to a string and split it into individual characters
 * Remove 1 character at -count using splice() and save it to a variable
 * splice() returns an array containing the deleted elements
 * Push the deleted element to the original array of characters as a string
 * Join the array into one string and convert to a number
 */

function rotateRightmostDigits(num, count) {
  let arr = num.toString().split("");
  let el = arr.splice(-count, 1);
  arr.push(el.toString());

  return Number(arr.join(""));
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917

//Alternative solution
function rotateRightmostDigits(number, count) {
  let arr = String(number).split("");
  let last = arr.splice(arr.length - count, 1);
  arr.push(last);
  return Number(arr.join(""));
}

//LS solution
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
