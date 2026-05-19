import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { validateCreateProduct } from "../middlewares/validations";
import { createProductSchema } from "../validations/productSchema";
import { authentication } from "../middlewares/authMiddleware";
import { authorizeRole } from "../middlewares/authorizeRole";
import { upload } from "../lib/multer";

const router = Router();
router.get("/", authentication, authorizeRole(["admin"]), getAllProducts);
router.get("/:id", authentication, getProductById);
router.post(
  "/",
  upload.single("image"),
  authentication,
  validateCreateProduct(createProductSchema),
  createProduct,
);
router.put(
  "/:id",
  upload.single("image"),
  authentication,
  validateCreateProduct(createProductSchema),
  updateProduct,
);
router.delete("/:id", authentication, authorizeRole(["admin"]), deleteProduct);

export default router;
