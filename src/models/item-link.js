'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let itemLink = sequelize.define('item_link', {
    itemId: DataTypes.INTEGER,
    link: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  itemLink.associate = function (models) {
   itemLink.belongsTo(models.item, { foreignKey: 'itemId'});
  }
  return itemLink;
};
