/**
 * Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with
 * 'st', 'nd', 'rd', or 'th' as appropriate for that number. New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
 *
 * Input: Number
 * Output: String
 * Requirements:
 * 1st century: 1 - 100.
 * 2nd century: 101 - 200.
 * 21 century: 2001 - 2100.
 *
 * st for numbers ending in 1, except for numbers ending in 11.
 * nd for numbers ending in 2, except for numbers ending in 12.
 * rd for numbers ending in 3, except for numbers ending in 13.
 * th for all other cases.
 *
 */

function century(year) {
  let century = Math.ceil(year / 100);

  let suffix = getSuffix(century);

  return `${century}${suffix}`;
}

function getSuffix(century) {
  if (century % 100 >= 11 && century % 100 <= 13) {
    return "th";
  }

  let lastDigit = century % 10;

  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

//LS solution
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return "th";
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
