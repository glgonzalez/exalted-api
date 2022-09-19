'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInster('abilities', [
      {
        id: 1,
        name: "strength",
        type: "physical",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('abilities', null, {});
  }
};
