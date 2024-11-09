import Customer from '@/model/customerModel';
import { EmailService } from '@/services/EmailService';
import CustomerRepository from '@/repository/CustomerRepository';

export class CustomerService {

    static async getAll(){
        return CustomerRepository.getAll()
    }

    static async getById(id){
        return CustomerRepository.getById(id);
    }

    static async deleteAll(){
        return CustomerRepository.deleteAll();
    }

    static async create(dto){
        const isExists = await CustomerRepository.getByEmail(dto.email);
        if (isExists) throw new Error("Заказчик с такой почтой уже существует")
        return CustomerRepository.create(dto)
    }

    static async deleteById(id){
        return CustomerRepository.delete(id);
    }

    static async sendWelcomeEmail(customer: Customer) {
        return EmailService.sendEmail({
            to: customer.email,
            templateName: 'welcome',
            subject: 'Добро пожаловать на платформу!',
            text: 'Welcome',
            template: { name: customer.name, activation: `http://localhost:3000/customer/activate?id=${customer.id}`},
        });
    }
    static async activateCustomer(id) {
        const customer = await Customer.findByPk(id);
        if (!customer) throw new Error("User not found")
        customer.isActivated = true;
        await customer.save();
    }
}