import express from 'express';
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";


dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/product", productRoutes);

app.listen(5000, ()=> {
    connectDB();
    console.log("5000");
})