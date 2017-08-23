'use strict';
const session = require('../models').session;

module.exports = function(sequelize, DataTypes) {
  let tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  tag.associate = function (models) {
   tag.belongsToMany(models.item, {through: 'items_tags'});
   tag.belongsToMany(models.user, {through: 'users_tags'});
  }
  return tag;
};
