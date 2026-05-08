import Redis from "ioredis";

// Use environment variables for security
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

// We use a global variable to prevent multiple connections during Next.js Hot Reloading
const globalForRedis = global as unknown as { redis: Redis };

export const redis = globalForRedis.redis || new Redis(redisUrl);

if (process.env.NODE_ENV !== "production") globalForRedis.redis = redis;