'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
    queryInterface.dropTable('sesions');
    queryInterface.dropTable('products');
    queryInterface.dropTable('images');
    queryInterface.dropTable('product_image');
    queryInterface.dropTable('product_user');
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
