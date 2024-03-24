const ProblemRouter = require("express").Router();
const { problemController } = require("../../controllers/index");

ProblemRouter.get("/ping", function (req, res) {
  res.json({ msg: "ping is coming" });
});
ProblemRouter.get("/:id", problemController.getProblem);
ProblemRouter.get("/", problemController.getProblems);
ProblemRouter.post("/", problemController.addProblem);
ProblemRouter.delete("/:id", problemController.deleteProblem);
ProblemRouter.put("/:id", problemController.updateProblem);

module.exports = ProblemRouter;
