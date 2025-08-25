import express from "express";
import { clerkAuthCallback } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/auth/callback", clerkAuthCallback);

export default router;
