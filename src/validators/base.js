const { validationResult } = require('express-validator');

const validate = (req) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new Error({message: 'BadRequest', name: 'BadRequest'});
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  validate,
};
