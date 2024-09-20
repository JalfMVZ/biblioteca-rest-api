import express from 'express';
import { purchaseBook } from '../controllers/purchaseController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/api/purchase', authMiddleware, purchaseBook);

export default router;
