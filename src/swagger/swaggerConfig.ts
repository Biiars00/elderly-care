import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Care Idosos',
      version: '1.0.0',
      description: 'Documentação da API Care Idosos',
    },
    servers: [
      {
        url: process.env.NODE_ENV_URL_PROD || 'http://localhost:3000',
      },
    ],
  },
  apis: ['./dist/swagger/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
