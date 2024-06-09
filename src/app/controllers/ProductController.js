import { v4 } from "uuid"; // Importa a função v4 para gerar IDs únicos
import * as Yup from "yup"; // Importa o pacote Yup para validação de esquemas
import Product from "../models/Product"; // Importa o modelo de produto

class ProductController {
    async store(request, response) {
        // Define o esquema de validação usando Yup
        const schema = Yup.object().shape({
            name: Yup.string().required(), // O nome é obrigatório
            price: Yup.number().required(), // O preço é obrigatório e deve ser um número
            category: Yup.string().required(), // A categoria é obrigatória
        });

        try {
            // Valida os dados recebidos com base no esquema
            await schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            // Se houver erros de validação, retorna uma resposta de erro com os detalhes
            return response.status(400).json({ error: err.errors });
        }

        const { filename: path } = request.file; // Obtém o caminho do arquivo enviado
        const { name, price, category } = request.body;

        // Cria um novo produto com os dados fornecidos
        const product = await Product.create({
            id: v4(), // Gera um ID único
            name,
            price,
            category,
            path,
        });

        // Retorna os dados do produto criado
        return response.json(product);
    }

    async index(request, response) {
        // Obtém todos os produtos do banco de dados
        const products = await Product.findAll();
        
         
        // Retorna a lista de produtos
        return response.json(products);
    }
}

export default new ProductController();
