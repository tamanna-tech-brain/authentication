import { Router } from "express";
import *as addresscontroller from "../controllers/address.controller.js"
const addressRouter = Router();

addressRouter.post("/create", addresscontroller.createAddress)
addressRouter.get("/get", addresscontroller.getAllAddress)
addressRouter.post("/delete/:id", addresscontroller.deleteAddressById)
addressRouter.post("/update/:id", addresscontroller.updateAddress)
export default addressRouter;