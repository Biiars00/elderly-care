"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctor = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "doctor", { enumerable: true, get: function () { return tsyringe_1.container; } });
const doctor_controller_1 = __importDefault(require("../../controllers/doctor/doctor.controller"));
const doctor_service_1 = __importDefault(require("../../services/doctor/doctor.service"));
const doctorFromDB_repository_1 = __importDefault(require("../../repositories/doctor/doctorFromDB.repository"));
tsyringe_1.container.register('DoctorController', {
    useClass: doctor_controller_1.default,
});
tsyringe_1.container.register('DoctorService', {
    useClass: doctor_service_1.default,
});
tsyringe_1.container.register('DoctorFromDBRepository', {
    useClass: doctorFromDB_repository_1.default,
});
