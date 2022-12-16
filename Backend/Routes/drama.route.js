const { Router } = require("express");
const {DramaModel } = require("../Models/Drama.model");
const dramaRouter = Router();
dramaRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await DramaModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { dramaRouter};