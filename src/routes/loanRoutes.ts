import express from 'express';
import { loanBook, returnBook } from '../controllers/loanController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Loans
 *   description: Operaciones de préstamo de libros
 */

/**
 * @swagger
 * /api/loans/{userId}/{bookId}:
 *   post:
 *     summary: Prestar un libro
 *     tags: [Loans]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *       - name: bookId
 *         in: path
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Libro prestado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/api/loans/:userId/:bookId', authMiddleware, loanBook);

/**
 * @swagger
 * /api/loans/{userId}/{bookId}:
 *   put:
 *     summary: Devolver un libro
 *     tags: [Loans]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *       - name: bookId
 *         in: path
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro devuelto exitosamente
 *       404:
 *         description: Préstamo no encontrado
 */
router.put('/api/loans/:userId/:bookId', authMiddleware, returnBook);

export default router;
