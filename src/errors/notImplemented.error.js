const BaseError = require("./baseError");
const { StatusCodes } = require("http-status-codes");

class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
