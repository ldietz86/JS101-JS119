/**
 * Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
 * The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
 * You can ignore input validation and assume that the user will enter numbers.
 */
let readlineSync = require("readline-sync");

let billAmount = parseFloat(readlineSync.question("What is the bill?"));
let tipPercentage = parseInt(realineSync.question("What is the tip percentage?"));

let tip = billAmount * (tipPercentage / 100);

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total is ${(billAmount + tip).toFixed(2)}`);
