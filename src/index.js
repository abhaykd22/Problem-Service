const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use("/api", apiRouter);
app.get("/ping", function (req, res) {
  res.json({ msg: "server is running" });
});
app.use(errorHandler);

app.listen(PORT, async function () {
  console.log(`server is running on port ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to db");
});
