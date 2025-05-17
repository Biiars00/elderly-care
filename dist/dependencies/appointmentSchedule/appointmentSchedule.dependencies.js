"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchedule = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "appointmentSchedule", { enumerable: true, get: function () { return tsyringe_1.container; } });
const appointmentScheduleFromDB_repository_1 = __importDefault(require("../../repositories/appointmentSchedule/appointmentScheduleFromDB.repository"));
const appointmentSchedule_service_1 = __importDefault(require("../../services/appointmentSchedule/appointmentSchedule.service"));
const appointmentSchedule_controller_1 = __importDefault(require("../../controllers/appointmentSchedule/appointmentSchedule.controller"));
tsyringe_1.container.register('AppointmentScheduleController', {
    useClass: appointmentSchedule_controller_1.default,
});
tsyringe_1.container.register('AppointmentScheduleFromDBRepository', {
    useClass: appointmentScheduleFromDB_repository_1.default,
});
tsyringe_1.container.register('AppointmentScheduleService', {
    useClass: appointmentSchedule_service_1.default,
});
