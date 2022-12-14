const { Router } = require("express");
const { HistoricalModel } = require("../Models/Historical.model");
const historiaclRouter = Router();
historiaclRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await HistoricalModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { historiaclRouter };
