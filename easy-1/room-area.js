/**
 * Build a program that asks the user to enter the length and width of a room in meters,
 * and then logs the area of the room to the console in both square meters and square feet.
 *
 * Note: 1 square meter == 10.7639 square feet
 * Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
 */

let readlineSync = require("readline-sync");
let length = parseFloat(
  readlineSync.prompt("Enter the length of the room in meters:")
);
let width = parseFloat(
  readlineSync.prompt("Enter the width of the room in meters:")
);

let areaInMeters = length * width;
let areaInFeet = 10.7639 * areaInMeters;

console.log(
  `The area of the room is ${areaInMeters.toFixed()} square meters (${areaInFeet.toFixed()} square feet).`
);

/**
 * Further exploration: Modify the program so that it asks the user for the input type (meters or feet).
 * Compute for the area accordingly, and log it and its conversion in parentheses.
 */

let readlineSync = require("readline-sync");
let length = parseFloat(
  readlineSync.prompt("Enter the length of the room in meters:")
);
let width = parseFloat(
  readlineSync.prompt("Enter the width of the room in meters:")
);

let areaInMeters = length * width;
let areaInFeet = 10.7639 * areaInMeters;

let inputType = readlineSync.prompt("Which unit is required (m or ft)?");

if (inputType.toLowerCase() === "m") {
  console.log(
    `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
  );
} else if (inputType.toLowerCase() === "ft") {
  console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`);
} else {
  console.log("Please enter a valid input type.");
}


//LS solution
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

console.log(
  `The area of the room is ${areaInMeters.toFixed(
    2
  )} square meters (${areaInFeet.toFixed(2)} square feet).`
);