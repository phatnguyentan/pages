'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let category_items = sequelize.define('category_items', {
    categoryId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return category_items;
};
