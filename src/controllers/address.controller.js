
import Address from "../models/address.models.js";




export async function createAddress(req, res) {
    const userId = req.userInfo.userId;
    const {  city, zip, state, country, line2, line3}  = req.body;

     if (!city || !zip || !state || !country || !line2 || !line3) {
      return res.status(400).json({ message: "All address fields are required" });
    }
  

const address = await Address.create({
      userId,
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
}

export async function getAddressById(req, res) {
    const { id } = req.params;
    const address = await Address.findById(id);
    if (!address) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.status(200).json({
        message: "Addresses found",
        address,
    });
     return res.status(500).json({ message: error.message });
}

export async function deleteAddressById(req, res) {
    const { id } = req.params;
    const deletedAddress = await Address.findByIdAndDelete(id);
    res.status(200).json({
        message: "Addresses deleted",
        address : deletedAddress,
    });
    
}
export async function updateAddressById(req, res) {
    const { id } = req.params;
    const UpdatedAddress = await Address.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({
        message: "Addresses updated",
        address : UpdatedAddress,
    });
    
}

export default { createAddress, deleteAddressById, updateAddressById, getAddressById}

