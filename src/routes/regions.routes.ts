import { Router } from "express";
import {
  getRegions,
  getImperials,
  getXenos,
  getWarp,
} from "../controllers/regions.controller";

const router = Router();

router.get("/", getRegions);
router.get("/imperials", getImperials);
router.get("/xenos", getXenos);
router.get("/warp", getWarp);

export default router;
