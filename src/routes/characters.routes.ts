import { Router } from "express";
import { createCharacter } from "../controllers/characters.controller";

const router = Router();

router.post("/", createCharacter);

export default router;
