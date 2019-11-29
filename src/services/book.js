const { books } = require('../database/models');
const { getPaginationQuery } = require('../database/pagination');
// const { validate } = require('../validators/base');

const findById = (id) => {
  return books.findByPk(id);
};

const findAll = ({query}) => {
  try {
    // validate(req);

    const { limit, offset } = getPaginationQuery(query);

    return books.findAndCountAll({
      limit,
      offset,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findById,
  findAll,
};
