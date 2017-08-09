'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  user.associate = function (models) {
   user.hasMany(models.session, {as: 'sessions'});
   user.belongsToMany(models.product, {through: 'product_users'});
  }
  return user;
};
