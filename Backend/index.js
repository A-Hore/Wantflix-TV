const express = require("express");
const { connection } = require("./Config/db");
const { commediRouter } = require("./Routes/commedi.route");
const { currentRouter } = require("./Routes/current.router");
const { featuredRouter } = require("./Routes/featured.route");
const { historiaclRouter } = require("./Routes/historical.route");
const { originalRouter } = require("./Routes/original.route");
const { popularRouter } = require("./Routes/popular.route");
const {  premiumRouter } = require("./Routes/premium.route");

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
app.use("/comedy" , commediRouter)
app.use("/featured", featuredRouter)
app.use("/historical", historiaclRouter)
app.use("/original",originalRouter)
app.use("/popular", popularRouter)
app.use("/premium",premiumRouter)
