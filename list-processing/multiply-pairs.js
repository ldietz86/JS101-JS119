/**
 * Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number
 * pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order. You may assume that neither argument will be an empty array.
 * 
 * Input: Two arrays 
 * Output: One array
 * Multiply each value from the first array with each value from the second array 
 * Return one array containing the products of all pairs between the two arrays, sorted in ascending numerical order
 * 
 * [2, 4], [4, 3, 1, 2] -> [8, 6, 2, 4, 16, 12, 4, 8] -> [2, 4, 4, 6, 8, 8, 12, 16]
 * 
 * Initialize an empty array to store the products of all combinations of number pairs
 * Use a nested for loop to iterate over the first and second array 
 * The outer loop will iterate over the elements in the first array and the inner loop will iterate over the elements in the second array
 * Multiply the current element from the first array with that of the second array and push the product to the empty array 
 * Return the sorted array of products
 */

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      products.push(arr1[i] * arr2[j]);
    }
  }
  return products.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]

//Alternative solution
function multiplyAllPairs(arr1, arr2) {
  return arr1
    .map((num) => arr2.map((num2) => num * num2))
    .flat()
    .sort((a, b) => a - b);
}

//LS solution
function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach((number1) => {
    array2.forEach((number2) => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}
