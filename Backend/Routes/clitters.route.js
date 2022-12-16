const { Router } = require("express");
const {ClitterModel } = require("../Models/Clitters.model");
const clitterRouter = Router();
clitterRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await ClitterModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { clitterRouter};