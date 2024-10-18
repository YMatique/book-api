import { Router, RequestHandler } from "express";
import { CategoryController } from "../controllers/categoryController";

const router = Router();

const categoryController = new CategoryController();
router.get('/category', categoryController.get);
router.post('/category', categoryController.create);
router.get('/category/:id', categoryController.getById);
router.put('/category/:id', categoryController.update)

export default router;