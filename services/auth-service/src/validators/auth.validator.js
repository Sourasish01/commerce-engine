import { z } from "zod";


// ========================================
// SIGNUP
// POST /auth/signup
// ========================================

export const signupSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),

    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must not exceed 50 characters")
        .optional(),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(72, "Password must not exceed 72 characters")
}).strict();


// ========================================
// LOGIN
// POST /auth/login
// ========================================

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),

    password: z
        .string()
        .min(1, "Password is required")
        .max(72, "Password must not exceed 72 characters")
}).strict();


// ========================================
// FORGOT PASSWORD
// POST /auth/forgot-password
// ========================================

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase()
}).strict();


// ========================================
// RESET PASSWORD
// POST /auth/reset-password
// ========================================

export const resetPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),

    otp: z
        .string()
        .regex(/^\d{6}$/, "OTP must be exactly 6 digits"),

    newPassword: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(72, "Password must not exceed 72 characters")
}).strict();


// ========================================
// VERIFY EMAIL
// POST /auth/verify-email
// ========================================

export const verifyEmailSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase(),

    otp: z
        .string()
        .regex(/^\d{6}$/, "OTP must be exactly 6 digits")
}).strict();


// ========================================
// RESEND EMAIL VERIFICATION OTP
// POST /auth/resend-verification
// ========================================

export const resendVerificationSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase()
}).strict();


// ========================================
// VERIFY TWO-FACTOR AUTHENTICATION
// POST /auth/verify-2fa
// ========================================

export const verifyTwoFactorSchema = z.object({
    otp: z
        .string()
        .regex(/^\d{6}$/, "OTP must be exactly 6 digits")
}).strict();


// ========================================
// GOOGLE OAUTH
// GET /auth/google
// GET /auth/google/callback
// ========================================

// No body validation required.
// Google OAuth data comes from the OAuth flow.