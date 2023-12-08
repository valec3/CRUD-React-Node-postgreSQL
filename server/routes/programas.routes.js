import { Router } from "express";
import { getAllProgramas } from "../controllers/programas.controllers.js";

const router = Router();

router.get("/all", getAllProgramas);

export default router;
