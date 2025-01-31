/**
 * Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array.
 * Put the first half of the original array elements in the first element of the return value, and put the second half in the second element.
 * If the original array contains an odd number of elements, place the middle element in the first half array.
 *
 * Input: 1D array
 * Output: 2D array
 * Requirements:
 * Split the values of a one dimensional array into two
 * If array.length is odd, place middle element in first array and remainder
 * of elements in second array
 * If array.length is even, split array evenly
 *
 * Algorithm:
 * Find the middle index using Math.ceil
 * Create variables to store the first half and second half of array
 * Use array.slice() to split the array into two chunks
 * return a nested array
 */

function halvsies(arr) {
  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 1) {
    let firstHalf = arr.slice(0, mid + 1);
    let secondHalf = arr.slice(mid + 1);

    return [firstHalf, secondHalf];
  } else {
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);

    return [firstHalf, secondHalf];
  }
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]

//Alternative solutions
function halvsies(arr) {
  return [arr.splice(0, Math.ceil(arr.length / 2)), arr];
}

function halvsies(arr) {
  let newArr = [];
  while (newArr.length < arr.length) {
    newArr.push(arr.shift());
  }
  return [newArr, arr];
}

function halvsies(arr) {
  let mid = Math.floor(arr.length / 2);

  let firstHalf = arr.slice(0, mid + (arr.length % 2));
  let secondHalf = arr.slice(mid + (arr.length % 2));

  return [firstHalf, secondHalf];
}

//LS solution
function halvsies(arr) {
  let mid = Math.ceil(arr.length / 2);

  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);

  return [firstHalf, secondHalf];
}
