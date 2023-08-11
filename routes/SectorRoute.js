import express from "express";
import { getSectors, saveSector } from "../controllers/SectorController.js";
const router = express.Router();

router.get("/sectors", getSectors);
router.post("/sectors", saveSector);

export default router;
