/**
 * Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
 */

function staggeredCase(str) {
  let staggeredStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      staggeredStr += str[i].toLowerCase();
    } else {
      staggeredStr += str[i].toUpperCase();
    }
  }
  return staggeredStr;
}

staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"

//Alternative solution
function staggeredCase(string) {
  let chars = string.split("");
  for (let i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
    chars[i + 1] = chars[i + 1].toLowerCase();
  }
  return chars.join("");
}

//LS solution
function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}
