import { CustomerService } from "@/services/CustomerService";
import QueueService, { QueueKey } from "@/services/QueueService";

export class CustomerFacade {
    static async createCustomer(dto) {
        const customer = await CustomerService.create(dto);
        QueueService.addTask(QueueKey.customerCreated, customer)
        return customer;
    }
}