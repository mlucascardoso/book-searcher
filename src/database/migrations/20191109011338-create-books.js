'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorId: {
        type: Sequelize.INTEGER
      },
      publishingCompanyId: {
        type: Sequelize.INTEGER
      },
      languageId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.FLOAT
      },
      length: {
        type: Sequelize.FLOAT
      },
      width: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      indexes: [
        {fields: ['title']},
        {fields: ['isbn']},
        {fields: ['year']},
        {fields: ['weight']},
        {fields: ['width']},
        {fields: ['length']},
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('books');
  }
};