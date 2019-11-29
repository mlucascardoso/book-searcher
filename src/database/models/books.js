'use strict';
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    authorId: DataTypes.INTEGER,
    publishingCompanyId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    year: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT
  }, {});

  books.associate = function(models) {
    books.belongsTo(models.authors, {
      foreignKey: 'authorId',
    });

    books.belongsTo(models.publishingCompanies, {
      foreignKey: 'publishingCompanyId',
    });

    books.belongsTo(models.languages, {
      foreignKey: 'languageId',
    });
  };

  return books;
};