/**
 * Log all odd numbers from 1 to 99, inclusive, to the console,
 * with each number on a separate line.
 */

let num = 1;
while (num < 100) {
  console.log(num);
  num += 2;
}

//Alternative solution
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

//Further exploration
let readlineSync = require("readline-sync");
let upperLimit = parseInt(readlineSync.question("Enter upper limit:"));

for (let i = 1; i < upperLimit; i += 2) {
  console.log(i);
}

// LS solution
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
