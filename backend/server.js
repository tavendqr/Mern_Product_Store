import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";


dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://mern-product-store-frontend-09i6.onrender.com',
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    credentials: true
}));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    connectDB();
    console.log(`Server running on ${PORT}`);
})
