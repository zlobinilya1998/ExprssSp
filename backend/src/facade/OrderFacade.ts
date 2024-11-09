import { CustomerService } from "@/services/CustomerService";
import OrderService from "@/services/OrderService";
import { ProductService } from "@/services/ProductService";
import QueueService, { QueueKey } from "@/services/QueueService";


export class OrderFacade {
    static async createOrder(dto){
        const order = await OrderService.create(dto);
        const product = await ProductService.getById(order.productId);
        if (product?.stock){
            product.stock -= 1;
            await product.save();
        }
        const customer = await CustomerService.getById(product.customerId);
        QueueService.addTask(QueueKey.orderCreated, {
            order,
            product,
            customer,
        })

        return order;
    }
}