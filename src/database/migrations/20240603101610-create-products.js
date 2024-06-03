'use strict';


module.exports = {
  up:async (queryInterface, Sequelize ) => {
    await queryInterface.createTable("products", {
      id:{
        type: Sequelize.INTEGER ,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      price:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      category:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      path:{
        type:Sequelize.STRING,
        allowNull:false,
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



   down:async (queryInterface) =>{
    await queryInterface.dropTable("products")
   },


}

