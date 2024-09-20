import { Request, Response } from "express";
import pool from "../config/database";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export const purchaseBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId, token } = req.body;

    const bookResult = await pool.query(
      "SELECT price FROM books WHERE id = $1",
      [bookId]
    );
    if (bookResult.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    const price = bookResult.rows[0].price;

    const charge = await stripe.charges.create({
      amount: Math.round(price * 100), 
      currency: "usd",
      source: token,
      description: `Book purchase: ID ${bookId}`,
    });

    const purchaseResult = await pool.query(
      "INSERT INTO purchases (user_id, book_id, amount) VALUES ($1, $2, $3) RETURNING *",
      [userId, bookId, price]
    );

    res.status(201).json({
      message: "Purchase successful",
      purchase: purchaseResult.rows[0],
      charge: charge,
    });
  } catch (error) {
    res.status(500).json({ message: "Error processing purchase", error });
  }
};
