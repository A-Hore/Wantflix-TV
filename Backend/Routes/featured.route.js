const { Router } = require("express");
const { FeaturedModel } = require("../Models/Featured.model");
const featuredRouter = Router();
featuredRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await FeaturedModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { featuredRouter };
