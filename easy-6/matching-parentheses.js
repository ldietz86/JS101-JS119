/**
 * Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise.
 * To be properly balanced, parentheses must occur in matching '(' and ')' pairs. Note that balanced pairs must each start with a (, not a ).
 * 
 * Input: String
 * Output: Boolean
 * Requirements:
 * Return true if parentheses are properly balanced/every opening parentheses has a corresponding closing parentheses.
 * Balanced pairs must each start with an opening parentheses not a closing parentheses. 
 * 
 * isBalanced("((Hello)) (World))!") = false  -> (()) ())  
 * isBalanced("((Hello)) ((World))!") = true --> (()) (())
 * 
 * Declare a counter to keep track of open vs closed parentheses
 * Loop over the string and check if the current element is an opening parentheses. If it is, increment the counter by 1. 
 * If not, check if the current element is a closing parentheses. If it is, decrement the counter by 1.
 * Use another if condition to check if the closing parentheses exceed the opening parentheses at any point.
 * Finally, return true if counter is equal to 0 -> parentheses are balanced
 */

function isBalanced(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      counter++;
    } else if (str[i] === ")") {
      counter--;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

//Alternative solution
function isBalanced(str) {
  let result = [];
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === "(") {
      result.push(str[i]);
    } else if (str[i] === ")") {
      if (result.includes("(")) {
        result.pop();
      } else {
        return false;
      }
    }
  }

  return result.length === 0 ? true : false;
}