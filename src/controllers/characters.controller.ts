import { Request, Response } from "express";
import z from "zod";

import { CharacterModel } from "../models/character.model";

import { characterSchema } from "../validators/characters.validator";

export const createCharacter = async (req: Request, res: Response) => {
  try {
    const result = characterSchema.safeParse(req.body);

    const newCharacter = new CharacterModel(result.data);

    if (!result.success) {
      return res.status(400).json({
        message: "Datos inválidos",
        errors: z.treeifyError(result.error),
      });
    }

    const savedCharacter = await newCharacter.save();

    return res.status(201).json(savedCharacter);
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern?.name) {
      return res.status(409).json({ message: "Este personaje ya existe" });
    }
    console.error("Error creando personaje:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
