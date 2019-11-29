'use strict';
module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define('authors', {
    name: DataTypes.STRING
  }, {});
  authors.associate = function(models) {
  };
  return authors;
};