import Redis from '@/config/redis';


export interface ICacheService {
    get<T>(key: string): Promise<T | null>,
    set(key: string, value: string | number): Promise<void>,
}

export class CacheService implements ICacheService {
    async get<T>(key: string) {
        const data = await Redis.get(key);
        if (!data) return null;
        return JSON.parse(data) as T;
    }
    async set<T>(key: string, data: string | number) {
        data = JSON.stringify(data)
        await Redis.set(key, data)
    };
}