import { Product } from '@/models/Product';
import { ProductCreateDto } from '@/types/dto/ProductDto';
import Api from 'services/Api';

export class ProductService {
    static baseUrl = '/product'

    static async getAll(): Promise<Product[]> {
        const resp = await Api.get(this.baseUrl);
        return resp.data;
    }

    static async getByCustomer(id: number): Promise<Product[]> {
        const resp = await Api.delete(`${this.baseUrl}/customer/${id}`);
        return resp.data;
    }

    static async create(dto: ProductCreateDto): Promise<Product> {
        const resp = await Api.post(this.baseUrl, dto);
        return resp.data;
    }
}