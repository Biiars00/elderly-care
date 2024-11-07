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
        url:
          process.env.NODE_ENV_URL === 'production'
            ? 'https://elderly-care-1f7roekco-beatrizs-projects-bc3b103e.vercel.app/api-docs'
            : 'http://localhost:3000/api-docs',
      },
    ],
  },
  apis: ['./src/swagger/*.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
