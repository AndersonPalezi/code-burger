import Sequelize, { Model } from "sequelize"; // Importa o Sequelize e a classe Model

class Category extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING, // Define o campo "name" como uma string
            },
            {
                sequelize, // Passa a instância do Sequelize para inicialização do modelo
            }
        );
    }
}

export default Category; // Exporta a classe para  Product
