// * Write a function that will take a short line of text, and write it to the console log within a box. You may assume that the output will always fit in your browser window.

function logInBox(str) {
  let boxLines = [];
  boxLines.push(`+${"-".repeat(str.length + 2)}+`);
  boxLines.push(`|${" ".repeat(str.length + 2)}|`);
  boxLines.push(`| ${str} |`);
  boxLines.push(`|${" ".repeat(str.length + 2)}|`);
  boxLines.push(`+${"-".repeat(str.length + 2)}+`);

  console.log(boxLines.join("\n"));
}

//LS solution
function logInBox(str) {
  let strLength = str.length;

  let border = `+${"-".repeat(str.length + 2)}+`;
  let emptyLine = `|${" ".repeat(str.length + 2)}|`;

  console.log(border);
  console.log(emptyLine);
  console.log(`| ${str} |`);
  console.log(emptyLine);
  console.log(border);
}

logInBox("To boldly go where no one has gone before.");
