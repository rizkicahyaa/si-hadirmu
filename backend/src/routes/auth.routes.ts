import { Router } from "express";
import { login, register } from "../controllers/authController";

const router = Router();

// Health check
router.get("/health", (_req, res) => {
    res.json({ ok: true, service: "auth" });
});

// Auth endpoints
router.post("/login", login);
router.post("/register", register);

export default router;


