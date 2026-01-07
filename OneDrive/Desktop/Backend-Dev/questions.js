// 1. Create an object student with properties name, age, and grade
const student = {
    name: "Sarthak",
    age: 22,
    grade: "A"
};
console.log(student);


// 2. Add a new property country to an existing object person
let person = {
  name: "Amit",
  age: 21
};
person.country = "India";
console.log(person);

// 3. Access and print the value of city from a nested object address
let address = {
  street: "Chowk",
  city: "Lucknow",
  state: "Uttar Pradesh"
};
console.log(address.city);

// 4. Convert a string "javascript" to uppercase
let str1 = "javascript";
console.log(str1.toUpperCase());

// 5. Find the length of the string "Hello World"
let str2 = "Hello World";
console.log(str2.length);

// 6. Join two strings "Hello" and "JavaScript" with a space
let result = "Hello" + " " + "JavaScript";
console.log(result);

// 7. Check whether the string "Coding is fun" contains the word "fun"
let str3 = "Coding is fun";
console.log(str3.includes("fun"));

// 8. Count the number of characters in "Hello JS" excluding spaces
let str4 = "Hello JS";
let count = str4.replace(" ","").length;
console.log(count);

// 9. Convert an object into a JSON string
let obj = {
  name: "Amit",
  age: 21
};
let JSONString = JSON.toString(obj);
console.log(JSONString);
