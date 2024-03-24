const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/server.config");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.get("/ping", function (req, res) {
  res.json({ msg: "server is running" });
});

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
