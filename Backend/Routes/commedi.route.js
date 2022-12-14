const { Router } = require("express");
const { CommediModel } = require("../Models/Commedi.model");
const commediRouter = Router();
commediRouter.get("/", async (req, res) => {
  try {
    let commediMovie = await CommediModel.find();
    // console.log(commediMovie);
    res.send(commediMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});
module.exports = { commediRouter };
