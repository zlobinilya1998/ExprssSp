import { Redis } from 'ioredis';
const env = process.env;

const port = Number(env.REDIS_PORT || 6379)

const redis = new Redis({
    host: env.REDIS_HOST,
    port,
    password: env.REDIS_PASS,
    retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        console.log(`Reconnecting to Redis in ${delay} ms...`);
        return delay;
    },
});


redis.on('error', () => console.log('[REDIS] connection error'))
redis.on('reconnecting', () => console.log('[REDIS] Try reconnecting...'))
redis.on('connect', () => console.log('[REDIS] Connection successfully'))

redis.ping()
    .then((result) => console.log('[REDIS] Connected'))
    .catch(e => console.error('[REDIS] Ping failed', e));

export default redis;