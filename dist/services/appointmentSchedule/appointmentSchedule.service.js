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
let AppointmentScheduleService = class AppointmentScheduleService {
    constructor(appointmentScheduleFromDBRepository, doctorFromDBRepository, locationFromDBRepository) {
        this.appointmentScheduleFromDBRepository = appointmentScheduleFromDBRepository;
        this.doctorFromDBRepository = doctorFromDBRepository;
        this.locationFromDBRepository = locationFromDBRepository;
    }
    async getSchedule(userId) {
        const doctorData = await this.doctorFromDBRepository.getDoctorsFromDB();
        const locationData = await this.locationFromDBRepository.getLocationsFromDB();
        const appointmentData = await this.appointmentScheduleFromDBRepository.getScheduleFromDB(userId);
        if (!appointmentData && !doctorData && !locationData) {
            throw new Error('Data not found!');
        }
        const appointmentList = appointmentData.map((data) => {
            const doctor = doctorData.find((doc) => doc.doctorId === data.doctorId);
            const location = locationData.find((loc) => loc.locationId === data.locationId);
            if (!doctor || !location) {
                throw new Error('Doctor or location not found!');
            }
            return {
                ...data,
                doctorName: doctor.doctorName,
                specialty: doctor.specialty,
                locationName: location.locationName,
                locationAddress: location.locationAddress,
                locationCity: location.locationCity,
            };
        });
        return appointmentList || [];
    }
    async getScheduleById(id, userId) {
        const appointment = await this.appointmentScheduleFromDBRepository.getScheduleByIdFromDB(id, userId);
        const doctorData = await this.doctorFromDBRepository.getDoctorByIdFromDB(appointment.doctorId);
        const locationData = await this.locationFromDBRepository.getLocationByIdFromDB(appointment.locationId);
        if (!appointment && !doctorData && !locationData) {
            throw new Error('Data not found!');
        }
        return {
            ...appointment,
            doctorName: doctorData.doctorName,
            specialty: doctorData.specialty,
            locationName: locationData.locationName,
            locationAddress: locationData.locationAddress,
            locationCity: locationData.locationCity,
        };
    }
    async addSchedule(data, userId) {
        const addScheduleOnDB = await this.appointmentScheduleFromDBRepository.addScheduleFromDB(data, userId);
        if (!addScheduleOnDB) {
            throw new Error('Data not found!');
        }
        return 'Appointment added successfully!';
    }
    async updateSchedule(id, data, userId) {
        const updateScheduleOnDB = await this.appointmentScheduleFromDBRepository.updateScheduleFromDB(id, data, userId);
        if (!updateScheduleOnDB) {
            throw new Error('Data not found!');
        }
        return 'Appointment schedule updated successfully!';
    }
    async removeSchedule(id, userId) {
        const removeScheduleFromDB = await this.appointmentScheduleFromDBRepository.removeScheduleFromDB(id, userId);
        if (!removeScheduleFromDB) {
            throw new Error('Data not found!');
        }
        return 'Appointment schedule removed successfully!';
    }
    async confirmSchedule(id, confirmed, userId) {
        const confirmAppointmentFromDB = await this.appointmentScheduleFromDBRepository.confirmScheduleFromDB(id, confirmed, userId);
        if (!confirmAppointmentFromDB) {
            throw new Error('Data not found!');
        }
        return confirmAppointmentFromDB;
    }
};
AppointmentScheduleService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('AppointmentScheduleFromDBRepository')),
    __param(1, (0, tsyringe_1.inject)('DoctorFromDBRepository')),
    __param(2, (0, tsyringe_1.inject)('LocationFromDBRepository')),
    __metadata("design:paramtypes", [Object, Object, Object])
], AppointmentScheduleService);
exports.default = AppointmentScheduleService;
