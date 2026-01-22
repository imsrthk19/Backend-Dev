// Question-1: Create a Node.js program that reads a text file,counts the number of words ,and writes the count to a new file.

const fs = require("fs");
fs.readFile("inputFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  let wordCount = 0;
  if (data.trim().length > 0) {
    wordCount = data.trim().split(/\s+/).length;
  }

  fs.writeFile("outputFile.txt", `Total No of words: ${wordCount}`, (err) => {
    if (err) {
      console.error("Error writing file:", err.message);
      return;
    }
    console.log("Word count written successfully");
  });
});