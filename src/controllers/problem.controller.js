const express = require("express");
const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");

function addProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (err) {
    next(err);
  }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplemented("getProblem");
  } catch (err) {
    next(err);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("getProblems");
  } catch (err) {
    next(err);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("deleteProblem");
  } catch (err) {
    next(err);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("updateProblem");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
