import express from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Operaciones de gestión de libros
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get('/api/books', getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     tags: [Books]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
 *       404:
 *         description: Libro no encontrado
 */
router.get('/api/books/:id', getBookById);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/api/books', authMiddleware, createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Actualizar un libro
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
 *       404:
 *         description: Libro no encontrado
 */
router.put('/api/books/:id', authMiddleware, updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Libro eliminado exitosamente
 *       404:
 *         description: Libro no encontrado
 */
router.delete('/api/books/:id', authMiddleware, deleteBook);

export default router;
