import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

const PORT = process.env.PORT || 5000;
app.use("/api", employeeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
