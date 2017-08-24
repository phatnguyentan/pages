'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items',[
      {
        userId: 1,
        title: "test",
        description: "description test",
        privacy: "public",
        type: "system",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: "test",
        description: "description test 2",
        privacy: "public",
        type: "system",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: "test",
        description: "description test 2",
        privacy: "public",
        type: "owner",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
