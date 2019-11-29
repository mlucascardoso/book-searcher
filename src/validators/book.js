const { query } = require('express-validator');

const findAllValidator = () => {
  return [
    query('title').isEmpty().isLength({min: 5}),
  ];
};

module.exports = {
  findAllValidator,
};
