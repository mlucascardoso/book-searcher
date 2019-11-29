'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('publishingCompanies', [{
      name: 'Actual',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'BestBolso',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Caritatem',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DBO',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'EDIOURO',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FGV',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Galera',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('publishingCompanies', null, { truncate: true, restartIdentity: true })
  }
}