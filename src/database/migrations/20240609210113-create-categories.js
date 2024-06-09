'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE, // Define o tipo de dado como DATE,sera preenchido pelo sequelize atoumatico 
        allowNull: false, // Não permite valores nulos.
      },
      updated_at: {
        type: Sequelize.DATE, // Define o tipo de dado como DATE.
        allowNull: false, // Não permite valores nulos.
      },
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('categories');
  }
}
