import multer from "multer"; // Importa o módulo multer para lidar com uploads de arquivos
import { v4 } from "uuid"; // Importa a função v4 para gerar IDs únicos
import { extname, resolve } from "path"; // Importa as funções extname e resolve do módulo path

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "uploads"), // Define o diretório de destino dos arquivos enviados
        filename: (request, file, callback) => {
            // Função para gerar o nome do arquivo
            return callback(null, v4() + extname(file.originalname));
            // Retorna um nome único gerado com base no ID e na extensão do arquivo original
        },
    }),
};
