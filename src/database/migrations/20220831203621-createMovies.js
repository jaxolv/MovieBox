'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("movies", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subtitle: {
        type: Sequelize.STRING,
        allowNull: true
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imdb: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rottenTomatometer: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rottenAudience: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("movies");
  }
};
