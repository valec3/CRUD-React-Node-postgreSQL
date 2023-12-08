import { Router } from "express";
import { createFacultad, deleteFacultad, updateFacultad, getFacultades, getFacultadById } from "../controllers/facultades.controller.js";
const router = Router();

router.get("/all", getFacultades);
router.post("/create", createFacultad);
router.put("/update/:id", updateFacultad);
router.delete("/delete/:id", deleteFacultad);
router.get("/get/:id", getFacultadById);

export default router;