import express from 'express';
import BookController from '../controllers/bookController.js';

const bookController = new BookController();

const router = express.Router();

router.post('/', bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookDetail);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;