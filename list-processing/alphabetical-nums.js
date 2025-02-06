/**
 * Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number.
 *
 * Input: Array of numbers between 0 and 19
 * Output: Array of numbers sorted alphabetically based on their English word equivalents
 *
 * Create an array with the English word equivalents from 0-19
 * Map each number to its corresponding word
 * Sort the words array using the sort() method which sorts strings in lexicographical order
 * Map each word back to its corresponding index and return the array of numbers
 */

function alphabeticNumberSort(arr) {
  let numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  let wordsArray = arr.map((num) => {
    return numberWords[num];
  });

  let sortedWords = wordsArray.sort();

  let sortedNumbers = sortedWords.map((word) => {
    return numberWords.indexOf(word);
  });

  return sortedNumbers;
}

alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

//LS solution
const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

/**
 * A negative value indicates that a should come before b.
 * A positive value indicates that a should come after b.
 * Zero or NaN indicates that a and b are considered equal.
 */
