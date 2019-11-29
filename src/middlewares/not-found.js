const { NotFoundError } = require('../errors');

module.exports = (req, res, next) => {
  const err = new NotFoundError({
    message: 'Not found',
    errors: {},
  });

  next(err);
};
