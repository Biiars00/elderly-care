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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const tsoa_1 = require("tsoa");
const medication_service_1 = __importDefault(require("../../services/medication/medication.service"));
let MedicationController = class MedicationController {
    constructor(medicationService) {
        this.medicationService = medicationService;
    }
    // @Security('jwt')
    async getMedications() {
        try {
            const response = await this.medicationService.getMedications();
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    // @Security('jwt')
    async getMedicationById(id) {
        try {
            if (!id) {
                throw new Error('Resource is missing!');
            }
            const response = await this.medicationService.getMedicationById(id);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    // @Security('jwt')
    async addMedication(body) {
        const { name, dosage, time } = body;
        try {
            if (!name && !dosage && !time) {
                throw new Error('Resource is missing!');
            }
            const response = await this.medicationService.addMedication(name, dosage, time);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    // @Security('jwt')
    async removeMedication(id) {
        try {
            if (!id) {
                throw new Error('Resource is missing!');
            }
            const response = await this.medicationService.removeMedication(id);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    // @Security('jwt')
    async updateMedicationReminder(id, body) {
        const { reminder } = body;
        try {
            if (!id && !reminder) {
                throw new Error('Resource is missing!');
            }
            const response = await this.medicationService.updateMedicationReminder(id, reminder);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    // @Security('jwt')
    async updateMedicationTaken(id, body) {
        const { taken } = body;
        try {
            if (!id && !taken) {
                throw new Error('Resource is missing!');
            }
            const response = await this.medicationService.updateMedicationTaken(id, taken);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    // @Security('jwt')
    async resetMedications() {
        try {
            const response = await this.medicationService.resetMedications();
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
};
__decorate([
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "getMedications", null);
__decorate([
    (0, tsoa_1.Get)('/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "getMedicationById", null);
__decorate([
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "addMedication", null);
__decorate([
    (0, tsoa_1.Delete)('/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "removeMedication", null);
__decorate([
    (0, tsoa_1.Put)('/reminder/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "updateMedicationReminder", null);
__decorate([
    (0, tsoa_1.Put)('/taken/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "updateMedicationTaken", null);
__decorate([
    (0, tsoa_1.Put)('/reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicationController.prototype, "resetMedications", null);
MedicationController = __decorate([
    (0, tsyringe_1.injectable)(),
    (0, tsoa_1.Route)('medication'),
    (0, tsoa_1.Tags)('Medicações'),
    (0, tsoa_1.Security)('jwt'),
    __param(0, (0, tsyringe_1.inject)('MedicationService')),
    __metadata("design:paramtypes", [medication_service_1.default])
], MedicationController);
exports.default = MedicationController;
