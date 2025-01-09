/**
 * Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
 */

function getAge(max, min) {
  let age = Math.floor(Math.random() * (max - min) + min);
  console.log(`Teddy is ${age} years old!`);
}

getAge(121, 20);
