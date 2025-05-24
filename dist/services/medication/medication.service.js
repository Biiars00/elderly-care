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
let MedicationService = class MedicationService {
    constructor(medicationFromDBRepository) {
        this.medicationFromDBRepository = medicationFromDBRepository;
    }
    async getMedications(userId) {
        const responseDB = await this.medicationFromDBRepository.getMedicationsFromDB(userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB || [];
    }
    async getMedicationById(id, userId) {
        const responseDB = await this.medicationFromDBRepository.getMedicationByIdFromDB(id, userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
    async addMedication(data, userId) {
        const responseDB = await this.medicationFromDBRepository.addMedicationFromDB(data, userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
    async removeMedication(id, userId) {
        const responseDB = await this.medicationFromDBRepository.removeMedicationFromDB(id, userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
    async updateMedicationReminder(id, reminder, userId) {
        const responseDB = await this.medicationFromDBRepository.updateMedicationReminderFromDB(id, reminder, userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
    async updateMedicationTaken(id, taken, userId) {
        const responseDB = await this.medicationFromDBRepository.updateMedicationTakenFromDB(id, taken, userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
    async resetMedications(userId) {
        const responseDB = await this.medicationFromDBRepository.resetMedicationsFromDB(userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
};
MedicationService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('MedicationFromDBRepository')),
    __metadata("design:paramtypes", [Object])
], MedicationService);
exports.default = MedicationService;
