import { Router } from "express";
import { register, login } from "../controllers/authControllers";
import { upload } from "../lib/multer";

const router = Router();
router.post("/register", upload.single("profilePicture"), register);
router.post("/login", login);

export default router;
