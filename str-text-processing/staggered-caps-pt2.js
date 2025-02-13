/**
 * Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
 */

function staggeredCase(str) {
  let staggeredStr = "";
  let alphaIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      staggeredStr +=
        alphaIndex % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
      alphaIndex++;
    } else {
      staggeredStr += str[i];
    }
  }

  return staggeredStr;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

//LS solution
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map((char) => {
      char = char.toLowerCase();
      if (char >= "a" && char <= "z") {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}
