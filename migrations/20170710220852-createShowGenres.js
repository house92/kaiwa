'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable("show_genres", {
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
        showId: {
          type: Sequelize.INTEGER
        },
        genreId: {
          type: Sequelize.INTEGER
        }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable("show_genres");
  }
};
