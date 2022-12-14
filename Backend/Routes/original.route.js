const { Router } = require("express");
const { OriginalModel } = require("../Models/Original.model");
const originalRouter = Router();
originalRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await OriginalModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { originalRouter };