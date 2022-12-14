const { Router } = require("express");
const { CurrentModel } = require("../Models/Current.model");
const currentRouter = Router();
currentRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await CurrentModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { currentRouter };
