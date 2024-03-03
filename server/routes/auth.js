import express from "express";
import { login } from "../controllers/auth.js";
import { guestLogin } from "../controllers/auth.js";

const router = express.Router();
router.post("/login", login);
router.post("/guestLogin", guestLogin);

export default router;
