import { AuthorController } from "../controllers/authorController";
import { Router } from "express";

const authorController = new AuthorController();

const router = Router();
router.get('/author', authorController.get);
router.get('/author/:id', authorController.getById);
router.post('/author', authorController.create);
router.put('/author/:id', authorController.update);
router.delete('/author/:id', authorController.delete);
export default router;