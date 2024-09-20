import express from 'express';
import { purchaseBook } from '../controllers/purchaseController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Purchases
 *   description: Operaciones de compra de libros
 */

/**
 * @swagger
 * /api/purchase:
 *   post:
 *     summary: Comprar un libro
 *     tags: [Purchases]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookId:
 *                 type: string
 *                 description: ID del libro a comprar
 *     responses:
 *       201:
 *         description: Compra realizada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/api/purchase', authMiddleware, purchaseBook);

export default router;
