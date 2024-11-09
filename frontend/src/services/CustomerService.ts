import { Customer } from '@/models/Customer';
import Api from 'services/Api';

export class CustomerService {
    static baseUrl = '/customer';

    static async getAll(): Promise<Customer[]> {
        const resp = await Api.get(this.baseUrl);
        return resp.data;
    }

    static async remove(item: Customer) {
        const resp = await Api.delete(`${this.baseUrl}/${item.id}`);
        return resp.data;
    }
}