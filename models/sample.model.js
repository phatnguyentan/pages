'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    string: DataTypes.STRING,
    text: DataTypes.TEXT,
    integer: DataTypes.INTEGER,
    boolean: DataTypes.BOOLEAN,
    enum: DataTypes.ENUM,
    array: DataTypes.ARRAY,
    uuid: DataTypes.UUID,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todo;
};
