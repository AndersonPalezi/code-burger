// Importa a classe Sequelize do pacote sequelize
import { Sequelize } from "sequelize";

// Importa a configuração do banco de dados a partir de um arquivo de configuração
import configDatabase from "../config/database";

// Importa o modelo User
import User from "../app/models/User";

// Cria um array contendo todos os modelos a serem inicializados
const models = [User];

// Define a classe Database que será responsável pela inicialização e configuração do banco de dados
class Database {
    // O construtor da classe é chamado quando uma nova instância da classe Database é criada
    constructor(){
        // Chama o método init para inicializar a conexão com o banco de dados e os modelos
        this.init();
    }

    // Método init responsável por configurar a conexão com o banco de dados e inicializar os modelos
    init(){
        // Cria uma nova conexão Sequelize utilizando as configurações importadas
        this.connection = new Sequelize(configDatabase);
        
        // Mapeia o array de modelos e chama o método init de cada modelo, passando a conexão como argumento
        models.map((model) => model.init(this.connection));
    }
}

// Exporta uma nova instância da classe Database, permitindo que a configuração do banco de dados seja reutilizada em outras partes da aplicação
export default new Database();
