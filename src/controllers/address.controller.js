import userModel from "../models/user.model.js";
import addressModel from "../models/address.modes.js";

export async function createAddress(req, res) {
    const address = await addressModel.create(req.body);
    res.status(201).json({
        message: "Address created",
        address
    });
    res.status(501).json({message : error});
}

export async function getAllAddress(req, res) {
    const addresses = await addressModel.find();
    res.status(201).json({
        message: "Addresses found",
        addresses
    });
    res.status(501).json({message : error});

}
export async function deleteAddressById(req, res) {
    const { id } = req.params;
    const deletedAddress = await addressModel.findByIdAndDelete(id);
    res.status(201).json({
        message: "Addresses deleted",
        address : deletedAddress
    });
    if (!deletedAddress) {
    res.status(404).json({message : error});
    }
}
export async function updateAddress(req, res) {
    const { id } = req.params;
    const UpdatedAddress = await addressModel.findByIdAndUpdate(id,req.body,{new:true});
    res.status(201).json({
        message: "Addresses updated",
        address : UpdatedAddress
    });
    if(!updateAddress) {
    res.status(501).json({message : error});
    }
}
