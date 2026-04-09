import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = Router()

authRouter.post("/register", authController.registerUserController)

authRouter.post("/login", authController.loginUserController)

export default authRouter