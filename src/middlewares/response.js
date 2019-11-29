const { getPaginationPages } = require('../database/pagination');

const buildFailureResponse = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    statusCode: err.status,
    message: err.message,
    errors: err.errors,
  });
};

const buildSuccessResponse = (req, res, next) => {
  if (!res.data) {
    return next();
  }

  if (res.data.rows) {
    return getPaginatedResult(req, res);
  }

  return getSingleResult(res);
};

const getSingleResult = (res) => {
  res.status(res.statusCode);
  res.json({
    statusCode: res.statusCode,
    results: res.data,
  });
};

const getPaginatedResult = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 1;
  const count = res.data.count;
  const url = req.originalUrl;
  const host = 'http://' + req.headers.host;
  const pagination = getPaginationPages({page, limit, count, url, host});

  res.status(res.statusCode);
  res.json({
    statusCode: res.statusCode,
    count,
    results: res.data.rows,
    pagination,
  });
};

module.exports = {
  buildFailureResponse,
  buildSuccessResponse,
};
