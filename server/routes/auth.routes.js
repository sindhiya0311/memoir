import express from "express";
import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator.js";

import validate from "../middleware/validation.middleware.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerValidation, validate, register);

router.post("/login", loginValidation, validate, login);

router.post("/logout", logout);

router.get("/me", protect, getCurrentUser);

export default router;
