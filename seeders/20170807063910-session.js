'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sessions',[{
      userId: 1,
      token: 'dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
