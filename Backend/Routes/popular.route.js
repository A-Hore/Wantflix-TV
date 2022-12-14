const { Router } = require("express");
const { PopularModel } = require("../Models/Popular.model");
const popularRouter = Router();
popularRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await PopularModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { popularRouter };