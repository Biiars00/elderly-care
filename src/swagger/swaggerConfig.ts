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
        url: 'https://elderly-care-three.vercel.app',
        description: 'Care Idosos - Local',
      },
      {
        url: 'https://elderly-care-three.vercel.app',
        description: 'Care Idosos - Produção',
      },
    ],
  },
  apis: ['./dist/swagger/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
