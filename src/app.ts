import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger/swaggerConfig';
import contacts from './routes/contacts.router';
import medicalServicesRoutes from './routes/medicalServices.router';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get('/api-docs.json', (req, res) => {
  res.json(swaggerDocs);
});

app.use('/contacts', contacts);
app.use('/medicalServices', medicalServicesRoutes);

app.use((_req, res) => {
  res.status(404).send({ status: 'Not Found!' });
});

export default app;
