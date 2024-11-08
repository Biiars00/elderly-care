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
                url: 'http://localhost:3000',
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
console.log(swaggerDocs);
exports.default = swaggerDocs;
