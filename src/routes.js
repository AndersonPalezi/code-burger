import { Router } from "express"; // Importa o módulo Router do Express
import multer from "multer"; // Importa o módulo multer para lidar com uploads de arquivos
import multerConfig from "./config/multer"; // Importa a configuração do multer
import UserController from "./app/controllers/UserController"; // Importa o controlador de usuários
import SessionController from "./app/controllers/SessionController"; // Importa o controlador de sessões
import ProductController from "./app/controllers/ProductController"; // Importa o controlador de produtos

const upload = multer(multerConfig); // Configura o middleware de upload de arquivos

const routes = new Router(); // Cria uma instância do Router

// Rotas para os controladores
routes.post("/users", UserController.store); // Rota para criar um usuário
routes.post("/sessions", SessionController.store); // Rota para autenticar um usuário
routes.post("/products", upload.single("file"), ProductController.store); // Rota para criar um produto com upload de arquivo
routes.get("/products", ProductController.index); // Rota para listar todos os produtos

export default routes; // Exporta as rotas configuradas
