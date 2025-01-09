/**
 * In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.
 *  Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
 *
 * Input: Number, Boolean
 * Output: Boolean
 * Requirements:
 * Return true if one argument is truthy, false otherwise.
 *
 * Ex)
 * console.log(xor(1, 1)); // false, both args are truthy
 * console.log(xor(1, 0)); // true, only one arg is truthy
 *
 * Algorithm:
 * First argument is truthy --> check if second argument is falsy --> if it is, return true, if not, return false.
 * First argument is falsy --> check if second argument is truthy --> if it is, return true. Else, return false.
 *
 */

function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  } else {
    return false;
  }
}

//Further exploration - xor function would be useful for traffic lights, short-circuit evaluation would not make sense because both arguments need to be checked to ensure that exactly one is truthy.

//Alternative solution
function xor(arg1, arg2) {
  return (arg1 || arg2) && !(arg1 && arg2);
}

//LS solution
function xor(value1, value2) {
  return Boolean((value1 && !value2) || (value2 && !value1));
}

/**
 * Note about ^ operator:
 * The ^ operator is a bit-wise operator for performing exclusive-or bit operations. In some cases, you can use ^ as an exclusive-or operator. 
 * However, it only works properly when both values are numeric or both are boolean -- anything else may lead to unexpected results. 
 * For instance, you might expect the following expression to return a truthy value. Instead, it returns a falsy value (0).
 */

"a" ^ false;

