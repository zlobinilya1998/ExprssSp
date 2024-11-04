import Customer from '@/model/customerModel';
import { EmailService } from '@/services/EmailService';

export class CustomerService {
    static async sendWelcomeEmail(customer: Customer) {
        return EmailService.sendEmail({
            to: customer.email,
            templateName: 'welcome',
            subject: 'Добро пожаловать на платформу!',
            text: 'Welcome',
            template: { name: customer.name},
        });
    }
}