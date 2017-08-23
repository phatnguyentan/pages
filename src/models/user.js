'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  user.associate = function (models) {
   user.hasMany(models.session, {as: 'sessions'});
   user.belongsToMany(models.page, {through: 'users_pages'});
   user.belongsToMany(models.tag, {through: 'users_tags'});
   user.hasMany(models.item);
  }
  return user;
};
