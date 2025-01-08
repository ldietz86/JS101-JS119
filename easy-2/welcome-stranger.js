/**
 * Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces,
 * will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting
 * that uses the person's full name, and mentions the person's title.
 *
 * P
 * Input: Array and Object
 * Ouput: String
 * Requirements:
 * Array contains two or more name values that need to be combined into a single string with spaces.
 * Object contains two keys: "title" and "occupation" with corresponding values.
 * Return a greeting with person's full name followed by their title and occupation.
 * E
 * console.log(greetings(["Laila", "M", "Hansen"], { title: "Executive", occupation: "Chef" })); // Hi, Laila M Hansen! I'm excited to learn about your journey to becoming the Executive Chef.
 * D
 * A
 * Concatenate the values from the array into a string.
 * Use dot notation to retrieve the title and occupation from the object.
 * Return the greeting using a template literal.
 */

function greetings(arr, obj) {
  let name = arr.join(" ");
  let title = obj.title;
  let occuptaion = obj.occupation;

  return `Hi, ${name}! I'm excited to learn about your journey to becoming the ${title} ${occupation}.`;
}

//LS solution
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
