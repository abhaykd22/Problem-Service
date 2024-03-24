const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);
app.get("/ping", function (req, res) {
  res.json({ msg: "server is running" });
});

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
