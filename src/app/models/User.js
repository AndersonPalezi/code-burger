/*Em resumo, o Model é uma peça fundamental da arquitetura da aplicação 
que gerencia e manipula os dados, garantindo a integridade, a validação 
e a aplicação das regras de negócios. Ele serve como a camada intermediária
 entre o banco de dados e a lógica de aplicação, facilitando a interação e a 
 manipulação dos dados de maneira eficiente e organizada. */


// Importando Sequelize e Model do pacote sequelize
import Sequelize, { Model } from 'sequelize';
import bcrypt from "bcrypt"

// Definindo a classe User que estende a classe Model
class User extends Model {
  // Método estático init para inicializar o modelo User
  static init(sequelize) {
    // Chamando o método init da classe Model (superclass) com os atributos do modelo
    super.init(
      {
        // Definindo o campo 'name' como uma string
        name: Sequelize.STRING,
        // Definindo o campo 'email' como uma string
        email: Sequelize.STRING,

        password:Sequelize.VIRTUAL,
        // Definindo o campo 'password_hash' como uma string
        password_hash: Sequelize.STRING,
        // Definindo o campo 'admin' como um booleano
        admin: Sequelize.BOOLEAN,
      },
      {
        // Passando a instância sequelize para configurar o modelo
        sequelize,
      }
    );
    this.addHook("beforeSave", async(user) => {
      // Adiciona um gancho (hook) "beforeSave" que será executado antes de salvar um usuário no banco de dados.
      if (user.password) {
        // Verifica se a propriedade "password" do usuário está definida.
        user.password_hash = await bcrypt.hash(user.password, 10);
        // Se "password" estiver definida, cria um hash da senha usando bcrypt com um fator de custo (salt rounds) de 10.
        // O hash resultante é atribuído de volta à propriedade "password" do usuário.
      }
    })
    // Retorna o this para continuar permitindo o encadeamento de chamadas (chaining).
    return this;
    
  }
}

// Exportando o modelo User para ser utilizado em outras partes da aplicação
export default User;
