/**
 * Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of
 * each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
 */

function multiplyList(arr1, arr2) {
  let productArr = [];

  for (let i = 0; i < arr1.length; i++) {
    productArr.push(arr1[i] * arr2[i]);
  }
  return productArr;
}

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]

//Alternative solutions
function multiplyList(arr1, arr2) {
  return arr1.map((el, i) => el * arr2[i]);
}

function multiplyList(arr1, arr2) {
  return arr1.reduce((acc, currentVal, i) => {
    return acc.concat(currentVal * arr2[i]);
  }, []);
}

function multiplyList(arr1, arr2) {
  return arr1.reduce((newArr, _, i) => {
    newArr.push(arr1[i] * arr2[i]);
    return newArr;
  }, []);
}
