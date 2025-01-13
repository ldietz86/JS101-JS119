/**
 * Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the
 * triangle should have one end at the lower-left of the triangle, and the other end at the upper-right.
 */

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}

//Alternative solution
function triangle(int) {
  for (let i = 1; i <= int; i += 1) {
    console.log("*".repeat(i).padStart(int));
  }
}

//LS solution
function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}
