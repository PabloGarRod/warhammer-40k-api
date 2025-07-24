import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send({ message: "Bienvenido a la API de Warhammer 40k" });
});

app.listen(PORT, () => {
  console.log(`API levantada en http://localhost:${PORT}/api/v1`);
});
