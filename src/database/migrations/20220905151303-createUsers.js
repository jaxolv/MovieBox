'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      biography: {
        type: Sequelize.STRING,
        allowNull: true
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  }
};

/* ADICIONANDO COLUNA email NA TABELA users:

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn("users", "email", {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn("users", "email");
  }
}; */