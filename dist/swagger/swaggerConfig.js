"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
                url: process.env.NODE_ENV_URL === 'production'
                    ? 'https://elderly-care-1f7roekco-beatrizs-projects-bc3b103e.vercel.app/api-docs'
                    : 'http://localhost:3000/api-docs',
            },
        ],
    },
    apis: ['./src/swagger/*.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerDocs;
