// eslint-disable-next-line new-cap
const router = require('express').Router();

const { findAll, findById } = require('../../services/book');
const validator = require('../../validators/book');

module.exports = (app) => {
  app.use('/books', router);

  router.get('/', validator.findAllValidator(), async (req, res, next) => {
    try {
      const books = await findAll(req);

      res.data = books;
      res.statusCode = 200;

      return next();
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const book = await findById(req.params.id);

      res.data = book;
      res.statusCode = 200;

      return next();
    } catch (err) {
      next(err);
    }
  });
};
