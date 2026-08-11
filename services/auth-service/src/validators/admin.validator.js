import { z } from "zod";


// ========================================
// USER ID
// Used by:
// GET    /users/:userId
// PATCH  /users/:userId/role
// PATCH  /users/:userId/status
// DELETE /users/:userId
// GET    /users/:userId/sessions
// DELETE /users/:userId/sessions
// ========================================

export const userIdSchema = z.object({
    userId: z
        .string()
        .regex(/^\d+$/, "Invalid user ID")
}).strict();


// ========================================
// UPDATE USER ROLE
// PATCH /users/:userId/role
// ========================================

export const updateUserRoleSchema = z.object({
    role: z.enum(["USER", "ADMIN"])
}).strict();


// ========================================
// UPDATE USER STATUS
// PATCH /users/:userId/status
// ========================================

export const updateUserStatusSchema = z.object({
    status: z.enum([
        "ACTIVE",
        "DISABLED",
        "SUSPENDED"
    ])
}).strict();


// ========================================
// USER ID + SESSION ID
// DELETE /users/:userId/sessions/:sessionId
// ========================================

export const userSessionIdSchema = z.object({
    userId: z
        .string()
        .regex(/^\d+$/, "Invalid user ID"),

    sessionId: z
        .string()
        .min(1, "Session ID is required")
}).strict();