import express from "express";
import { validateRegister, validateLogin } from "../validators/authValidator.js";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", validateRegister, registerUser);

router.post("/auth/login", validateLogin, loginUser);

export default router;
