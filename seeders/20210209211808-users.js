"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Todd T",
          username: "tt",
          userpassword: "tt",
          areafished: "SW Wisconsin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eric J",
          username: "ej",
          userpassword: "ej",
          areafished: "SW Wisconsin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andy K",
          username: "ak",
          userpassword: "ak",
          areafished: "NE Wisconsin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob K",
          username: "bk",
          userpassword: "bk",
          areafished: "NE Wisconsin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Steve H",
          username: "sh",
          userpassword: "sh",
          areafished: "Central Wisconsin",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
