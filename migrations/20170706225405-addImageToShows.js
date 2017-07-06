"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        "shows",
        "image",
        Sequelize.STRING
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
        "shows",
        "image"
    );
  }
};
