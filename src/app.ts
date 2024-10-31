import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger/swaggerConfig';
import contacts from './routes/contacts.router';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/contacts', contacts);

app.use((_req, res) => {
  res.status(404).send({ status: 'Not Found!' });
});

export default app;

// import 'reflect-metadata';
// import express from 'express';
// import cors from 'cors';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocs from './swagger/swaggerConfig';
// import contacts from './routes/contacts.router';

// class App {
//   public app: express.Express;

//   constructor(expressApp = express()) {
//     this.app = expressApp;

//     this.config();
//   }

//   private config(): void {
//     const allowedOrigins = ['http://localhost:3000'];

//     const options: cors.CorsOptions = {
//       origin: allowedOrigins,
//     };

//     this.app.use(cors(options));
//     this.app.use(express.json());
//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//     app.use('/contacts', contacts);
//     this.app.use((_req, res) => {
//       res.status(404).send({ status: 'Not Found!' });
//     });
//   }

//   public start(PORT: string | number): void {
//     this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
//   }
// }

// export { App };
// export const { app } = new App();
