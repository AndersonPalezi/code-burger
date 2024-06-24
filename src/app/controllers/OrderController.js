
import * as Yup from "yup"; // Importa o pacote Yup para validação de esquemas
import Product from "../models/Product";
import Category from "../models/Category";


class OrderController {
    async store(request, response) {
        // Define o esquema de validação usando Yup
        const schema = Yup.object().shape({
            products: Yup.array().required()
                .of(
                    Yup.object().shape({
                        id: Yup.number().required(),
                        quantity: Yup.number().required(),
                    })
                ),
        })
        try {
            // Valida os dados recebidos com base no esquema
            await schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            // Se houver erros de validação, retorna uma resposta de erro com os detalhes
            return response.status(400).json({ error: err.errors });
        }
        const productsId = request.body.products.map(products => products.id)
        const updatedProducts = await Product.findAll({
            where: {
                id: productsId,
            },
            include: [
                {
                    model:Category,
                    as: 'category',
                    attributes:["name"],
                }
            ]
        })
        const editedProduct = updatedProducts.map((product) => {
        const productIndex = request.body.products.findIndex(
        (requestProduct) => requestProduct.id === product.id)
            const newProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                Category:product.category.name,
                url:product.url,
                quantity: request.body.products[productIndex].quantity,
            }
            return newProduct
        })
        const order = {
            user: {
                id: request.userId,
                name: request.userName,
            },
            products: editedProduct,
        }
        // Retorna os dados do usuário criado
        return response.status(201).json(updatedProducts);
    }
}

export default new OrderController();
