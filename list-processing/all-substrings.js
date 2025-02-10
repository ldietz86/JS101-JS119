/**
 * Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins.
 * This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on.
 * Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.
 * You may (and should) use the leadingSubstrings function you wrote in the previous exercise:
 */

function leadingSubstrings(str) {
  let result = [];

  for (let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i));
  }
  return result;
}

function substrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    substrings.push(leadingSubstrings(str.slice(i)));
  }
  return substrings.flat();
}

substrings("abcde");

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];

//Alternative solution
function substrings(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      newArr.push(str.slice(i, j));
    }
  }
  return newArr;
}

/**
 * Rewrite substrings using list processing functions. That is, convert the string into an array of some sort
 * and use functions like map, filter, or reduce to get the desired substrings. (You will also need to use join.)
 * Try not to use forEach as that is too similar to the for loop approach.
 */

function substrings(str) {
  let substrings = str.split("").map((_, i) => leadingSubstrings(str.slice(i)));
  return substrings.flat();
}

function substrings(str) {
  return [...str].reduce((acc, _, i) =>
    acc.concat(leadingSubstrings(str.slice(i)))
  );
}

//LS solution
function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
