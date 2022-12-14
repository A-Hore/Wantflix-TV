const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.DB_URL);
module.exports = { connection };
