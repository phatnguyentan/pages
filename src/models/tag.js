'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let tag = sequelize.define('tag', {
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  tag.associate = function (models) {
   tag.belongsTo(models.item);
  }
  return tag;
};
