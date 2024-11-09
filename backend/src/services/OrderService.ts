import Customer from "@/model/customerModel";
import Order from "@/model/orderModel";
import Product from "@/model/productModel";
import OrderRepository from "@/repository/OrderRepository";
import { EmailService } from "@/services/EmailService";

class OrderService {
    static async getAll() {
        return OrderRepository.getAll()
    }

    static async create(dto) {
        return OrderRepository.create(dto);
    }

    static async updateStatus(dto){
        return OrderRepository.updateStatus(dto);
    }


    static async sendCustomerEmail(order: Order, product: Product, customer: Customer) {
        return EmailService.sendEmail({
            to: customer.email,
            templateName: 'customer_purchase',
            subject: 'Продажа в магазине!',
            template: { orderId: order.id, productName: product.name, productPrice: product.price },
            text: '',
        });
    }
}

export default OrderService;