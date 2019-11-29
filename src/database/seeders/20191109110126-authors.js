'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', [{
      name: 'J. K. Rowling',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Stephen King',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mark Manson',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lisa Genova',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Paulo Coelho',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Fiodor Dostoievski',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Thalita Reboucas',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Marc Levy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'C. J. Tudor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Laurentino Gomes',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Orwell',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George R. R. Martin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'J. R. R. Tolkien',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Neil Gaiman',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Cassandra Clare',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authors', null, { truncate: true, restartIdentity: true })
  }
};
