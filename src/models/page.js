'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let page = sequelize.define('page', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  page.associate = function (models) {
   page.belongsToMany(models.user, {through: 'users_pages'});
   page.hasMany(models.item);
  }
  return page;
};
