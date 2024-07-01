"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categories", " path");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createColumn("categories", "path", {
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
};
