import Sequelize, { Model } from "sequelize"; // Importa o Sequelize e a classe Model

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING, // Define o campo "name" como uma string
                price: Sequelize.INTEGER, // Define o campo "price" como um número inteiro
                category: Sequelize.STRING, // Define o campo "category" como uma string
                path: Sequelize.STRING, // Define o campo "path" como uma string
                url: {
                    type: Sequelize.VIRTUAL, // Define um campo virtual chamado "url"
                    get() {
                        // Função para obter o valor do campo virtual "url"
                        return `http://localhost:3000/products-file/${this.path}`
                        // Retorna a URL completa com base no valor de "this.path"
                    },
                },
            },
            {
                sequelize, // Passa a instância do Sequelize para inicialização do modelo
            }
        );
    }
}

export default Product; // Exporta a classe Product
