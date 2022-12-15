const { Router } = require("express");
const {Prime} =require('../Models/Premium.model')
const premiumRouter = Router();
premiumRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await Prime.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { premiumRouter}
