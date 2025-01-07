/**
 * In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100.
 * If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400. Assume this rule is valid for any year
 * greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.
 *
 * P
 * Input: Integer > 0
 * Output: Boolean
 * Requirements:
 * A year is a leap year if it is evenly divisible by 4 and not divisible by 100.
 * A year is a leap year if it is evenly divisible by 400.
 * A year is not a leap year if it not evenly divisible by 4.
 * A year is not a leap year if it evenly divisible by 100 but not divisible by 400.
 * E
 * 2020 / 4 = 505 --> leap year
 * 2020 / 100 = 20.2 --> leap year
 * 2020 / 400 = 5.05 --> not a leap year
 * D
 * A
 * Is the year divisible by 4 with no remainder? YES --> continue to next if block. NO --> not leap
 * Is the year divisible by 100 with no remainder? YES --> continue to next if block. NO --> leap
 * Is the year divisible by 400 with no remainder? YES --> leap year. NO --> not leap.
 *
 */

function isLeapYear(year) {
  if (year > 0) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    }
    return false;
  }
  console.log("The year you entered is invalid.");
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false

//Further exploration
function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

// This function will fail for years evenly divisible by 100, 400 and 4.

//Alternative solution
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}

//LS solution
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
