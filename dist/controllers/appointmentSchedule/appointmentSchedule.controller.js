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
const appointmentSchedule_service_1 = __importDefault(require("../../services/appointmentSchedule/appointmentSchedule.service"));
let AppointmentScheduleController = class AppointmentScheduleController {
    constructor(appointmentScheduleService) {
        this.appointmentScheduleService = appointmentScheduleService;
    }
    async getSchedule() {
        try {
            const response = await this.appointmentScheduleService.getSchedule();
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async getScheduleById(id) {
        try {
            if (!id) {
                throw new Error('Resource is missing!');
            }
            const response = await this.appointmentScheduleService.getScheduleById(id);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async addSchedule(body) {
        const { doctorId, locationId, date, time, createdAt } = body;
        try {
            if (!doctorId && !locationId && !date && !time && !createdAt) {
                throw new Error('Resource is missing!');
            }
            const response = await this.appointmentScheduleService.addSchedule(doctorId, locationId, date, time, createdAt);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async updateSchedule(id, body) {
        const { doctorId, locationId, date, time, createdAt } = body;
        try {
            if (!id && !doctorId && !locationId && !date && !time && !createdAt) {
                throw new Error('Resource is missing!');
            }
            const response = await this.appointmentScheduleService.updateSchedule(id, doctorId, locationId, date, time, createdAt);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async removeSchedule(id) {
        try {
            if (!id) {
                throw new Error('Resource is missing!');
            }
            const response = await this.appointmentScheduleService.removeSchedule(id);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async confirmSchedule(id, body) {
        const { confirmed } = body;
        try {
            if (!id && !confirmed) {
                throw new Error('Resource is missing!');
            }
            const response = await this.appointmentScheduleService.confirmSchedule(id, confirmed);
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
], AppointmentScheduleController.prototype, "getSchedule", null);
__decorate([
    (0, tsoa_1.Get)('/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentScheduleController.prototype, "getScheduleById", null);
__decorate([
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppointmentScheduleController.prototype, "addSchedule", null);
__decorate([
    (0, tsoa_1.Put)('/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentScheduleController.prototype, "updateSchedule", null);
__decorate([
    (0, tsoa_1.Delete)('/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppointmentScheduleController.prototype, "removeSchedule", null);
__decorate([
    (0, tsoa_1.Put)('/confirmed/:id'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentScheduleController.prototype, "confirmSchedule", null);
AppointmentScheduleController = __decorate([
    (0, tsyringe_1.injectable)(),
    (0, tsoa_1.Route)('appointment'),
    (0, tsoa_1.Tags)('Agendamento de Consultas'),
    __param(0, (0, tsyringe_1.inject)('AppointmentScheduleService')),
    __metadata("design:paramtypes", [appointmentSchedule_service_1.default])
], AppointmentScheduleController);
exports.default = AppointmentScheduleController;
