import { Router } from "express";
import { createAddress, getAddressById, deleteAddressById, updateAddressById} from "../controllers/address.controller.js"
import { authMiddleware } from "../utils/middleware.js";
const addressRouter = Router();


addressRouter.post("/create", authMiddleware, createAddress)
addressRouter.get("/get/:id", authMiddleware, getAddressById)
addressRouter.post("/delete/:id", authMiddleware, deleteAddressById)
addressRouter.post("/update/:id", authMiddleware, updateAddressById)
export default addressRouter;