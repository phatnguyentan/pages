'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let product = sequelize.define('product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  product.associate = function (models) {
   product.belongsToMany(models.user, {through: 'product_users'});
  }
  return product;
};
