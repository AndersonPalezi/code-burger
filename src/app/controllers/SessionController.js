import * as Yup from "yup"; // Importa o pacote Yup para validação de esquemas
import User from "../models/User"; // Importa o modelo de usuário

class SessionController {
    async store(request, response) {
        // Define o esquema de validação usando Yup
        const schema = Yup.object().shape({
            email: Yup.string().email().required(), // O email é obrigatório e deve ser válido
            password: Yup.string().required(), // A senha é obrigatória
        });

        // Função para tratar erro de email ou senha incorretos
        const userEmailOrPasswordIncorrect = () => {
            return response
                .status(400)
                .json({ error: "Senha ou email incorretos" });
        };

        // Verifica se os dados enviados são válidos
        if (!(await schema.isValid(request.body))) userEmailOrPasswordIncorrect();

        const { email, password } = request.body;

        // Busca o usuário pelo email
        const user = await User.findOne({
            where: { email },
        });

        // Se o usuário não existe, retorna erro
        if (!user) userEmailOrPasswordIncorrect();

        // Verifica se a senha está correta
        if (!(await user.checkPassword(password))) userEmailOrPasswordIncorrect();

        // Retorna os dados do usuário
        return response.json({
            id: user.id,
            email,
            name: user.name,
            admin: user.admin,
        });
    }
}

export default new SessionController();
