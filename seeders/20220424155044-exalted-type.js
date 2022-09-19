const uuid = require('uuid').v4;
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('exalt-types', [
    {
     id: 1,
     name: "solar",
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      id: 2,
      name: 'lunar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'dragon blooded',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: 'abyssal',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
