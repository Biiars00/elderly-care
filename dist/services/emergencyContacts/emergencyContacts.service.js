"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let EmergencyContactsService = class EmergencyContactsService {
    constructor(emergencyContactsFromDBRepository) {
        this.emergencyContactsFromDBRepository = emergencyContactsFromDBRepository;
    }
    async getEmergencyContacts(userId) {
        const contactListFromDB = await this.emergencyContactsFromDBRepository.getEmergencyContactsFromDB(userId);
        if (!contactListFromDB) {
            throw new Error('Contact list not found!');
        }
        return contactListFromDB || [];
    }
    async getEmergencyContactById(id, userId) {
        const contactFromDB = await this.emergencyContactsFromDBRepository.getEmergencyContactByIdFromDB(id, userId);
        if (!contactFromDB) {
            throw new Error('Contact not found!');
        }
        return contactFromDB;
    }
    async addEmergencyContact(data, userId) {
        const addContactOnDB = await this.emergencyContactsFromDBRepository.addEmergencyContactFromDB(data, userId);
        if (!addContactOnDB) {
            throw new Error('The contact has not been added. Please try again!');
        }
        return addContactOnDB;
    }
    async updateEmergencyContact(id, data, userId) {
        const updateContactOnDB = await this.emergencyContactsFromDBRepository.updateEmergencyContactFromDB(id, data, userId);
        if (!updateContactOnDB) {
            throw new Error('Contact updated successfully!');
        }
        return updateContactOnDB;
    }
    async removeEmergencyContact(id, userId) {
        const updateContactOnDB = await this.emergencyContactsFromDBRepository.removeEmergencyContactFromDB(id, userId);
        if (!updateContactOnDB) {
            throw new Error('Contact removed successfully!');
        }
        return updateContactOnDB;
    }
};
EmergencyContactsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('EmergencyContactsFromDBRepository')),
    __metadata("design:paramtypes", [Object])
], EmergencyContactsService);
exports.default = EmergencyContactsService;
