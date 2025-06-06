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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const databaseConfig_1 = __importDefault(require("../../database/databaseConfig"));
let AppointmentScheduleFromDBRepository = class AppointmentScheduleFromDBRepository {
    constructor() {
        this.servicesDB = databaseConfig_1.default.firestore().collection('schedules');
    }
    async getScheduleFromDB(userId) {
        const refDB = await this.servicesDB.where('userId', '==', userId).get();
        const scheduleList = refDB.docs.map((doc) => {
            const docData = doc.data();
            if (docData) {
                return docData;
            }
            else {
                throw new Error('Document not found!');
            }
        });
        return scheduleList;
    }
    async getScheduleByIdFromDB(id, userId) {
        const refDB = this.servicesDB.doc(id);
        const docSnap = await refDB.get();
        if (!docSnap.exists) {
            throw new Error('Schedule not found!');
        }
        if (docSnap.exists) {
            const data = docSnap.data();
            if (data) {
                const data = docSnap.data();
                if (data.userId !== userId) {
                    throw new Error('Unauthorized to access this schedule!');
                }
                return data;
            }
            else {
                throw new Error('Schedule not found!');
            }
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async addScheduleFromDB(data, userId) {
        const refDB = this.servicesDB;
        const docRef = await refDB.add({
            doctorId: data.doctorId,
            locationId: data.locationId,
            date: data.date,
            time: data.time,
            createdAt: data.createdAt,
            userId: userId
        });
        docRef.update({ id: docRef.id });
        return 'Schedule added successfully!';
    }
    async updateScheduleFromDB(id, data, userId) {
        const refDB = this.servicesDB.doc(id);
        const docRef = await this.servicesDB.doc(id).get();
        if (!docRef.exists) {
            throw new Error('Schedule not found!');
        }
        const dataAppointment = docRef.data();
        if (dataAppointment.userId !== userId) {
            throw new Error('Unauthorized to update this schedule!');
        }
        refDB.update({
            userId: userId,
            doctorId: data.doctorId,
            locationId: data.locationId,
            date: data.date,
            time: data.time,
            createdAt: data.createdAt
        });
        return 'Schedule updated successfully!';
    }
    async removeScheduleFromDB(id, userId) {
        const refDB = this.servicesDB.doc(id);
        const doc = await refDB.get();
        if (doc.exists && doc.data()?.userId === userId) {
            await refDB.delete();
            return 'Schedule removed successfully!';
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async confirmScheduleFromDB(id, confirmed, userId) {
        const refDB = await this.servicesDB.doc(id).get();
        const data = refDB.data();
        if (refDB.exists) {
            refDB.ref.update({
                confirmed: confirmed,
            });
            return {
                ...data,
                confirmed: confirmed
            };
        }
        else {
            throw new Error('Document not found!');
        }
    }
};
AppointmentScheduleFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], AppointmentScheduleFromDBRepository);
exports.default = AppointmentScheduleFromDBRepository;
