'use strict';

// O módulo exporta duas funções: up e down, usadas para aplicar e reverter a migração, respectivamente.
module.exports = {
  // A função up é chamada quando a migração é aplicada.
  up: async (queryInterface, Sequelize) => {
    // Cria uma nova tabela chamada 'users' com as colunas especificadas.
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID, // Define o tipo de dado como UUID.
        defaultValue: Sequelize.UUIDV4, // Define o valor padrão como um UUID v4 gerado automaticamente.
        allowNull: false, // Não permite valores nulos.
        primaryKey: true, // Define como chave primária.
      },
      name: {
        type: Sequelize.STRING, // Define o tipo de dado como STRING.
        allowNull: false, // Não permite valores nulos.
      },
      email: {
        type: Sequelize.STRING, // Define o tipo de dado como STRING.
        allowNull: false, // Não permite valores nulos.
        unique: true, // Garante que os valores sejam únicos.
      },
      password_hash: { // Define que a senha sera criptografada e armazenda no banco de dados com passoword_hash
        type: Sequelize.STRING, // Define o tipo de dado como STRING.
        allowNull: false, // Não permite valores nulos.
      },
      admin: {
        type: Sequelize.BOOLEAN, // Define o tipo de dado como BOOLEAN.
        defaultValue: false, // Define o valor padrão como false.
        allowNull: false, // Não permite valores nulos,esse campo sempre tem que existir
      },
      created_at: {
        type: Sequelize.DATE, // Define o tipo de dado como DATE,sera preenchido pelo sequelize atoumatico 
        allowNull: false, // Não permite valores nulos.
      },
      updated_at: {
        type: Sequelize.DATE, // Define o tipo de dado como DATE.
        allowNull: false, // Não permite valores nulos.
      },
    });
  },

  // A função down é chamada quando a migração é revertida.
  down: async (queryInterface) => {
    // Remove a tabela 'users'.
    await queryInterface.dropTable('users');// defaz a tabela de usuario ,caso queira defazer qualquer atualizaçao
  },
};
