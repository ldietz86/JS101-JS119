/**
 * Write a function that counts the number of occurrences of each element in a given array. Once counted, log
 * each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
 */

function countOccurrences(arr) {
  let obj = arr.reduce((wordFreq, word) => {
    if (wordFreq[word] == null) {
      wordFreq[word] = 1;
    } else {
      wordFreq[word] += 1;
    }
    return wordFreq;
  }, {});

  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

//Alternative solution
function countOccurrences(list) {
  const counter = {};

  list.forEach((el) => (counter[el] = counter[el] + 1 || 1));

  for (let key in counter) {
    console.log(`${key} => ${counter[key]}`);
  }
}

countOccurrences(vehicles);

//Further exploration
function countOccurrences(arr) {
  let obj = arr.reduce((wordFreq, word) => {
    if (wordFreq[word] == null) {
      wordFreq[word.toLowerCase()] = 1;
    } else {
      wordFreq[word.toLowerCase()] += 1;
    }
    return wordFreq;
  }, {});

  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`);
  }
}

//LS solution
function countOccurrences(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}
