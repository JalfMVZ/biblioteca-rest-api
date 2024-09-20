import { Request, Response } from 'express';
import pool from '../config/database';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, publicationYear, price } = req.body;
    const result = await pool.query(
      'INSERT INTO books (title, author, publication_year, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, author, publicationYear, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, publicationYear, price } = req.body;
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, publication_year = $3, price = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
      [title, author, publicationYear, price, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};