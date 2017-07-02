"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("shows", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        name: Sequelize.STRING,
        description: Sequelize.TEXT
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable("shows");
  }
};
