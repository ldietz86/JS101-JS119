/**
 * Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
 */

function swapCase(str) {
  let camelCase = "";

  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toLowerCase()
      ? (camelCase += str[i].toUpperCase())
      : (camelCase += str[i].toLowerCase());
  }

  return camelCase;
}

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"

//Solution using map
function swapCase(str) {
  return str
    .split("")
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
}
