import { Router } from "express";
import { createUser, getAllUsers, getUserById, transferPoints } from "../controllers/userController";
import { createUserSchema,  transferPointsSchema} from "../validations/userSchema";
import { validateCreateUser, validateTransferPoints } from "../middlewares/validations";
import { upload } from "../lib/multer";
import { authentication } from "../middlewares/authMiddleware";


const router = Router();
router.post("/", upload.single("profilePicture"), validateCreateUser(createUserSchema), createUser);
router.get("/profile", authentication, getAllUsers);
router.get("/profile/:id", authentication, getUserById);
router.post("/transfer", authentication, validateTransferPoints(transferPointsSchema), transferPoints);




export default router;