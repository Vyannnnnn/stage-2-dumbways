import { Router } from "express";
import { getProfile } from "../controllers/profileController";

const router = Router();
router.get("/profile/:name", getProfile);

export default router;