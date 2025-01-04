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

let areaInMeters = (length * width).toFixed();
let areaInFeet = (10.7639 * areaInMeters).toFixed();

console.log(
  `The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`
);
