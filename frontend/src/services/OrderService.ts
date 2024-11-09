import { Order, OrderStatus } from '@/models/Order';
import { Product } from '@/models/Product';
import Api from 'services/Api';

export class OrderService {
    static baseUrl = '/order';


    static async getAll(): Promise<Order[]> {
        const resp = await Api.get(this.baseUrl);
        return resp.data;
    }

    static async create(product: Product): Promise<Order> {
        const resp = await Api.post(this.baseUrl, { productId: product.id, totalAmount: product.price });
        return resp.data;
    }

    static async statusToCompleted(id: number){
        const resp = await Api.put(`${this.baseUrl}/updateStatus`,{id, status: OrderStatus.Completed});
        return resp.data;
    }
}