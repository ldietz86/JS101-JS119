/**
 * Write a program that will ask for user's name. The program will then greet the user.
 * If the user writes "name!" then the computer yells back to the user.
 *
 * P
 * Input: String 
 * Output: String 
 * Requirements:
 * Ask the user to input their name
 * If they include '!' after the name, output a greeting in all caps.
 * E
 * What is your name? Bob! //HELLO BOB. WHY ARE WE SCREAMING?
 * D
 * A
 * Use the readline-sync question method to ask the user for their name.
 * Check if the name ends in '!' (I used includes() but this can also be done using endsWith())
 * If it does, make the sentence uppercase using toUpperCase().
 */

let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?");

function greetUser(name) {
  return name.includes("!")
    ? `Hello ${name} Why are we screaming`.toUpperCase()
    : `Hello ${name}.`;
}

//LS solution
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name? ");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}