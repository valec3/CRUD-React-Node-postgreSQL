import { Router } from "express";
import { createPrograma, deletePrograma, getAllProgramas, getProgramaById, updatePrograma } from "../controllers/programas.controllers.js";

const router = Router();

router.get("/all", getAllProgramas);
router.post("/create", createPrograma);
router.put("/update/:id", updatePrograma);
router.delete("/delete/:id", deletePrograma);
router.get("/get/:id", getProgramaById);

export default router;
