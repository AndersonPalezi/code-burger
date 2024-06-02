/*Em resumo, o Model é uma peça fundamental da arquitetura da aplicação 
que gerencia e manipula os dados, garantindo a integridade, a validação 
e a aplicação das regras de negócios. Ele serve como a camada intermediária
 entre o banco de dados e a lógica de aplicação, facilitando a interação e a 
 manipulação dos dados de maneira eficiente e organizada. */


// Importando Sequelize e Model do pacote sequelize
import Sequelize, { Model } from 'sequelize';

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
  }
}

// Exportando o modelo User para ser utilizado em outras partes da aplicação
export default User;
