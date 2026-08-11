import express from "express";

// ROUTER---
const router = express.Router();


// ADMIN ROUTES---


// Get all users
router.get("/users", (req, res) => {
    res.json({ message: "Get all users route working" });
});


// Get a specific user
router.get("/users/:userId", (req, res) => {
    res.json({ message: "Get user details route working" });
});


// Update user role
router.patch("/users/:userId/role", (req, res) => {
    res.json({ message: "Update user role route working" });
});


// Enable / disable user account
router.patch("/users/:userId/status", (req, res) => {
    res.json({ message: "Update user status route working" });
});


// Delete user account
router.delete("/users/:userId", (req, res) => {
    res.json({ message: "Delete user route working" });
});


// Get user's active sessions
router.get("/users/:userId/sessions", (req, res) => {
    res.json({ message: "Get user sessions route working" });
});


// Delete a specific user session
router.delete("/users/:userId/sessions/:sessionId", (req, res) => {
    res.json({ message: "Delete specific user session route working" });
});


// Logout user from all devices
router.delete("/users/:userId/sessions", (req, res) => {
    res.json({ message: "Logout user from all devices route working" });
});


// EXPORT---
export default router;