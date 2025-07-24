import { Request, Response } from "express";

export const getRegions = (_req: Request, res: Response) => {
  res.json({
    imperials: {
      name: "Regiones Imperiales",
      description: "Territorios controlados por el Imperio de la Humanidad.",
    },
    xenos: {
      name: "Xenos",
      description: "Regiones bajo dominio de razas alienígenas.",
    },
    warp: {
      name: "Warp",
      description:
        "Dimensión inmaterium, caótica e impredecible. También conocida como la disformidad",
    },
  });
};

export const getImperials = (_req: Request, res: Response) => {
  res.json({
    name: "Imperiales",
    description: "Territorios controlados por el Imperio.",
  });
};

export const getXenos = (_req: Request, res: Response) => {
  res.json({
    name: "Xenos",
    description: "Regiones bajo dominio de razas alienígenas.",
  });
};

export const getWarp = (_req: Request, res: Response) => {
  res.json({
    name: "Warp",
    description: "Dimensión inmaterium caótica e impredecible.",
  });
};
