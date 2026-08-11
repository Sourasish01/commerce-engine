import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json({ limit: "10mb" })); // Parse JSON request body
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Parse form-urlencoded data

app.use(cookieParser());// Parse cookies

// AUTH ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

export default app;