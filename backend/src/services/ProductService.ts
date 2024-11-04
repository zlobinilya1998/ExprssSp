import ProductRepository from "@/repository/customer/ProductRepository";

export class ProductService {

    static async create(dto){
        return ProductRepository.create(dto)
    }

    static async getAll(){
        return ProductRepository.getAll();
    }

    static async getByCustomerId(id){
        return ProductRepository.getByCustomer(id)
    }

    static async deleteAll() {
        return ProductRepository.deleteAll();
    }

    static async deleteById(id) {
        return ProductRepository.delete(id);
    }
}