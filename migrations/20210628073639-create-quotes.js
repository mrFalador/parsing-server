'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ask: {
        type: Sequelize.INTEGER
      },
      askSize: {
        type: Sequelize.INTEGER
      },
      bid: {
        type: Sequelize.INTEGER
      },
      bidSize: {
        type: Sequelize.INTEGER
      },
      bookValue: {
        type: Sequelize.INTEGER
      },
      language: {
        type: Sequelize.STRING
      },
      longName: {
        type: Sequelize.STRING
      },
      market: {
        type: Sequelize.INTEGER
      },
      marketCap: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Quotes');
  }
};