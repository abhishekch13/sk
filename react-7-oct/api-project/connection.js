const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/react-project-batch-abhi");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error in connecting the DB", error);
  }
}

module.exports = connect;
