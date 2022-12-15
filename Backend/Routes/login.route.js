const { Router } = require("express");
const { UserModel } = require("../Models/User.model");
const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.find({ email, password });
    if (user.length > 0) {
      res.status(200).send({ msg: "Login successfull" });
    } else {
      res
        .status(404)
        .send({ msg: "Login faild please try again with correct credetial" });
    }
  } catch (err) {
    res.status(502).send({ msg: "something went wrong" });
  }
});
module.exports = { loginRouter };
