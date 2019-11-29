const { clamp, dec, max } = require('ramda');

const getPaginationLimit = (count) => {
  const minValue = 1;
  const maxValue = max(1, count);

  return clamp(minValue, maxValue, count);
};

const getPaginationOffset = ({ limit, page }) => {
  const minValue = 1;
  const maxValue = max(1, page);

  return dec(clamp(minValue, maxValue, page)) * limit;
};

const getPaginationQuery = (options = {}) => {
  const { page = 1, limit = 10 } = options;
  const limitPagination = getPaginationLimit(limit);
  const offset = getPaginationOffset({ limit, page });

  return {
    limit: limitPagination,
    offset,
  };
};

const getPaginationPages = (options = {}) => {
  const { page = 1, limit = 10, count = 0, url = '/', host = 'http://localhost' } = options;
  const previousPage = getPreviousPage(page);
  const lastPage = getLastPage({limit, count});
  const nextPage = getNextPage(page, lastPage);

  return {
    first: buildPaginationUrl(url, host, 1),
    previous: buildPaginationUrl(url, host, previousPage),
    next: buildPaginationUrl(url, host, nextPage),
    last: buildPaginationUrl(url, host, lastPage),
  };
};

const buildPaginationUrl = (url, host, page) => {
  let paginationUrl = '';
  if (url.includes('page=')) {
    const regExp = new RegExp('page=[0-9]');
    paginationUrl = host + url.replace(regExp, `page=${page}`);
  } else {
    paginationUrl = `${host}${url}&page=${page}`;
  }

  return paginationUrl;
};

const getLastPage = ({limit, count}) => {
  let lastPage = (count/limit);

  if (!Number.isInteger(lastPage)) {
    lastPage = Math.floor(lastPage + 1);
  }

  return lastPage;
};

const getPreviousPage = (page) => {
  const previousPage = (page - 1);
  return previousPage > 0 ? previousPage : 1;
};

const getNextPage = (page, lastPage) => {
  let nextPage = page + 1;

  if (nextPage >= lastPage) {
    nextPage = lastPage;
  }

  return nextPage;
};

module.exports = {
  getPaginationQuery,
  getPaginationPages,
};
