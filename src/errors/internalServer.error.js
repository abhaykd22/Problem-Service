const BaseError = require("./baseError");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor() {
    super(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong`,
      {}
    );
  }
}

module.exports = InternalServerError;
