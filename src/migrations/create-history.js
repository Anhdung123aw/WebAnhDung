"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("history", {
      // address: DataTypes.STRING,
      // descriptions: DataTypes.TEXT,
      // image: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctorsId: {
        type: Sequelize.INTEGER,
      },
      patientsId: {
        type: Sequelize.INTEGER,
      },
      descriptions: {
        type: Sequelize.TEXT,
      },
      files: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("history");
  },
};
