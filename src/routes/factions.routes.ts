import { Router } from "express";
import {
  getFactions,
  getImperio,
  getChaos,
  getXenos,
} from "../controllers/factions.controller";

const router = Router();

router.get("/", getFactions);
router.get("/empire", getImperio);
router.get("/chaos", getChaos);
router.get("/xenos", getXenos);

export default router;
