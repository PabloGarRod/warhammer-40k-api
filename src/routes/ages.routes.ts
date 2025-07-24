import { Router } from "express";

import { getAges } from "../controllers/ages.controller";

const router = Router();

router.get("/", getAges);

export default router;
