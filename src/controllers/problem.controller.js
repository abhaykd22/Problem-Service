const express = require("express");
const { StatusCodes } = require("http-status-codes");

function addProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ success: false, msg: "Not implemented" });
}

function getProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ success: false, msg: "Not implemented" });
}

function getProblems(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ success: false, msg: "Not implemented" });
}

function deleteProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ success: false, msg: "Not implemented" });
}

function updateProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ success: false, msg: "Not implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
