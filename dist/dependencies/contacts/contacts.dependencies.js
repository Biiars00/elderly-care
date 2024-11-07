"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emergencyContacts = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "emergencyContacts", { enumerable: true, get: function () { return tsyringe_1.container; } });
const emergencyContacts_controller_1 = __importDefault(require("../../controllers/emergencyContacts/emergencyContacts.controller"));
const emergencyContacts_service_1 = __importDefault(require("../../services/emergencyContacts/emergencyContacts.service"));
const emergencyContactsFromDB_repository_1 = __importDefault(require("../../repositories/emergencyContacts/emergencyContactsFromDB.repository"));
tsyringe_1.container.register('EmergencyContactsController', {
    useClass: emergencyContacts_controller_1.default,
});
tsyringe_1.container.register('EmergencyContactsService', {
    useClass: emergencyContacts_service_1.default,
});
tsyringe_1.container.register('EmergencyContactsFromDBRepository', {
    useClass: emergencyContactsFromDB_repository_1.default,
});
