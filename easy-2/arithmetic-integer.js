/**
 * Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers:
 * addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
 */

let readlineSync = require("readline-sync");

let firstNum = parseInt(readlineSync.prompt("Enter the first number: "));
let secondNum = parseInt(readlineSync.prompt("Enter the second number: "));

console.log(`${firsNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`${firsNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`${firsNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`${firsNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`);
console.log(`${firsNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`${firsNum} ** ${secondNum} = ${Math.pow(firstNum, secondNum)}`);
