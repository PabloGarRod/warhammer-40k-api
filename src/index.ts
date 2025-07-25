import app from "./app";
import { connectDB } from "./config/database";

process.loadEnvFile();

const PORT = process.env.PORT ?? 1234;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`API levantada en http://localhost:${PORT}/api/v1`);
  });
};

startServer();
