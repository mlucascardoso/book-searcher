'use strict';
module.exports = (sequelize, DataTypes) => {
  const languages = sequelize.define('languages', {
    language: DataTypes.STRING
  }, {});
  languages.associate = function(models) {
    
  };
  return languages;
};