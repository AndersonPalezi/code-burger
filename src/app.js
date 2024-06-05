// Importa o módulo express para criar um servidor web
import express from "express";

import { resolve } from "path"

// Importa as rotas definidas no arquivo routes
import routes from "./routes";

// Importa a configuração do banco de dados (o arquivo é executado, inicializando a conexão com o banco de dados)
import "./database";

// Define a classe App que será responsável pela configuração do servidor e seus middleware
class App {
    // O construtor da classe é chamado quando uma nova instância da classe App é criada
    constructor() {
        // Cria uma nova instância do express e a atribui à propriedade this.app
        this.app = express();
        
        // Chama o método middlewares para configurar os middlewares da aplicação
        this.middlewares();
        
        // Chama o método routes para configurar as rotas da aplicação
        this.routes();
    }

    // Método middlewares responsável por configurar os middlewares da aplicação
    middlewares() {
        // Adiciona o middleware express.json() para que a aplicação possa lidar com requisições JSON
        this.app.use(express.json())
        this.app.use(
        "/product-file",
        express.static(resolve(__dirname,"..","uploads"))
    )
    }

    // Método routes responsável por configurar as rotas da aplicação
    routes() {
        // Usa as rotas definidas no arquivo routes
        this.app.use(routes);
    }
}

// Exporta uma nova instância da classe App, retornando o objeto express configurado
export default new App().app;
