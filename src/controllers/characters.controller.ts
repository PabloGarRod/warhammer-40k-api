import { Request, Response } from "express";
import z from "zod";

import { CharacterModel } from "../models/character.model";

import { characterSchema } from "../validators/characters.validator";

export const createCharacter = async (req: Request, res: Response) => {
  try {
    const result = characterSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Datos inválidos",
        errors: z.treeifyError(result.error),
      });
    }
    const newCharacter = new CharacterModel(result.data);

    const savedCharacter = await newCharacter.save();

    return res.status(201).json(savedCharacter);
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern?.idName) {
      return res.status(409).json({ message: "Este personaje ya existe" });
    }
    console.error("Error creando personaje:", error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error });
  }
};

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const { faction } = req.query;
    const filter: any = {};
    if (faction && typeof faction === "string") {
      filter.faction = new RegExp(`^${faction.trim()}$`, "i");
    }
    const characters = await CharacterModel.find(filter);
    res.status(200).json(characters);
  } catch (error) {
    console.log("Error al obtener los personajes:", error);
    res
      .status(500)
      .json({ message: "Error al obtener a los personajes", error });
  }
};

export const getOneCharacter = async (req: Request, res: Response) => {
  try {
    const { idName } = req.params;

    const character = await CharacterModel.findOne({
      idName,
    });
    if (!character) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }
    return res.status(200).json(character);
  } catch (error) {
    console.log("Error al obtener personaje:", error);
    res.status(500).json({ message: "Error al obtener personaje", error });
  }
};
