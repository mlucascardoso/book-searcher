const notFoundMiddleware = require('./not-found');
const { buildFailureResponse, buildSuccessResponse } = require('./response');

module.exports = {
  notFoundMiddleware,
  buildFailureResponse,
  buildSuccessResponse,
};
