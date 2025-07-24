import { Request, Response } from "express";

export const getAges = (_req: Request, res: Response) => {
  res.json({
    terra: {
      name: "Era de Terra",
      time: "Del M1 al M15",
    },
    dark: {
      name: "Era oscura de la tecnología",
      time: "Del M15 al M25",
    },
    conflicts: {
      name: "Era de los Conflictos",
      time: "Del M25 al M30",
    },
    empire: {
      name: "Era del imperio",
      time: "Del M30 al M41",
    },
    indomitus: {
      name: "Era indomitus",
      time: "Del M41 a la actualidad",
    },
  });
};
