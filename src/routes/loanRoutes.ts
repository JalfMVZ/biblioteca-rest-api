import express from 'express';
import { loanBook, returnBook } from '../controllers/loanController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/api/loans/:userId/:bookId', authMiddleware, loanBook);
router.put('/api/loans/:userId/:bookId', authMiddleware, returnBook);

export default router;
