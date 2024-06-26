import Sequelize, { Model } from "sequelize"; // Importa o Sequelize e a classe Model

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING, // Define o campo "name" como uma string
                price: Sequelize.INTEGER, // Define o campo "price" como um número inteir
                path: Sequelize.STRING, // Define o campo "path" como uma string
                offer:Sequelize.BOOLEAN,// Define o campo "offer" como BOOLEAN
                url: {
                    type: Sequelize.VIRTUAL, // Define um campo virtual chamado "url"
                    get() {
                        // Função para obter o valor do campo virtual "url"
                        return `http://localhost:3000/product-file/${this.path}`
                        // Retorna a URL completa com base no valor de "this.path"
                    },
                },
            },
            {
                sequelize, // Passa a instância do Sequelize para inicialização do modelo
            }
        );
        return this
    }
    static associate(models){
        this.belongsTo(models.Category,{
            foreignKey: 'category_id',
            as:"category",
        })
    }
}

export default Product; // Exporta a classe para  Product
