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
const databaseConfig_1 = __importDefault(require("../../database/databaseConfig"));
let MedicalServicesFromDBRepository = class MedicalServicesFromDBRepository {
    constructor() {
        this.servicesDB = databaseConfig_1.default.firestore().collection('services');
    }
    getMedicalServicesFromDB(service) {
        return __awaiter(this, void 0, void 0, function* () {
            if (service === 'Consulta') {
                const refDB = yield this.servicesDB
                    .where('service', '==', 'Consulta')
                    .get();
                const servicesList = refDB.docs.map((doc) => {
                    const docData = doc.data();
                    if (docData) {
                        return docData;
                    }
                    else {
                        throw new Error('Document not found!');
                    }
                });
                return servicesList;
            }
            else if (service === 'Exame') {
                const refDB = yield this.servicesDB.where('service', '==', 'Exame').get();
                const servicesList = refDB.docs.map((doc) => {
                    const docData = doc.data();
                    if (docData) {
                        return docData;
                    }
                    else {
                        throw new Error('Document not found!');
                    }
                });
                return servicesList;
            }
            else {
                throw new Error('Provide valid data!');
            }
        });
    }
    getMedicalServiceByIdFromDB(serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.servicesDB.doc(serviceId).get();
            if (refDB.exists) {
                const data = refDB.data();
                if (data) {
                    return data;
                }
                else {
                    throw new Error('Service not found!');
                }
            }
            else {
                throw new Error('Document not found!');
            }
        });
    }
    addMedicalServiceFromDB(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = this.servicesDB;
            const docRef = yield refDB.add(data);
            docRef.update({ serviceId: docRef.id });
            return 'Service added successfully!';
        });
    }
    updateMedicalServiceFromDB(serviceId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.servicesDB.doc(serviceId).get();
            if (refDB.exists) {
                refDB.ref.update({
                    name: data.name,
                    phone: data.phone,
                    service: data.service,
                    serviceId: data.serviceId,
                    medicalSpecialty: data.medicalSpecialty,
                    doctor: data.doctor,
                    date: data.date,
                    time: data.time,
                });
                return 'Service updated successfully!';
            }
            else {
                throw new Error('Document not found!');
            }
        });
    }
    removeMedicalServiceFromDB(serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.servicesDB.doc(serviceId).get();
            if (refDB.exists) {
                refDB.ref.delete();
                return 'Service removed successfully!';
            }
            else {
                throw new Error('Document not found!');
            }
        });
    }
};
MedicalServicesFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], MedicalServicesFromDBRepository);
exports.default = MedicalServicesFromDBRepository;
