'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('languages', [{
      language: 'PT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      language: 'EN',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      language: 'PL',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      language: 'RU',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      language: 'TR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      language: 'NO',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      language: 'ID',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('languages', null, { truncate: true, restartIdentity: true })
  }
}