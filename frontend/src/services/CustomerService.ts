import { Customer } from '@/models/Customer';
import { CustomerCreateDto } from '@/types/dto/CustomerDto';
import Api from 'services/Api';

export class CustomerService {
    static baseUrl = '/customer';

    static async getAll(): Promise<Customer[]> {
        const resp = await Api.get(this.baseUrl);
        return resp.data;
    }


    static async create(dto: CustomerCreateDto): Promise<Customer> {
        const resp = await Api.post(`${this.baseUrl}`, dto);
        return resp.data;
    }

    static async remove(dto: Customer) {
        const resp = await Api.delete(`${this.baseUrl}/${dto.id}`);
        return resp.data;
    }
}