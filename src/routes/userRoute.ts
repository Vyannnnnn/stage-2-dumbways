import { Router } from "express";
import { createUser, getAllUsers, transferPoints } from "../controllers/userController";
import { createUserSchema,  transferPointsSchema} from "../validations/userSchema";
import { validateCreateUser, validateTransferPoints } from "../middlewares/validations";

const router = Router();
router.post("/", validateCreateUser(createUserSchema), createUser);
router.get("/", getAllUsers);
router.post("/transfer", validateTransferPoints(transferPointsSchema), transferPoints);




export default router;