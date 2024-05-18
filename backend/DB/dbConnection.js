const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successfull");
  } catch (err) {
    console.log("Error connectin DB", err.message);
  }
};

module.exports = dbConnection;
