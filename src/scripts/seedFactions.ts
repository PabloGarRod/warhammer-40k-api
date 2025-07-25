import { connectDB } from "../config/database";
import { FactionModel } from "../models/faction.model";
import dotenv from "dotenv";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const factionsData = [
  {
    name: "Imperio de la humanidad",
    description:
      "El Imperio de la Humanidad es el mayor imperio estelar de la galaxia, gobernado por el Dios-Emperador desde la Sagrada Terra. Abarca un millón de mundos con una inmensa diversidad de entornos, culturas y poblaciones, desde junglas primitivas hasta ciudades colmena superpobladas. La variedad de mundos hace imposible calcular con precisión su número de habitantes, y las diferencias entre ellos son enormes en lenguaje, costumbres y apariencia.",
    imageURL: "https://wallpapercave.com/wp/wp10922989.jpg",
  },
  {
    name: "Fuerzas del Caos",
    description:
      "El Caos es la energía psíquica que forma la Disformidad, un plano espiritual inseparable de él. Representa una fuerza inmensa y corruptora, asociada con los Dioses del Caos, sus seguidores y su influencia. Aunque los psíquicos pueden usar esta energía para obtener habilidades sobrenaturales, también corren el riesgo de ser corrompidos física y mentalmente por su poder maligno.",

    imageURL: "https://wallpapercave.com/wp/wp10923004.jpg",
  },
  {
    name: "Razas xenos",
    description:
      'Xenos es un término en gótico clásico usado por el Imperio de la Humanidad para referirse a cualquier especie inteligente no humana, ya sea aliada o enemiga. Significa "extranjero" o "alienígena" y se emplea comúnmente como prefijo en palabras como xeno-artefacto o xenotecnología, que designan objetos o tecnologías de origen alienígena.',
    imageURL: "https://wallpapercave.com/wp/oUdhPgJ.jpg",
  },
];

const seedFactions = async () => {
  await connectDB();

  await FactionModel.deleteMany({}); // limpia colección antes

  await FactionModel.insertMany(factionsData);

  console.log("Factions seed completado");
  process.exit(0);
};

seedFactions();
