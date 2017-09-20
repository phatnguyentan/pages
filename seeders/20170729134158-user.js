'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users',[
      {
        username: 'test',
        password: '$2a$04$1cuQ6gVIKcz7rcOnE.W79ebqi4oFJCRoy/I6EIuizGbH7kTwS1YvS',
        salt: '$2a$04$1cuQ6gVIKcz7rcOnE.W79e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test2',
        password: '$2a$05$h8/IWkhsl0mjrzVs.pVeiuaVDg.wPrmZj7uQhW4YRnY83AennBPaS',
        salt: '$2a$05$h8/IWkhsl0mjrzVs.pVeiu',
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
