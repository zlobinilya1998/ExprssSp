import Product, { ProductCreationAttributes } from "@/model/productModel";
import Customer from "@/model/customerModel";
import ProductCategory from "@/model/productCategoryModel";

class ProductRepository {
    static async create(model: ProductCreationAttributes) {
        return Product.create(model)
    }
    static async delete(id) {
        return Product.destroy({ where: { id } })
    }
    static async getAll() {
        return Product.findAll({
            attributes: { exclude: ['customerId', 'categoryId'] },
            include: [
                {
                    model: Customer,
                    as: 'customer',
                    attributes: ['name', 'id'],
                },
                {
                    model: ProductCategory,
                    as: 'category',
                    attributes: ['id','name','description']
                }
            ],
        });
    }

    static async getById(id) {
        return Product.findByPk(id)
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