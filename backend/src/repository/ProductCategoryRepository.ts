import ProductCategory, { ProductCategoryCreationAttributes } from "@/model/productCategoryModel";

class ProductCategoryRepository {
    static async create({ name, description }: ProductCategoryCreationAttributes) {
        return ProductCategory.create({name, description})
    }
    static async delete(id) {
        return ProductCategory.destroy({ where: { id } })
    }
    static async getAll() {
        return ProductCategory.findAll();
    }

    static async getById(id){
        return ProductCategory.findByPk(id)
    }
    static async deleteAll() {
        return ProductCategory.destroy({ truncate: true });
    }
}

export default ProductCategoryRepository;