import express from 'express';
import 'dotenv/config';
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import prisma from './config/prisma.js'; // Imports your reusable Prisma instance


//dotenv.config(); // to access the .env file


// EXPRESS CONFIGURATION-------

const app = express();

app.use(express.json({ limit: "10mb" })); // Parse JSON request body

app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Parse form-urlencoded data

app.use(cookieParser()); // Parse cookies




app.post('/api/test-db', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        // Directly insert the user into your real cloud Neon database
        const user = await prisma.user.create({
            data: { email, password, name }
        });

        res.status(201).json({ success: true, user });
    } catch (error) {
    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack
    });
}
});




// STARTING THE SERVER & CONNECTING TO THE DATABASE-------

const PORT = process.env.PORT || 4001 ; // to access the port from the .env file

app.listen(PORT, async () => {
    console.log('Server is running on http://localhost:' + PORT);
    
    // Verifies your connection credentials immediately after the server turns on
    try {
        await prisma.$connect();
        console.log('Connection to Neon Database verified successfully via connection pool.');
    } catch (err) {
        console.error('Root connection to Neon failed at startup:', err.message);
    }
});