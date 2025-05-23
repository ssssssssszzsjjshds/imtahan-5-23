import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
} from "../controller/productController.js";

const router = express.Router();

router.get("/products", getProduct);
router.post("/products", createProduct);

router.delete("/products/:id", deleteProduct);

export default router;