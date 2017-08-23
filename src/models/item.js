'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let item = sequelize.define('item', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  item.associate = function (models) {
   item.belongsToMany(models.page, {through: 'pages_items'});
   item.belongsTo(models.user);
   item.belongsToMany(models.tag, {through: 'items_tags'});
  }
  return item;
};
