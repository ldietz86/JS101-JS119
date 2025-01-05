/**
 * Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the
 * shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths. Write a function that
 * takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string,
 * and the shorter string once again. You may assume that the strings are of different lengths.
 */

function shortLongShort(strOne, strTwo) {
  let strOneLength = strOne.length;
  let strTwoLength = strTwo.length;

  let newStr = "";

  if (strOneLength > strTwoLength) {
    newStr += strTwo + strOne + strTwo;
  } else {
    newStr += strOne + strTwo + strOne;
  }
  return newStr;
}

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"

//LS solution
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}
