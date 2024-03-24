const ProblemRouter = require("./problem.route");
const v1Router = require("express").Router();

v1Router.use("/problems", ProblemRouter);

module.exports = v1Router;
