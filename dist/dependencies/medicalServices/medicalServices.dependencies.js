"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicalServices = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "medicalServices", { enumerable: true, get: function () { return tsyringe_1.container; } });
const medicalServices_controller_1 = __importDefault(require("../../controllers/medicalServices/medicalServices.controller"));
const medicalServicesFromDB_repository_1 = __importDefault(require("../../repositories/medicalServices/medicalServicesFromDB.repository"));
const medicalServices_service_1 = __importDefault(require("../../services/medicalServices/medicalServices.service"));
tsyringe_1.container.register('MedicalServicesController', {
    useClass: medicalServices_controller_1.default,
});
tsyringe_1.container.register('MedicalServicesFromDBRepository', {
    useClass: medicalServicesFromDB_repository_1.default,
});
tsyringe_1.container.register('MedicalServices', {
    useClass: medicalServices_service_1.default,
});
