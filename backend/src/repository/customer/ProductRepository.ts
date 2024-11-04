import Product from "@/model/productModel";
import Customer from "@/model/customerModel";

class ProductRepository {

    static async create({ name, description, price, stock, customerId }) {
        const product = await Product.create({
            name,
            description,
            price,
            stock,
            customerId,
        })
        return product;
    }
    static async delete(id) {
        const deleted = await Product.destroy({
            where: { id }
        })
        if (deleted) return;
        return new Error('Ошибка при удалении')
    }
    static async getAll() {
        return Product.findAll({
            include: [{
                model: Customer,
                attributes: ['name', 'id'],
            }],
        });
    }

    static async getByCustomer(id) {
        return Product.findAll({
            where: {
                customerId: id,
            }
        });
    }

    static async deleteAll() {
        return Product.destroy({ truncate: true });
    }
}

export default ProductRepository;