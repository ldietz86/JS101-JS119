/**
 * The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight.
 * If the number of minutes is negative, the time is before midnight. Write a function that takes a time using this minute-based format and returns the time
 * of day in 24 hour format (hh:mm). Your function should work with any integer input. You may not use javascript's Date class methods.
 *
 * Input: Number
 * Output: String
 * 
 * Positive number = after midnight
 * Negative number = before midnight
 * Accept a positive or negative integer as an argument and return the time of day in 24-hour format (hh:mm).
 */

const MINUTES_PER_DAY = 1440;

function timeOfDay(minutes) {
  let remainder = minutes % MINUTES_PER_DAY;
  minutes = (remainder + MINUTES_PER_DAY) % MINUTES_PER_DAY;

  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;

  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

//Further exploration
const MINUTES_PER_DAY = 1440;
const DAYS_IN_WEEK = 7;

function timeOfDayFE(deltaMinutes) {
  deltaMinutes =
    ((deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;

  const hours = Math.floor(deltaMinutes / 60);
  const minutes = deltaMinutes % 60;

  const currentDay = new Date().getDay();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][(currentDay + Math.floor(deltaMinutes / MINUTES_PER_DAY)) % DAYS_IN_WEEK];

  return `${dayOfWeek} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

//LS solution
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}
