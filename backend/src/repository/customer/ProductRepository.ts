import Product from "@/model/productModel";
class ProductRepository {

    static async create({ name, description, price, stock }) {
        const product = await Product.create({
            name,
            description,
            price,
            stock,
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
        return Product.findAll();
    }

    static async deleteAll() {
        return Product.destroy({ truncate: true });
    }
}

export default ProductRepository;