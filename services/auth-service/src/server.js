import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";


dotenv.config(); // to access the .env file


// EXPRESS CONFIGURATION-------

const app = express();

app.use(express.json({ limit: "10mb" })); // Parse JSON request body

app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Parse form-urlencoded data

app.use(cookieParser()); // Parse cookies




// STARTING THE SERVER & CONNECTING TO THE DATABASE-------

const PORT = process.env.PORT || 4001 ; // to access the port from the .env file

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
    // connectDB();
});