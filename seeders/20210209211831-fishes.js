"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Fishes",
      [
        {
          species: "hybrid brook and brown trout",
          img: "TigerTrout",
          caughtby: "tt",
          wherecaught: "SWWI",
          text: "Caught a rare tiger trout!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          species: "Brown Trout",
          img: "Brown Trout",
          caughtby: "ej",
          wherecaught: "SWWI",
          text: "One of many feral brown trout",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          species: "Small mouth bass",
          img: "bronze back",
          caughtby: "ak",
          wherecaught: "NE WI",
          text: "Smallie caught on the Wolf River.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          species: "Brook Trout",
          img: "Brookie",
          caughtby: "bk",
          wherecaught: "Central WI",
          text: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          species: "Rainbow Trout",
          img: "cut throat",
          caughtby: "sh",
          wherecaught: "Idaho",
          text: "A wild cut throat trout!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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