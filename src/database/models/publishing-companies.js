'use strict';
module.exports = (sequelize, DataTypes) => {
  const publishingCompanies = sequelize.define('publishingCompanies', {
    name: DataTypes.STRING
  }, {});
  publishingCompanies.associate = function(models) {
  };
  return publishingCompanies;
};