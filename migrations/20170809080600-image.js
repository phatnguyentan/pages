'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'images',
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        url: {type: Sequelize.STRING, allowNull: false},
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
