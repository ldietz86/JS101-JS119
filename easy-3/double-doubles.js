/**
 * A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433,
 * and 107 are not. Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.
 */

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

//Using string manipulation:
function twice(num) {
  let numToStr = String(num);

  if (numToStr.length % 2 === 0) {
    let mid = numToStr.length / 2;
    let leftSide = numToStr.slice(0, mid);
    let rightSide = numToStr.slice(mid);

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
