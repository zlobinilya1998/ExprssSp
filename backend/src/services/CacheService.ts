import Redis from '@/config/redis';

export enum CacheKey {
    products = 'allProducts'
}

export interface ICacheService {
    get<T>(key: CacheKey): Promise<T | null>,
    set(key: CacheKey, value: unknown): Promise<void>,
}

class RedisCacheService implements ICacheService {
    async get<T>(key: CacheKey) {
        const data = await Redis.get(key);
        if (!data) {
            console.log(`Cache for ${key} not found`);
            return null
        };
        const jsonData = JSON.parse(data) as T
        console.log(`Get cache for ${key}`, jsonData);
        return jsonData;
    }
    async set<T>(key: CacheKey, data: unknown) {
        const jsonString = JSON.stringify(data);
        await Redis.set(key, jsonString, 'EX', 60);
    };
}

export const CacheService = new RedisCacheService();