const { Router } = require("express");
const { UserModel } = require("../Models/User.model");
const signupRouter = Router();

signupRouter.post("/", async (req, res) => {
  const { password, email, name } = req.body;
  try {
    let user = await UserModel.find({ email });
    if (user.length > 0) {
      res.send("user already present");
    } else {
      await new UserModel({ name, password, email }).save();
      res.send("sign up successfully");
    }
  } catch (err) {
    res.send({msg:"error while signup"});
    console.log(err)
  }
});
module.exports = { signupRouter };