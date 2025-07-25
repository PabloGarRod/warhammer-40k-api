import mongoose from "mongoose";

process.loadEnvFile();

const MONGO_URI = process.env.MONGO_URI ?? "";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MONGODB");
  } catch (error) {
    console.error("Falló la conexión a MONGODB:", error);
    process.exit(1);
  }
};
