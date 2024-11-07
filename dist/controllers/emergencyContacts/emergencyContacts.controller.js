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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const emergencyContacts_service_1 = __importDefault(require("../../services/emergencyContacts/emergencyContacts.service"));
let EmergencyContactsController = class EmergencyContactsController {
    constructor(emergencyContactsService) {
        this.emergencyContactsService = emergencyContactsService;
    }
    getEmergencyContacts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.emergencyContactsService.getEmergencyContacts();
                if (!response) {
                    throw new Error('Resource not found!');
                }
                res.status(200).send(response);
            }
            catch (error) {
                res.status(500).send({ message: `Internal server error - ${error}` });
            }
        });
    }
    getEmergencyContactById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.contactId) {
                    throw new Error('Resource is missing!');
                }
                const response = yield this.emergencyContactsService.getEmergencyContactById(req.params.contactId);
                if (!response) {
                    throw new Error('Resource not found!');
                }
                res.status(200).send(response);
            }
            catch (error) {
                res.status(500).send({ message: `Internal server error - ${error}` });
            }
        });
    }
    addEmergencyContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.name && !req.body.phone) {
                    throw new Error('Resource is missing!');
                }
                const response = yield this.emergencyContactsService.addEmergencyContact(req.body.name, req.body.phone);
                if (!response) {
                    throw new Error('Resource not found!');
                }
                res.status(201).send(response);
            }
            catch (error) {
                res.status(500).send({ message: `Internal server error - ${error}` });
            }
        });
    }
    updateEmergencyContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.contactId && !req.body.name && !req.body.phone) {
                    throw new Error('Resource is missing!');
                }
                const response = yield this.emergencyContactsService.updateEmergencyContact(req.params.contactId, req.body.name, req.body.phone);
                if (!response) {
                    throw new Error('Resource not found!');
                }
                res.status(200).send(response);
            }
            catch (error) {
                res.status(500).send({ message: `Internal server error - ${error}` });
            }
        });
    }
    removeEmergencyContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.contactId) {
                    throw new Error('Resource is missing!');
                }
                const response = yield this.emergencyContactsService.removeEmergencyContact(req.params.contactId);
                if (!response) {
                    throw new Error('Resource not found!');
                }
                res.status(204).send(response);
            }
            catch (error) {
                res.status(500).send({ message: `Internal server error - ${error}` });
            }
        });
    }
};
EmergencyContactsController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('EmergencyContactsService')),
    __metadata("design:paramtypes", [emergencyContacts_service_1.default])
], EmergencyContactsController);
exports.default = EmergencyContactsController;
