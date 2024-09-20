import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/database';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import loanRoutes from './routes/loanRoutes';
import purchaseRoutes from './routes/purchaseRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './config/swaggerConfig';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurar Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas de la API
app.use('/', authRoutes);
app.use('/', bookRoutes);
app.use('/', loanRoutes);
app.use('/', purchaseRoutes);

// Conexión a la base de datos
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
