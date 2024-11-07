"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = exports.emergencyContacts = void 0;
const contacts_dependencies_1 = require("./contacts/contacts.dependencies");
Object.defineProperty(exports, "emergencyContacts", { enumerable: true, get: function () { return contacts_dependencies_1.emergencyContacts; } });
const medicalServices_dependencies_1 = require("./medicalServices/medicalServices.dependencies");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return medicalServices_dependencies_1.medicalServices; } });
