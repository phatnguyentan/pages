'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
    queryInterface.dropTable('sessions');
    queryInterface.dropTable('pages');
    queryInterface.dropTable('images');
    queryInterface.dropTable('users_pages');
    queryInterface.dropTable('items');
    queryInterface.dropTable('tags');
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
