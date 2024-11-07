"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dependencies_1 = require("../dependencies/dependencies");
const express_1 = require("express");
const medicalServices_controller_1 = __importDefault(require("../controllers/medicalServices/medicalServices.controller"));
const medicalServicesRoutes = (0, express_1.Router)();
const medicalServicesController = dependencies_1.container.resolve(medicalServices_controller_1.default);
medicalServicesRoutes.get('/:service', (req, res) => {
    return medicalServicesController.getMedicalServices(req, res);
});
medicalServicesRoutes.get('/service/:serviceId', (req, res) => {
    return medicalServicesController.getMedicalServiceById(req, res);
});
medicalServicesRoutes.post('/', (req, res) => {
    return medicalServicesController.addMedicalService(req, res);
});
medicalServicesRoutes.put('/:serviceId', (req, res) => {
    return medicalServicesController.updateMedicalService(req, res);
});
medicalServicesRoutes.delete('/:serviceId', (req, res) => {
    return medicalServicesController.removeMedicalService(req, res);
});
exports.default = medicalServicesRoutes;
