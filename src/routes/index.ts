import { Router } from "express";
import productRoute from "./productRoute";
import userRoute from "./userRoute";
import { apiKeyMiddleware } from "../middlewares/apiKeyMiddleware";
import { errorHandler } from "../middlewares/errorHandlers";

const router = Router();

router.use("/products", productRoute);
router.use("/users", apiKeyMiddleware, userRoute);
router.use(errorHandler);

export default router;
