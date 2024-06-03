module.exports = {
    dialect: "postgres", // Define o dialeto como PostgreSQL
    host: "localhost", // Define o host do banco de dados
    username: "postgres", // Define o nome de usuário do banco de dados
    password: "postgres", // Define a senha do banco de dados
    database: "codeburger", // Define o nome do banco de dados
    define: {
        timestamps: true, // Adiciona colunas createdAt e updatedAt automaticamente
        underscored: true, // Usa snake_case para nomes de tabelas e colunas
        underscoredAll: true, // Usa snake_case para nomes de colunas relacionadas
    },
};
