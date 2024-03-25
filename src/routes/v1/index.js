const problemRouter = require("./problem.route");
const v1Router = require("express").Router();

v1Router.use("/problems", problemRouter);

module.exports = v1Router;
