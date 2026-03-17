import mongoose from "mongoose";

import { refreshToken }  from "../controllers/auth.controller.js";
const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "user is required"]
        },
    city: {
        type: String,
        required: [true, " city is required"]
    },
    zip: {
        type: Number,
        required: [true, "Zip  is required"]
    },
    state:{
        type: String,
        required : [true, "state is required"]
    },
    country: {
        type: String,
        required: true
    },
    line2: {
        type: String,
        required: true
    },
    line3: {
        type: String,
        required: true
    }
},{
        timestamps: true
    }

)    

const AddressModel = mongoose.model("address", addressSchema)
export default AddressModel;