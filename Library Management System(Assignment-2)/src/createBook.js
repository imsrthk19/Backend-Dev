// src/createBook.js
import fs from "fs";
function createBook(bookId, title, author, price) {
  try {
    let books = [];
    if (fs.existsSync("books.json")) {
      books = JSON.parse(fs.readFileSync("books.json", "utf-8"));
    }
    let newBook = {
      bookId,
      title,
      author,
      price
    };

    books.push(newBook);

    fs.writeFileSync("books.json", JSON.stringify(books, null, 2));

    return "Book added successfully!";
  } catch (error) {
    console.log("Error in createBook:", error);
  }
}

export default createBook;
