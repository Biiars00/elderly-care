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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
let EmergencyContactsService = class EmergencyContactsService {
    constructor(emergencyContactsFromDBRepository) {
        this.emergencyContactsFromDBRepository = emergencyContactsFromDBRepository;
    }
    getEmergencyContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const contactListFromDB = yield this.emergencyContactsFromDBRepository.getEmergencyContactsFromDB();
            if (!contactListFromDB) {
                throw new Error('Contact list not found!');
            }
            return contactListFromDB || [];
        });
    }
    getEmergencyContactById(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactFromDB = yield this.emergencyContactsFromDBRepository.getEmergencyContactByIdFromDB(contactId);
            if (!contactFromDB) {
                throw new Error('Contact not found!');
            }
            return contactFromDB;
        });
    }
    addEmergencyContact(name, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const addContactOnDB = yield this.emergencyContactsFromDBRepository.addEmergencyContactFromDB(name, phone);
            if (!addContactOnDB) {
                throw new Error('The contact has not been added. Please try again!');
            }
            return addContactOnDB;
        });
    }
    updateEmergencyContact(contactId, name, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateContactOnDB = yield this.emergencyContactsFromDBRepository.updateEmergencyContactFromDB(contactId, name, phone);
            if (!updateContactOnDB) {
                throw new Error('Contact updated successfully!');
            }
            return updateContactOnDB;
        });
    }
    removeEmergencyContact(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateContactOnDB = yield this.emergencyContactsFromDBRepository.removeEmergencyContactFromDB(contactId);
            if (!updateContactOnDB) {
                throw new Error('Contact removed successfully!');
            }
            return updateContactOnDB;
        });
    }
};
EmergencyContactsService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('EmergencyContactsFromDBRepository')),
    __metadata("design:paramtypes", [Object])
], EmergencyContactsService);
exports.default = EmergencyContactsService;
