'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
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
      rotten: {
        tomatometer: {
          type: Sequelize.STRING,
          allowNull: false
        },
        audience: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies');
  }
};
