'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('attributes', [
      {
        id: 1,
        name: "strength",
        type: "physical",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 2,
        name: "dexterity",
        type: "physical",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 3,
        name: "stamina",
        type: "physical",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 4,
        name: "charisma",
        type: "social",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 5,
        name: "manipulation",
        type: "social",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 6,
        name: "appearance",
        type: "social",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 7,
        name: "perception",
        type: "mental",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 8,
        name: "intelligence",
        type: "mental",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 9,
        name: "wits",
        type: "mental",
        createdAt: new Date(),
        updatedAt: new Date()
       },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('attributes', null, {});
  }
};
