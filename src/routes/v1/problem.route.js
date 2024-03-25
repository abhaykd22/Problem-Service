const problemRouter = require("express").Router();
const { problemController } = require("../../controllers/index");
problemRouter.get("/ping", function (req, res) {
  res.json({ msg: "ping is coming" });
});

problemRouter.get("/:id", problemController.getProblem);
problemRouter.get("/", problemController.getProblems);
problemRouter.post("/", problemController.addProblem);
problemRouter.delete("/:id", problemController.deleteProblem);
problemRouter.put("/:id", problemController.updateProblem);

module.exports = problemRouter;
