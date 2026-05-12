import { Router } from "express";
import { getUser } from "../controllers/helloController";

const router = Router();

router.get("/hello", getUser);

export default router;