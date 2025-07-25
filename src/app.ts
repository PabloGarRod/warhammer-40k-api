import express from "express";
import faccionesRoutes from "./routes/factions.routes";
import regionsRoutes from "./routes/regions.routes";
import agesRoutes from "./routes/ages.routes";
import charactersRoutes from "./routes/characters.routes";

const app = express();

app.use(express.json());

app.use("/api/v1/factions", faccionesRoutes);
app.use("/api/v1/regions", regionsRoutes);
app.use("/api/v1/ages", agesRoutes);
app.use("/api/v1/characters", charactersRoutes);

app.get("/api/v1", (req, res) => {
  res.send({ message: "Bienvenido a la API de Warhammer 40k" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
