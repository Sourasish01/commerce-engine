import { z } from "zod";


// ========================================
// UPDATE PROFILE
// PATCH /user/profile
// ========================================

export const updateProfileSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must not exceed 50 characters")
        .optional(),

    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .toLowerCase()
        .optional()
}).strict();


// ========================================
// CHANGE PASSWORD
// PATCH /user/profile/password
// ========================================

export const changePasswordSchema = z.object({
    currentPassword: z
        .string()
        .min(1, "Current password is required")
        .max(72, "Password must not exceed 72 characters"),

    newPassword: z
        .string()
        .min(8, "New password must be at least 8 characters")
        .max(72, "New password must not exceed 72 characters")
}).strict();


// ========================================
// DELETE SPECIFIC SESSION
// DELETE /user/sessions/:sessionId
// ========================================

export const sessionIdSchema = z.object({
    sessionId: z
        .string()
        .min(1, "Session ID is required")
}).strict();


// ========================================
// VERIFY 2FA SETUP
// POST /user/profile/2fa/verify
// ========================================

export const verifyTwoFactorSetupSchema = z.object({
    otp: z
        .string()
        .regex(/^\d{6}$/, "OTP must be exactly 6 digits")
}).strict();


// ========================================
// NO BODY VALIDATION REQUIRED
// ========================================

// GET    /profile
// DELETE /profile
// GET    /sessions
// DELETE /sessions
// POST   /profile/2fa/enable
// POST   /profile/2fa/disable
//
// These routes don't currently accept
// user-provided body/URL parameters.