import { Router } from "express";
import productRoute from "./productRoute";
import userRoute from "./userRoute";
import { apiKeyMiddleware } from "../middlewares/apiKeyMiddleware";
import { errorHandler } from "../middlewares/errorHandlers";
import authRoute from "./authRoute";

const router = Router();

router.use("/products", productRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);
router.use(errorHandler);

export default router;
