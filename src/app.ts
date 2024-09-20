import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/database';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import loanRoutes from './routes/loanRoutes';
import purchaseRoutes from './routes/purchaseRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', authRoutes);
app.use('/', bookRoutes);
app.use('/', loanRoutes);
app.use('/', purchaseRoutes);

pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Database connected successfully:', result.rows[0].now);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
