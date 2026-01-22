const stringUtils = require("./stringUtils");
const text = "nodejs";
console.log("Capitalized String:", stringUtils.capitalize(text));
console.log("Reversed String:", stringUtils.reverseString(text));
console.log("Total Vowel Count:", stringUtils.countVowels(text));