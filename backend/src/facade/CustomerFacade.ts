import CustomerRepository from "@/repository/customer/CustomerRepository";
import QueueService, { QueueKey } from "@/services/QueueService";

export class CustomerFacade {
    static async createCustomer(dto) {
        const customer = await CustomerRepository.create(dto);
        QueueService.addTask(QueueKey.customerCreated, customer)
        return customer;
    }
}