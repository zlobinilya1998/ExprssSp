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
    constructor(){
        this.listenQueue();
    }
    async addTask(key: QueueKey, data: unknown): Promise<void> {
        try {
            await Redis.lpush(key, JSON.stringify(data));
            console.log("Task added to queue:", data);
        } catch (e){
            console.log("Task queue failed", data);
            console.error(e);
        }
    }
    async dequeueTask<T>(key: QueueKey): Promise<T | null> {
        const task = await Redis.rpop(key);
        if (!task) return null;
        console.log("Task processed from queue:", JSON.parse(task));
        return JSON.parse(task);
    }
    async dequeueCustomerCreated() {
        const data = await this.dequeueTask<Customer>(QueueKey.customerCreated);
        if (!data) return;
        await CustomerService.sendWelcomeEmail(data);
        console.log('Send email on:', data.email);
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

