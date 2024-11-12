import { ProductCategoryCreationAttributes } from "@/model/productCategoryModel";
import ProductCategoryRepository from "@/repository/ProductCategoryRepository";

export class ProductCategoryService {
    static async create(dto: ProductCategoryCreationAttributes) {
        return ProductCategoryRepository.create(dto)
    }

    static async getAll() {
        return ProductCategoryRepository.getAll();
    }

    static async getById(id) {
        return ProductCategoryRepository.getById(id);
    }

    static async deleteAll() {
        return ProductCategoryRepository.deleteAll();
    }

    static async deleteById(id) {
        return ProductCategoryRepository.delete(id);
    }
}