'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let item = sequelize.define('item', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    pageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  item.associate = function (models) {
   item.belongsTo(models.page);
   item.belongsTo(models.user);
   item.hasMany(models.tag);
  }
  return item;
};
