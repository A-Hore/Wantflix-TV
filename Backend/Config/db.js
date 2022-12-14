const mongoose = require("mongoose");

require("dotenv").config();
const connection = mongoose.connect(
  "mongodb+srv://praful:praful@cluster0.q1wzc7s.mongodb.net/appleTv?retryWrites=true&w=majority"
);
module.exports = { connection };
