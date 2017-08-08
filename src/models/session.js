'use strict';

module.exports = function(sequelize, DataTypes) {
  let session = sequelize.define('session', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // session.belongsTo(models.user, { foreignKey: 'userId'})
      }
    }
  });
  session.associate = function (models) {
   session.belongsTo(models.user, { foreignKey: 'userId'})
  }
  return session;
};
