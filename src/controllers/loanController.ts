import { Request, Response } from 'express';
import pool from '../config/database';

export const loanBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params;
    const result = await pool.query(
      'INSERT INTO loans (user_id, book_id) VALUES ($1, $2) RETURNING *',
      [userId, bookId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error loaning book', error });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params;
    const result = await pool.query(
      'UPDATE loans SET return_date = CURRENT_TIMESTAMP WHERE user_id = $1 AND book_id = $2 AND return_date IS NULL RETURNING *',
      [userId, bookId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Loan not found or already returned' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error returning book', error });
  }
};