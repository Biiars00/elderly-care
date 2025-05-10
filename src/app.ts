import 'reflect-metadata';
import express, { Application } from 'express';
import './dependencies/dependencies';
import dotenv from 'dotenv';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './docs/swagger.json';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Elderly Care!! 🧓👵');
});

RegisterRoutes(app);

app.use((_req, res) => {
  res.status(404).send({ status: 'Not Found!' });
});

export default app;
