import Api from 'services/Api';

export class CustomerService {
    static async getAll(){
        const resp = await Api.get('/customer');
        return resp.data;
    }

    static async remove(id: number){    
        const resp = await Api.delete(`/customer/${id}`);
        return resp.data;
    }
}