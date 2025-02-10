/**
 * Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions.
 * The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object.
 * A movement value of 'out' will decrease the item's quantity. You may (and should) use the transactionsFor function from the previous exercise.
 *
 * Input: number and array
 * Output: boolean
 * If inventory id is found and movement in is greater than movement out, return true.
 *
 * Save the return value from transactionsFor to a variable
 * Declare a quantity variable and set it to 0
 * Loop over the filtered transactions
 * Use a conditional to check if the movement is 'in'
 * If it is, add that number to the quantity variable
 * If not, subtract that number from the quantity variable
 * Return true or false based on whether the final quantity is greater than 0
 */

function transactionsFor(id, arr) {
  let transactionsArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      transactionsArr.push(arr[i]);
    }
  }

  return transactionsArr;
}

function isItemAvailable(id, arr) {
  let transactions = transactionsFor(id, arr);
  let quantity = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].movement === "in") {
      quantity += transactions[i].quantity;
    } else {
      quantity -= transactions[i].quantity;
    }
  }

  return quantity > 0;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true

//Alternative solution using forEach
function isItemAvailable(id, arr) {
  let transactions = transactionsFor(id, arr);
  let quantity = 0;

  transactions.forEach(({ movement, quantity: qty }) => {
    quantity += movement === "in" ? qty : -qty;
  });

  return quantity > 0;
}

//Alternative solution using reduce
function isItemAvailable(id, arr) {
  let transactions = transactionsFor(id, arr);

  let quantity = transactions.reduce((acc, { movement, quantity: qty }) => {
    return movement === "in" ? acc + qty : acc - qty;
  }, 0);

  return quantity > 0;
}

//LS solution
function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}
