'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  category.associate = function (models) {
   category.belongsToMany(models.user, {through: 'user_categories'});
   category.belongsToMany(models.item, {through: 'category_items'});
  }
  return category;
};
