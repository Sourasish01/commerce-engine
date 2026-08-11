import Redis from "ioredis";
import "dotenv/config";


// REDIS CONNECTION
const redis = new Redis(process.env.REDIS_URL);

redis.on("error", (error) => {
    console.error("Redis connection error:", error.message);
});


// EXPORT
export default redis;