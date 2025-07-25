import mongoose from "mongoose";

process.loadEnvFile();

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("✅ Conexión exitosa a MongoDB Atlas");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error de conexión:", error);
    process.exit(1);
  });
