class BadRequestError extends Error {
  constructor(error = {}) {
    super(error.message);

    this.name = 'BadRequestError';
    this.errors = error.errors;
    this.status = 400;
  }
}

class DatabaseError extends Error {
  constructor(error = {}) {
    super(error.message);

    this.name = 'DatabaseError';
    this.errors = error.errors;
    this.status = 500;
  }
}

class NotFoundError extends Error {
  constructor(error = {}) {
    super(error.message);

    this.name = 'NotFoundError';
    this.errors = error.errors;
    this.status = 404;
  }
}

module.exports = {
  BadRequestError,
  DatabaseError,
  NotFoundError,
};
