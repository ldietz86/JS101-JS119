/**
 * Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit.
 * The output array is such that each fruit name appears the number of times equal to its desired quantity. In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
 *
 * Input: 2D array
 * Output: 1D array
 * Nested array contains a string and number. [[str, num], [str, num]] We want to repeat each string n times and return a single array.
 *
 *
 */

function buyFruit(nestedArr) {
  let newArr = [];

  nestedArr.forEach(([fruit, quantity]) => {
    [...Array(quantity)].forEach(() => {
      newArr.push(fruit);
    });
  });

  return newArr;
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

//Alternative solutions
function buyFruit(arr) {
  let groceryList = [];

  for (let [fruit, quantity] of arr) {
    for (let i = 1; i <= quantity; i++) {
      groceryList.push(fruit);
    }
  }

  return groceryList;
}

function buyFruit(nestedArr) {
  let newArr = [];

  nestedArr.forEach(([fruit, quantity]) => {
    let tempArr = new Array(quantity);
    tempArr.forEach(() => newArr.push(fruit));
  });

  return newArr;
}

//LS solution
function buyFruit(fruitsList) {
  return fruitsList
    .map((fruit) => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}
