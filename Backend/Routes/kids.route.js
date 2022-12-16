const { Router } = require("express");
const {KidModel } = require("../Models/Kids.model");
const kidRouter = Router();
kidRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await KidModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { kidRouter};