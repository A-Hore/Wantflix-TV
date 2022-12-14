const express = require("express");
const { connection } = require("./Config/db");
const { currentRouter } = require("./Routes/current.router");

require("dotenv").config();

const app = express();
app.listen(8080, async () => {
  try {
    await connection;

    console.log("connected to db");
    console.log("listening on port 8080");
  } catch (err) {
    console.log("error while connectoing to db");
    console.log(err);
  }
});
app.get("/", async (req, res) => {
  res.send("homepage");
});
app.use("/movies", currentRouter);
