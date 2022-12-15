const mongoose = require("mongoose");
const currenSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Year: { type: String, required: true },
  Rated: { type: String, required: true },
  Released: { type: String, required: true },
  Runtime: { type: String, required: true },
  Genre: { type: String, required: true },
  Director: { type: String, required: true },
  Writer: { type: String, required: true },
  Actors: { type: String, required: true },
  Plot: { type: String, required: true },
  Language: { type: String, required: true },
  Country: { type: String, required: true },
  Awards: { type: String, required: true },
});
const HistoricalModel = mongoose.model("historical", currenSchema);
module.exports = { HistoricalModel };