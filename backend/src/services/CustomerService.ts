import Customer from '@/model/customerModel';
import { EmailService } from '@/services/EmailService';

export class CustomerService {
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