'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('images',[
      {
        url: 'http://localhost:8000/images/user_upload/test1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'http://localhost:8000/images/user_upload/test2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'http://localhost:8000/images/user_upload/test3.png',
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
