/**
 * Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments,
 * with each element taken in alternation. You may assume that both input arrays are non-empty, and that they have the same number of elements.
 */

function interleave(arr1, arr2) {
  let newArr = [];
  let length = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < length; i++) {
    if (i < arr1.length) newArr.push(arr1[i]);
    if (i < arr2.length) newArr.push(arr2[i]);
  }
  return newArr;
}

interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]

//Alternative solution
function interleave(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i], arr2[i]);
  }
  return newArr;
}

//Further exploration
function interleave(arr1, arr2) {
  let newArr = [];

  arr1.forEach((el, i) => {
    newArr.push(el, arr2[i]);
  });
  return newArr;
}

function interleave(arr1, arr2) {
  return arr1.reduce((acc, currentVal, i) => {
    return acc.concat(currentVal, arr2[i]);
  }, []);
}

let interleave = (arr1, arr2) => [].concat(...arr1.map((el, i) => [el, arr2[i]]));
