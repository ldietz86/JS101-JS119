/**
 * Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
 */

function getAge(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min); //Include + 1 to ensure the max value is included in the possible outcomes
}

let age = getAge(20, 120);

console.log(`Teddy is ${age} years old!`);
