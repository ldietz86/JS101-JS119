/**
 * Write a program that asks the user to enter an integer greater than 0, then asks whether the user
 * wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
 */

let readlineSync = require("readline-sync");

let integer = parseInt(
  readlineSync.question("Please enter an integer greater than 0: ")
);

let userChoice = readlineSync
  .question("Enter 's' to compute the sum, or 'p' to compute the product. ")
  .toLowerCase();

let sum = 0;
let product = 1;

for (let i = 1; i <= integer; i++) {
  if (userChoice === "s") {
    sum += i;
  } else if (userChoice === "p") {
    product *= i;
  }
}

if (userChoice === "s") {
  console.log(`The sum of all numbers from 1 to ${integer} is: ${sum}`);
} else if (userChoice === "p") {
  console.log(`The product of all numbers from 1 to ${integer} is: ${product}`);
}

//Encapsulate logic into functions
let readlineSync = require("readline-sync");

let integer = parseInt(
  readlineSync.question("Please enter an integer greater than 0: ")
);

if (!isNaN(integer) && integer > 0) {
  let userChoice = readlineSync
    .question("Enter 's' to compute the sum, or 'p' to compute the product. ")
    .toLowerCase();

  function getSum(integer) {
    let sum = 0;
    for (let i = 1; i <= integer; i++) {
      sum += i;
    }
    return sum;
  }

  function getProduct(integer) {
    let product = 1;
    for (let i = 1; i <= integer; i++) {
      product *= i;
    }
    return product;
  }

  if (userChoice === "s") {
    let sum = getSum(integer);
    console.log(`The sum of all numbers from 1 to ${integer} is: ${sum}`);
  } else if (userChoice === "p") {
    let product = getProduct(integer);
    console.log(
      `The product of all numbers from 1 to ${integer} is: ${product}`
    );
  } else {
    console.log("Invalid entry. Please enter 's' for sum or 'p' for product.");
  }
} else {
  console.log("Invalid entry. Please enter an integer greater than 0.");
}

//Further exploration
let numsArr = [1, 2, 3, 4, 5, 6];

function getSum(numsArr) {
  return numsArr.reduce((sumArr, num) => {
    return sumArr + num;
  }, 0);
}

function getProduct(numsArr) {
  return numsArr.reduce((productArr, num) => {
    return productArr * num;
  }, 1);
}

console.log(getSum(numsArr)); //21
console.log(getProduct(numsArr)); //720
