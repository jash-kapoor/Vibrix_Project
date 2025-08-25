// routes/auth.routes.js
import express from "express";
import { clerkAuthCallback } from "../controllers/auth.controller.js";

const router = express.Router();

// This is the route Clerk frontend (or webhook) will call
router.post("/callback", clerkAuthCallback);

export default router;
