const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bookcontroller = require("../controllers/bookcontroller");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/add/book", (req, res) => {
  console.log("we have successfully added a book!");
  bookcontroller.addBook(req, res);
});
module.exports = router;
