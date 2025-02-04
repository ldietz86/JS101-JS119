/**
 * As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive,
 * the time is after midnight. If the number of minutes is negative, the time is before midnight. Write two functions that each take a time of day in 24 hour format,
 * and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.
 * You may not use javascript's Date class methods.
 */

const MIN_PER_DAY = 1440;
const MIN_PER_HOUR = 60;

function afterMidnight(str) {
  let hours = Number(str.split(":")[0]);
  let mins = Number(str.split(":")[1]);

  hours = hours * MIN_PER_HOUR;
  let minsAfterMidnight = hours + mins;
  return minsAfterMidnight;
}

function beforeMidnight(str) {
  let hours = Number(str.split(":")[0]);
  let mins = Number(str.split(":")[1]);

  hours = hours * MIN_PER_HOUR;
  let minsAfterMidnight = hours + mins;
  let minsBeforeMidnight = MIN_PER_DAY - minsAfterMidnight;
  return minsBeforeMidnight;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

//DRY implementation
const MIN_PER_DAY = 1440;
const MIN_PER_HOUR = 60;

function timeToMinutes(str) {
  const [hours, mins] = str.split(":").map(Number);
  return hours * MIN_PER_HOUR + mins;
}

function afterMidnight(str) {
  return timeToMinutes(str);
}

function beforeMidnight(str) {
  return MIN_PER_DAY - timeToMinutes(str);
}


//LS solution
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map((num) => Number(num));
  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
