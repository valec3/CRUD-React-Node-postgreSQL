import { Router } from "express";
import {
    signup,
    signin,
    signout,
    profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
// Create Router
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", signout);
router.get("/profile", authRequired, profile);



export default router;
