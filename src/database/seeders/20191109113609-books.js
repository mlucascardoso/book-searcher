'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      let timestamp = new Date().getTime();

      return queryInterface.bulkInsert('books', [{
        authorId: 2,
        publishingCompanyId: 3,
        languageId: 1,
        title: 'As aventuras de cukinha, o bolsominion',
        isbn: timestamp++,
        year: 2019,
        weight: 500,
        length: 30,
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        authorId: 1,
        publishingCompanyId: 2,
        languageId: 2,
        title: 'You don\'t know NodeJs',
        isbn: timestamp++,
        year: 2017,
        weight: 500,
        length: 30,
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        authorId: 3,
        publishingCompanyId: 4,
        languageId: 3,
        title: 'Test book',
        isbn: timestamp++,
        year: 2018,
        weight: 500,
        length: 30,
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        authorId: 1,
        publishingCompanyId: 1,
        languageId: 1,
        title: 'Test book 2',
        isbn: timestamp++,
        year: 2019,
        weight: 500,
        length: 30,
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        authorId: 2,
        publishingCompanyId: 2,
        languageId: 1,
        title: 'Test book 3',
        isbn: timestamp++,
        year: 2013,
        weight: 500,
        length: 30,
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        authorId: 4,
        publishingCompanyId: 4,
        languageId: 1,
        title: 'Test book 4',
        isbn: timestamp++,
        year: 2015,
        weight: 500,
        length: 30,
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, { truncate: true, restartIdentity: true })
  }
};
