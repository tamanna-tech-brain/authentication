import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import addressRouter from "./routes/address.routes.js"
import cookieParser from "cookie-parser";
const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/address", addressRouter)

export default app;