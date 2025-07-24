import { Request, Response } from "express";
import { FactionModel } from "../models/faction.models";

export const getFactions = async (req: Request, res: Response) => {
  try {
    const factions = await FactionModel.find();
    res.status(200).json(factions);
  } catch (error) {
    console.error("Error al obtener facciones:", error);
    res.status(500).json({ message: "Error al obtener facciones" });
  }
};

export const getImperio = (_req: Request, res: Response) => {
  res.json({
    faction: "Imperio",
    description: "La humanidad organizada bajo el Emperador.",
  });
};

export const getChaos = (_req: Request, res: Response) => {
  res.json({
    faction: "Chaos",
    description: "Entidades del Warp corrompidas por el caos.",
  });
};

export const getXenos = (_req: Request, res: Response) => {
  res.json({
    faction: "Xenos",
    description: "Razas alienígenas enemigas del Imperio.",
  });
};
