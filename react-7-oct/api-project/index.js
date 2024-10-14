const express = require("express");
const cors = require("cors");
const user = require("./routes/user");
const book = require("./routes/book");
const connect = require("./connection");
const app = express();
connect();

// * here we are using the routes and cors
app.use(cors());
app.use(user);
app.use(book);
// Start the server on port 3000 and handle any errors that may occur during the startup process.
app.listen(3000, (error) => {
  if (error) {
    console.log("Error starting server", error);
  } else {
    console.log("Server is running on port 3000");
  }
});
