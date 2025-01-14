/**
 * Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating a funny story as a result.
 * Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.
 */

let readlineSync = require("readline-sync");

let noun = readlineSync.prompt("Enter a noun: ");
let verb = readlineSync.prompt("Enter a verb: ");
let adjective = readlineSync.prompt("Enter an adjective: ");
let adverb = readlineSync.prompt("Enter an adverb: ");

console.log(`
Will you ${verb} your ${adjective} ${noun} ${adverb}? That's unfortunate.
The ${adjective} ${noun} ${verb}s ${adverb} around the snoozing turtle.
The ${noun} ${adverb} ${verb}s down the mountain. 
`);
