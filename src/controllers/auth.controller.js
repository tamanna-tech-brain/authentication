import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
import config from "../config/config.js";

export async function register(req, res) {
    console.log("BODY:", req.body);
    const { username, email, password } = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    });
    if (isAlreadyRegistered){
        return res.status(400).json({
            message: "username or email already existed"
        });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });
    const token = jwt.sign({
        id: user.id
    },
    config.JWT_SECRET,
    {
        expiresIn: "1d"
    }
)
res.status(201).json({
    message: "user registered successfully",
    user:{
        username: user.username,
        email: user.email,
    },
    token
});
}

export  async function getMe (req, res) {
   const token = req.headers.authorization?.split(" ")[1];
   if (!token ) {
    return res.status(401).json({
        message : "token not provided"
    })
   }
   const decoded = jwt.verify(token, config.JWT_SECRET)
   console.log(decoded)
 }