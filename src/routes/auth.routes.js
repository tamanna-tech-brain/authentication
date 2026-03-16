import { Router } from "express";
import *as authcontroller from "../controllers/auth.controller.js"
const authRouter = Router();

authRouter.post("/register", authcontroller.register)
authRouter.post("/login", authcontroller.login)
authRouter.get("/get-me", authcontroller.getMe)
authRouter.get("/refresh-token", authcontroller.refreshToken)
authRouter.get("/logout", authcontroller.logout)
authRouter.get("/logout-all", authcontroller.logoutAll)
authRouter.get("/verifyEmail", authcontroller.verifyEmail)
export default authRouter;