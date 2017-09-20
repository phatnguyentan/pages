'use strict';
const models = require('../models');
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  user.associate = function (models) {
   user.hasMany(models.session, {as: 'sessions'});
   user.belongsToMany(models.page, {through: 'users_pages'});
   user.belongsToMany(models.tag, {through: 'users_tags'});
   user.hasMany(models.item);
  }

  user.createNew = function (data) {
    let salt = bcrypt.genSaltSync();
    let passwordHash = bcrypt.hashSync(data.password, salt);
    return user.create({username: data.username, password: passwordHash, salt: salt})
  }

  user.login = function (data, callback) {
    user.findOne({ where: {username: data.username} }).then(r => {
      let passwordHash = bcrypt.hashSync(data.password, r.salt);
      user.findOne({ where: {username: data.username, password: passwordHash}}).then(r => {
        callback(r)
      })
    });
  }
  return user;
};
