import { Product } from '@/models/Product';
import Api from 'services/Api';

export class ProductService {
    static async getAll(): Promise<Product[]> {
        const resp = await Api.get('/product');
        return resp.data;
    }

    static async getByCustomer(id: number): Promise<Product[]> {
        const resp = await Api.delete(`/product/customer/${id}`);
        return resp.data;
    }
}