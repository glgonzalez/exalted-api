const uuid = require('uuid');
const bcrypt = require('bcryptjs');
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('users', [{
     id: uuid.v4(),
     first_name: 'Test',
     last_name: 'User',
     email: 'testuser@test.com',
     password: bcrypt.hashSync('password1', 10),
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('People', null, {});
  }
};

