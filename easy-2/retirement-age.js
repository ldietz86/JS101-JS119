/**
 * Build a program that logs when the user will retire and how many more years the user has to work until retirement.
 *
 * What is your age? 30
 * At what age would you like to retire? 70
 * It's 2017. You will retire in 2057.
 * You have only 40 years of work to go!
 */

let readlineSync = require("readline-sync");
let age = parseInt(readlineSync.question("What is your age\n"));
let retirementAge = parseInt(
  readlineSync.question("What age would you like to retire?\n")
);

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let yearsLeftToWork = retirementAge - age;
let yearOfRetirement = currentYear + yearsLeftToWork;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}`);
console.log(`You have only ${yearsLeftToWork} years of work to go!`);

/**
 * Further exploration 
 * If you don't include the new keyword, you wouldn't be creating a new instance of the Date() object and wouldn't have access to the methods associated with this object.
 * Instead, you would be assigning the current date and time as a string to currentDate. Attempting to use .getFullYear() on a string will result in a TypeError (currentDate.getFullYear() is not a function).
 */
