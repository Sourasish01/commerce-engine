import express from "express";

// ROUTER---
const router = express.Router();

// AUTH ROUTES---

// Registration
router.post("/signup", (req, res) => {
    res.json({ message: "Signup route working" });
});

// Login
router.post("/login", (req, res) => {
    res.json({ message: "Login route working" });
});

// Logout
router.post("/logout", (req, res) => {
    res.json({ message: "Logout route working" });
});

// Refresh Access Token
router.post("/refresh-token", (req, res) => {
    res.json({ message: "Refresh route working" });
});


// Forgot Password
router.post("/forgot-password", (req, res) => {
    res.json({ message: "Forgot password route working" });
});

// Reset Password
router.post("/reset-password", (req, res) => {
    res.json({ message: "Reset password route working" });
});

// Verify Email
router.post("/verify-email", (req, res) => {
    res.json({ message: "Verify email route working" });
});

// Resend Verification Email
router.post("/resend-verification", (req, res) => {
    res.json({ message: "Resend verification route working" });
});

// GOOGLE OAUTH

// Start Google OAuth
router.get("/oauth/google", (req, res) => {
    res.json({ message: "Google OAuth login route working" });
});

// Google OAuth Callback
router.get("/oauth/google/callback", (req, res) => {
    res.json({ message: "Google OAuth callback route working" });
});


// EXPORT---
export default router;