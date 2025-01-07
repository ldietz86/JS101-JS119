/**
 * The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar.
 * Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.
 * Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
 */

function isLeapYear(year) {
  if (year < 1752) {
   return year % 4 === 0;
  }
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


//LS solution
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}