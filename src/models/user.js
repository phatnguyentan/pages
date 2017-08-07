'use strict';

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    fullName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        user.hasMany(models.session, { foreignKey: 'user_id'})
      }
    }
  });
  return user;
};
