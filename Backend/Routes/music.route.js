const { Router } = require("express");
const { MusicModel } = require("../Models/Musical.model");
const musicRouter = Router();
musicRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await MusicModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
    console.log(currentMovie)
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { musicRouter};