'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
    queryInterface.dropTable('sessions');
    queryInterface.dropTable('pages');
    queryInterface.dropTable('images');
    queryInterface.dropTable('users_pages');
    queryInterface.dropTable('items');
    queryInterface.dropTable('pages_items');
    queryInterface.dropTable('tags');
    queryInterface.dropTable('items_tags');
    queryInterface.dropTable('item_links');
    queryInterface.dropTable('categories');
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
