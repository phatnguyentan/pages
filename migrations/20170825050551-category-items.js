'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'category_items',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        itemId: {allowNull: false, type: Sequelize.INTEGER, foreignKey: true},
        categoryId: {allowNull: false, type: Sequelize.INTEGER, foreignKey: true},
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE }
      },
      {
        timestamps: true,
        engine: 'MYISAM',                     // default: 'InnoDB'
        charset: 'utf-8'                    // default: null, latin1
      }
    )
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
