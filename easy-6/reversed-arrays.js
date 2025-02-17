/**
 * Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method.
 * The return value should be the same Array object. You may not use Array.prototype.reverse().
 *
 * Input: Array
 * Output: Original array with values reversed
 * Requirements:
 * Must mutate and reverse elements in the original array rather than create a new array
 *
 * Loop over the array
 * Use the splice method to remove one element from the current index
 * Splice method always returns an array of deleted elements, so grab the first value using [0]
 * Declare a temporary variable to store this element 
 * Use unshift() to add the element to the beginning of the array
 * return the array 
 */

function reverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.splice(i, 1)[0];
    arr.unshift(temp);
  }
  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs

//Alternative solution
function reverse(arr) {
  let n = arr.length - 1;

  for (let i = 0; i <= n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
  }
  return arr;
}

//LS solution
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [
      array[rightIndex],
      array[leftIndex],
    ];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}


