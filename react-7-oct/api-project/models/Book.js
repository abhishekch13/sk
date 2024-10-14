const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookName: {
    type: String
  },
  ISBN: {
    type: String
  },
  publication: {
    type: String
  },
  author: {
    type: String
  },
  edition: {
    type: String
  }
});

module.exports = mongoose.model("Book", BookSchema);
