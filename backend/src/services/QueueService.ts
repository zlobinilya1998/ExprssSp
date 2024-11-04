import Redis from '@/config/redis';
import Customer from '@/model/customerModel';
import { CustomerService } from '@/services/CustomerService';

abstract class Queue {
    abstract addTask(key: QueueKey, data: unknown): Promise<void>;
    abstract dequeueTask<T>(key: QueueKey): Promise<T | null>;
    abstract dequeueCustomerCreated<T>(): Promise<void>;
    abstract listenQueue(): Promise<void>;
}

export enum QueueKey {
    customerCreated = 'customerCreated',
}


class RedisQueueService implements Queue {
    constructor() {
        this.listenQueue();
    }
    async addTask(key: QueueKey, data: unknown): Promise<void> {
        try {
            await Redis.lpush(key, JSON.stringify(data));
            console.log("Task added to queue:", data);
        } catch (e) {
            console.log("Task queue failed", data);
            console.error(e);
        }
    }
    async dequeueTask<T>(key: QueueKey): Promise<T | null> {
        let task = await Redis.rpop(key);
        if (!task) return null;
        console.log("Task processed from queue:", JSON.parse(task));
        const data: T = JSON.parse(task);
        return data;
    }
    async dequeueCustomerCreated() {
        const customer = await this.dequeueTask<Customer>(QueueKey.customerCreated);
        if (!customer) return;
        try {
            await CustomerService.sendWelcomeEmail(customer);
        } catch (err){
            console.log('[Mailer] error: ', err);
            this.addTask(QueueKey.customerCreated, customer);
        }
    }

    async listenQueue() {
        console.log('Start listening queue...');
        setInterval(() => {
            this.dequeueCustomerCreated();
        }, 2_000)
    }
}
const QueueService = new RedisQueueService();

export default QueueService;

