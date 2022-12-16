const express = require("express");
const { connection } = require("./Config/db");
const { commediRouter } = require("./Routes/commedi.route");
const { currentRouter } = require("./Routes/current.router");
const { featuredRouter } = require("./Routes/featured.route");
const { historiaclRouter } = require("./Routes/historical.route");
const { originalRouter } = require("./Routes/original.route");
const { popularRouter } = require("./Routes/popular.route");
const { premiumRouter } = require("./Routes/premium.route");
const { loginRouter } = require("./Routes/login.route");
const { signupRouter } = require("./Routes/signup.route");
const cors = require("cors");
const { totalRouter } = require("./Routes/total.route");
const { MusicModel } = require("./Models/Musical.model");
const { musicRouter } = require("./Routes/music.route");
const { clitterRouter } = require("./Routes/clitters.route");
const { dramaRouter } = require("./Routes/drama.route");
const { kidRouter } = require("./Routes/kids.route");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
})
);

app.get("/", async (req, res) => {
  res.send("homepage");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;

    console.log("connected to db");
    console.log("listening on port 8080");
  } catch (err) {
    console.log("error while connectoing to db");
    console.log(err);
  }
});

// ALL ROUTES

app.use("/current", currentRouter);
app.use("/comedy", commediRouter);
app.use("/featured", featuredRouter);
app.use("/historical", historiaclRouter);
app.use("/original", originalRouter);
app.use("/popular", popularRouter);
app.use("/premium", premiumRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/all", totalRouter)
app.use("/music", musicRouter)
app.use("/clitter",clitterRouter)
app.use("/drama", dramaRouter)
app.use("/kid",kidRouter)