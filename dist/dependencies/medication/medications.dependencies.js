"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medications = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "medications", { enumerable: true, get: function () { return tsyringe_1.container; } });
const medication_controller_1 = __importDefault(require("../../controllers/medication/medication.controller"));
const medication_service_1 = __importDefault(require("../../services/medication/medication.service"));
const medicationFromDB_repository_1 = __importDefault(require("../../repositories/medication/medicationFromDB.repository"));
tsyringe_1.container.register('MedicationController', {
    useClass: medication_controller_1.default,
});
tsyringe_1.container.register('MedicationService', {
    useClass: medication_service_1.default,
});
tsyringe_1.container.register('MedicationFromDBRepository', {
    useClass: medicationFromDB_repository_1.default,
});
