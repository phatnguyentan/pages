'use strict';

module.exports = function(sequelize, DataTypes) {
  let session = sequelize.define('session', {
    userId: DataTypes.INTEGER,
    sessionId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        session.belongsTo(models.user)
      }
    }
  });
  return session;
};
