/**
 * A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433,
 * and 107 are not. Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.
 */

//Using string manipulation
function twice(num) {
  let strNum = String(num);

  if (strNum.length % 2 === 0) {
    let mid = strNum.length / 2;
    let leftSide = strNum.slice(0, mid);
    let rightSide = strNum.slice(mid);

    if (leftSide === rightSide) {
      return num;
    }
  }
  return num * 2;
}

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676

//Alternative solution using every()
function twice(num) {
  let numArr = Array.from(String(num), Number);

  let mid = numArr.length / 2;

  let leftSide = numArr.slice(0, mid);
  let rightSide = numArr.slice(mid);

  if (leftSide.every((value, index) => value === rightSide[index])) {
    return num;
  } else {
    return num * 2;
  }
}

//LS solution
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}
