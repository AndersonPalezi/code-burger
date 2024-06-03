import { v4 } from "uuid"; // Importa a função v4 para gerar IDs únicos
import * as Yup from "yup"; // Importa o pacote Yup para validação de esquemas
import User from "../models/User"; // Importa o modelo de usuário

class UserController {
    async store(request, response) {
        // Define o esquema de validação usando Yup
        const schema = Yup.object().shape({
            name: Yup.string().required(), // O nome é obrigatório
            email: Yup.string().email().required(), // O email é obrigatório e deve ser válido
            password: Yup.string().required().min(6), // A senha é obrigatória e deve ter pelo menos 6 caracteres
            admin: Yup.boolean(), // O campo admin é opcional e deve ser um booleano
        });

        try {
            // Valida os dados recebidos com base no esquema
            await schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            // Se houver erros de validação, retorna uma resposta de erro com os detalhes
            return response.status(400).json({ error: err.errors });
        }

        const { name, email, password, admin } = request.body;

        // Verifica se o usuário já existe no banco de dados
        const userExists = await User.findOne({
            where: { email },
        });
        if (userExists) {
            return response.status(400).json({ error: "Esse endereço já existe" });
        }

        // Cria um novo usuário com os dados fornecidos
        const user = await User.create({
            id: v4(), // Gera um ID único
            name,
            email,
            password,
            admin,
        });

        // Retorna os dados do usuário criado
        return response.status(201).json({ id: user.id, name, email, admin });
    }
}

export default new UserController();
