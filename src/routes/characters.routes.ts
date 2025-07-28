import { Router } from "express";
import {
  createCharacter,
  getCharacters,
  getOneCharacter,
} from "../controllers/characters.controller";

const router = Router();

router.get("/", getCharacters);
router.get("/:idName", getOneCharacter);

router.post("/", createCharacter);

export default router;
