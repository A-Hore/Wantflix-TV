const { Router } = require("express");
const { Total } = require("../Models/Total.model");
const totalRouter = Router();
totalRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await Total.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

totalRouter.get("/search", async (req, res) => {
 let params = capitalizeFirstLetter(req.query.title);
  console.log(params,"Line 21")

  let data = await Total.findOne({Title:params});
  console.log(data)

  try {
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { totalRouter };
