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
let MedicationFromDBRepository = class MedicationFromDBRepository {
    constructor() {
        this.db = databaseConfig_1.default.firestore().collection('medications');
    }
    async getMedicationsFromDB() {
        const refDB = await this.db.get();
        const medicationList = refDB.docs.map((doc) => {
            const docData = doc.data();
            if (docData) {
                return docData;
            }
            else {
                throw new Error('Document not found!');
            }
        });
        return medicationList;
    }
    async getMedicationByIdFromDB(id) {
        const refDB = await this.db.doc(id).get();
        if (refDB.exists) {
            const data = refDB.data();
            if (data) {
                return data;
            }
            else {
                throw new Error('Data not found!');
            }
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async addMedicationFromDB(name, dosage, time) {
        const refDB = this.db;
        const docRef = await refDB.add({
            name: name,
            dosage: dosage,
            time: time,
        });
        docRef.update({ id: docRef.id });
        return 'Medication added successfully!';
    }
    async removeMedicationFromDB(id) {
        const refDB = await this.db.doc(id).get();
        if (refDB.exists) {
            refDB.ref.delete();
            return 'Medication removed successfully!';
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async updateMedicationReminderFromDB(id, reminder) {
        const refDB = await this.db.doc(id).get();
        const data = refDB.data();
        if (refDB.exists) {
            refDB.ref.update({
                ...data,
                reminder: reminder,
            });
            return 'Medication reminder has been updated successfully!';
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async updateMedicationTakenFromDB(id, taken) {
        const refDB = await this.db.doc(id).get();
        const data = refDB.data();
        if (refDB.exists) {
            refDB.ref.update({
                ...data,
                taken: taken,
            });
            return 'The medication taken has been successfully updated!';
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async resetMedicationsFromDB() {
        const refDB = await this.db.get();
        const updateMedicationList = refDB.docs.map((doc) => {
            const data = doc.data();
            if (data) {
                doc.ref.update({
                    taken: false,
                    reminder: false,
                });
            }
            else {
                throw new Error('Document not found!');
            }
        });
        return 'Medications have been reset successfully!';
    }
};
MedicationFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], MedicationFromDBRepository);
exports.default = MedicationFromDBRepository;
