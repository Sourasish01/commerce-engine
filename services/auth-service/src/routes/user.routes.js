import express from "express";


// ROUTER---
const router = express.Router();



// USER ROUTES---


// Get current user's profile
router.get("/profile", (req, res) => {
    res.json({ message: "Get user profile route working" });
});


// Update current user's profile
router.patch("/profile", (req, res) => {
    res.json({ message: "Update user profile route working" });
});


// Change password
router.patch("/profile/password", (req, res) => {
    res.json({ message: "Change password route working" });
});


// Delete account
router.delete("/profile", (req, res) => {
    res.json({ message: "Delete account route working" });
});


// Get active sessions
router.get("/sessions", (req, res) => {
    res.json({ message: "Get active sessions route working" });
});


// Logout a specific session/device
router.delete("/sessions/:sessionId", (req, res) => {
    res.json({ message: "Delete specific session route working" });
});


// Logout from all devices
router.delete("/sessions", (req, res) => {
    res.json({ message: "Logout from all devices route working" });
});


// Enable 2FA
router.post("/profile/2fa/enable", (req, res) => {
    res.json({ message: "Enable 2FA route working" });
});


// Verify 2FA setup
router.post("/profile/2fa/verify", (req, res) => {
    res.json({ message: "Verify 2FA route working" });
});


// Disable 2FA
router.post("/profile/2fa/disable", (req, res) => {
    res.json({ message: "Disable 2FA route working" });
});



// EXPORT---
export default router;