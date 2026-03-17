import mongoose from "mongoose";
import * as authController from "../controllers/auth.controller.js"
import Address from "../models/address.models.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";



export async function createAddress(req, res) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token not provided" });

    const decoded = jwt.verify(token, config.JWT_SECRET);
    const userId = decoded.id;
    const {  city, zip, state, country, line2, line3}  = req.body;

     if (!city || !zip || !state || !country || !line2 || !line3) {
      return res.status(400).json({ message: "All address fields are required" });
    }
  

const address = await Address.create({
      user: userId,
      city,
      zip,
      state,
      country,
      line2,
      line3,
    });

    res.status(201).json({
        message: "Address created",
        address,
    });
    res.status(501).json({message : error});
}

export async function getAllAddress(req, res) {
    const addresses = await Address.find();
    res.status(201).json({
        message: "Addresses found",
        addresses,
    });
    res.status(501).json({message : error});
}

export async function deleteAddressById(req, res) {
    const { id } = req.params;
    const deletedAddress = await Address.findByIdAndDelete(id);
    res.status(201).json({
        message: "Addresses deleted",
        address : deletedAddress,
    });
    if (!deletedAddress) {
    res.status(404).json({message : error});
    }
}
export async function updateAddress(req, res) {
    const { id } = req.params;
    const UpdatedAddress = await Address.findByIdAndUpdate(id,req.body,{new:true});
    res.status(201).json({
        message: "Addresses updated",
        address : UpdatedAddress,
    });
    if(!updateAddress) {
    res.status(501).json({message : error});
    }
}

