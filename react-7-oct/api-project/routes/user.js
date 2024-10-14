const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const usercontroller = require("../controllers/usercontroller");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/add/user", (req, res) => {
  console.log("we have successfully added a user!");
  usercontroller.addUser(req, res);
});
module.exports = router;
