import jwt from "jsonwebtoken";
import config from "../config/config.js";
export function authMiddleware(req, res,next) {
const token = req.headers.authorization?.split(" ")[1];
    if (!token) 
        return res.status(401).json({ message: "Token not provided" });

    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.userInfo ={ userId:  decoded.id};
    next();
    
}

export default authMiddleware;