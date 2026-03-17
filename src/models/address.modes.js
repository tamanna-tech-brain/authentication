import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
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

const addressModel = mongoose.model("address", addressSchema)
export default addressModel;