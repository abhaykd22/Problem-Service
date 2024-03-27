const BaseError = require("./baseError");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad request",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${propertyName} provided`,
      details
    );
  }
}

module.exports = BadRequest;
