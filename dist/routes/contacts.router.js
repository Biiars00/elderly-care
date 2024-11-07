"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dependencies_1 = require("../dependencies/dependencies");
const express_1 = require("express");
const emergencyContacts_controller_1 = __importDefault(require("../controllers/emergencyContacts/emergencyContacts.controller"));
const contacts = (0, express_1.Router)();
const emergencyContactsController = dependencies_1.container.resolve(emergencyContacts_controller_1.default);
contacts.get('/', (req, res) => {
    return emergencyContactsController.getEmergencyContacts(req, res);
});
contacts.get('/:contactId', (req, res) => {
    return emergencyContactsController.getEmergencyContactById(req, res);
});
contacts.post('/', (req, res) => {
    return emergencyContactsController.addEmergencyContact(req, res);
});
contacts.put('/:contactId', (req, res) => {
    return emergencyContactsController.updateEmergencyContact(req, res);
});
contacts.delete('/:contactId', (req, res) => {
    return emergencyContactsController.removeEmergencyContact(req, res);
});
exports.default = contacts;
