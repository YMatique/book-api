import { BookController } from "../controllers/bookController";
import { Router } from "express";

const bookController = new BookController();
const router = Router();

router.get('/book', bookController.get);
router.get('/book/:id', bookController.getById);
router.post('/book', bookController.create);
router.put('/book/:id', bookController.update);
router.delete('/book/:id', bookController.delete);

export default router;