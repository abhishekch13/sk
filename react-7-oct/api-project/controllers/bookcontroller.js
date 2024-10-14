const Book = require("../models/Book");

async function addBook(req, res) {
  try {
    console.log("imported body from reactJs", req.body);
    let book = new Book(req.body);
    await book.save();
    console.log("book added successfully");
    let books = await Book.find({});
    console.log(books,'books')
    res.status(200).send({success : true , message: 'data saved successfully', books: books});
  } catch (error) {
    console.error("check once again the addUser Function", error);
    res.status(400).send({success : false , message: 'something went wrong'});

  }
}

module.exports = { addBook };
