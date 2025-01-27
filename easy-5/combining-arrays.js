/**
 * Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two.
 * There should be no duplication of values in the returned array, even if there are duplicates in the original arrays.
 * You may assume that both arguments will always be arrays.
 */

function union(arr1, arr2) {
  let mergedArr = [...arr1, ...arr2];
  let uniqueArr = [];

  for (let i = 0; i < mergedArr.length; i++) {
    if (!uniqueArr.includes(mergedArr[i])) {
      uniqueArr.push(mergedArr[i]);
    }
  }

  return uniqueArr;
}

union([1, 3, 5], [3, 5, 6, 9]); // [1, 3, 5, 6, 9]

//Alternative solutions
function union(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

function union(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  return mergedArray.filter(
    (item, index) => mergedArray.indexOf(item) === index
  );
}

function union(arr1, arr2) {
  let unique = {};
  [...arr1, ...arr2].forEach((elem) => (unique[elem] = 1));
  return Object.keys(unique).map((strNum) => Number(strNum));
}

//LS solution
function copyNonDupsTo(resultArray, array) {
  array.forEach((value) => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}
