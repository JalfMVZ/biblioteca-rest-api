import express from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/api/books', getAllBooks);
router.get('/api/books/:id', getBookById);
router.post('/api/books', authMiddleware, createBook);
router.put('/api/books/:id', authMiddleware, updateBook);
router.delete('/api/books/:id', authMiddleware, deleteBook);

export default router;
