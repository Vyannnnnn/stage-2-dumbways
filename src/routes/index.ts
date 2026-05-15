import { Router } from "express";
import productRoute from "./productRoute";
import userRoute from "./userRoute";

const router = Router();

router.use("/products", productRoute);
router.use("/users", userRoute);

export default router;
