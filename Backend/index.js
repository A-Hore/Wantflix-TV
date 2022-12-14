const express = require("express");
const { connection } = require("./Config/db");
const { currentRouter } = require("./Routes/current.router");

require("dotenv").config();

const app = express();
app.use(express.json());

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
