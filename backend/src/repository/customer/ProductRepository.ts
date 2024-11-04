import Product from "@/model/productModel";
import Customer from "@/model/customerModel";

class ProductRepository {
    static async create({ name, description, price, stock, customerId }) {
        return Product.create({
            name,
            description,
            price,
            stock,
            customerId,
        })
    }
    static async delete(id) {
        return Product.destroy({ where: { id } })
    }
    static async getAll() {
        return Product.findAll({
            attributes: { exclude: ['customerId'] },
            include: [{
                model: Customer,
                as: 'customer',
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