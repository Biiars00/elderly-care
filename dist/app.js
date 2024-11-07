"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./swagger/swaggerConfig"));
const contacts_router_1 = __importDefault(require("./routes/contacts.router"));
const medicalServices_router_1 = __importDefault(require("./routes/medicalServices.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
app.use('/contacts', contacts_router_1.default);
app.use('/medicalServices', medicalServices_router_1.default);
app.use((_req, res) => {
    res.status(404).send({ status: 'Not Found!' });
});
exports.default = app;
