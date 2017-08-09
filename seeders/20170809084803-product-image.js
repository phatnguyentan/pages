'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product_images',[
      {
        productId: 1,
        imageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        imageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        imageId: 3,
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
