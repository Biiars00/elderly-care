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
const emergencyContacts_service_1 = __importDefault(require("../../services/emergencyContacts/emergencyContacts.service"));
const tsoa_1 = require("tsoa");
let EmergencyContactsController = class EmergencyContactsController {
    constructor(emergencyContactsService) {
        this.emergencyContactsService = emergencyContactsService;
    }
    async getEmergencyContacts(req) {
        try {
            const userId = req.user.userId;
            const response = await this.emergencyContactsService.getEmergencyContacts(userId);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async getEmergencyContactById(req, id) {
        try {
            if (!id) {
                throw new Error('Resource is missing!');
            }
            const userId = req.user.userId;
            const response = await this.emergencyContactsService.getEmergencyContactById(id, userId);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async addEmergencyContact(req, body) {
        const { name, phone, relationship, isMainContact } = body;
        try {
            if (!body) {
                throw new Error('Resource is missing!');
            }
            const userId = req.user.userId;
            const response = await this.emergencyContactsService.addEmergencyContact(body, userId);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async updateEmergencyContact(req, id, body) {
        const { name, phone, relationship, isMainContact } = body;
        try {
            if (!id && !body) {
                throw new Error('Resource is missing!');
            }
            const userId = req.user.userId;
            const response = await this.emergencyContactsService.updateEmergencyContact(id, body, userId);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async removeEmergencyContact(req, id) {
        try {
            if (!id) {
                throw new Error('Resource is missing!');
            }
            const userId = req.user.userId;
            const response = await this.emergencyContactsService.removeEmergencyContact(id, userId);
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
    (0, tsoa_1.Security)('jwt'),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmergencyContactsController.prototype, "getEmergencyContacts", null);
__decorate([
    (0, tsoa_1.Get)('/:id'),
    (0, tsoa_1.Security)('jwt'),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EmergencyContactsController.prototype, "getEmergencyContactById", null);
__decorate([
    (0, tsoa_1.Post)('/'),
    (0, tsoa_1.Security)('jwt'),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmergencyContactsController.prototype, "addEmergencyContact", null);
__decorate([
    (0, tsoa_1.Put)('/:id'),
    (0, tsoa_1.Security)('jwt'),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Path)()),
    __param(2, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], EmergencyContactsController.prototype, "updateEmergencyContact", null);
__decorate([
    (0, tsoa_1.Delete)('/:id'),
    (0, tsoa_1.Security)('jwt'),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EmergencyContactsController.prototype, "removeEmergencyContact", null);
EmergencyContactsController = __decorate([
    (0, tsyringe_1.injectable)(),
    (0, tsoa_1.Route)('contacts'),
    (0, tsoa_1.Tags)('Contatos de Emergência'),
    __param(0, (0, tsyringe_1.inject)('EmergencyContactsService')),
    __metadata("design:paramtypes", [emergencyContacts_service_1.default])
], EmergencyContactsController);
exports.default = EmergencyContactsController;
