const express = require("express");
const authController = require("../controllers/authController");

const authRouter = express.Router();

// Route đăng ký
authRouter.post("/register", authController.registerUser);

// Route đăng nhập
authRouter.post("/login", authController.loginUser);

// Route đăng xuất
authRouter.post("/logout", authController.logoutUser);

module.exports = authRouter;
