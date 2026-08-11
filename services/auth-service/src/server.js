import "dotenv/config";
import app from "./app.js";
import prisma from "./config/prisma.js";
import redis from "./config/redis.js";

const PORT = process.env.PORT || 4001;

async function startServer() {
// PostgreSQL and Redis must be connected before starting the HTTP server so the service does not accept requests without its required dependencies.

    try {
        // Connect to PostgreSQL
        await prisma.$connect();
        console.log("Connection to Neon Database verified successfully.");

        // CONNECT REDIS
        await redis.ping();
        console.log("Redis connection verified successfully.");

        // Start HTTP server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start Auth Service:", error.message);
        process.exit(1);
    }
}

startServer();// ENTRY POINT