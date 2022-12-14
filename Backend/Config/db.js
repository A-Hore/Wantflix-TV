const mongoose = require("mongoose");

require("dotenv").config();
const connection = mongoose.connect();
module.exports = { connection };
