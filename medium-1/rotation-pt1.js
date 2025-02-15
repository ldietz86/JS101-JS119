/**
 * Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
 * - If the input is not an array, return undefined.
 * - If the input is an empty array, return an empty array.
 *
 * Review the test cases below, then implement the solution accordingly.
 *
 * Array.isArray() can be used to check whether the passed value is an array (use this in combination with the logical not operator to check if the input is not an array)
 * Declare a variable to store a copy of the input array. Use arr.slice() to return a shallow copy of the input array
 * Declare another variable to store the first element and use shift() to remove the element at the zeroth index.
 * Return the copied array.
 */

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let copy = arr.slice(); // or use spread syntax [...arr] to create a shallow copy 
  let firstEl = copy.shift();
  copy.push(firstEl);
  return copy;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
array; // [1, 2, 3, 4]

//Alternative solution
const rotateArray = (arr) => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return [...arr.slice(1), arr[0]];
};

//LS solution
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}
