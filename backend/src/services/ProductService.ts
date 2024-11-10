import ProductRepository from "@/repository/ProductRepository";

export class ProductService {

    static async create(dto) {
        return ProductRepository.create(dto)
    }

    static async getAll() {
        return ProductRepository.getAll();
    }

    static async getByCustomerId(id) {
        return ProductRepository.getByCustomer(id)
    }

    static async decreaseStock(id) {
        const product = await ProductRepository.getById(id);
        if (!product?.stock) return;
        product.stock -= 1;
        product.save();
        return product;
    }

    static async getById(id) {
        return ProductRepository.getById(id);
    }

    static async deleteAll() {
        return ProductRepository.deleteAll();
    }

    static async deleteById(id) {
        return ProductRepository.delete(id);
    }

    static async decreaseProductStock(id) {
        const product = await ProductRepository.getById(id);
        if (!product) throw new Error('Product not found');
        if (product.stock <= 0) return;
        product.stock -= 1;
        await product.save();
        return product;

    }
}