import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import './dependencies/dependencies';
import dotenv from 'dotenv';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './docs/swagger.json';
// import { expressAuthenticationRecasted } from './middlewares/auth';

dotenv.config();

const app: Application = express();

app.use(cors({
  origin: ["https://care-idosos-connect.vercel.app", "http://localhost:8080"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  // credentials: true,
  // allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Elderly Care!! 🧓👵');
});

// app.use('/user', async (req, res, next) => {
//   if (req.method !== 'POST') {
//     try {
//       await expressAuthenticationRecasted(req, 'jwt', undefined, res);
//       next();
//     } catch (err) {
//       res.status(401).send({ error: (err as Error).message });
//     }
//   } else {
//     next();
//   }
// });

RegisterRoutes(app);

app.use((_req, res) => {
  res.status(404).send({ status: 'Not Found!' });
});

export default app;
