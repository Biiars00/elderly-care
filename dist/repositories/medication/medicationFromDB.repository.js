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
    async getMedicationsFromDB(userId) {
        const refDB = await this.db.where('userId', '==', userId).get();
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
    async getMedicationByIdFromDB(id, userId) {
        const querySnapshot = await this.db.where('userId', '==', userId).get();
        const doc = querySnapshot.docs.find((doc) => doc.id === id);
        if (doc && doc.exists) {
            const data = doc.data();
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
    async addMedicationFromDB(data, userId) {
        const refDB = this.db;
        const docRef = refDB.doc();
        const id = docRef.id;
        const docData = await refDB.get();
        docData.docs.map((doc) => {
            if (data.name === doc.data().name) {
                console.error('Medication already exists!');
                throw new Error('Medication already exists!');
            }
        });
        await docRef.set({
            id: id,
            name: data.name,
            dosage: data.dosage,
            time: data.time,
            userId: userId,
        });
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
    async updateMedicationReminderFromDB(id, reminder, userId) {
        const refDB = await this.db.where('userId', '==', userId).get();
        const docRef = refDB.docs.find((doc) => doc.id === id);
        if (!docRef) {
            throw new Error('Document not found!');
        }
        docRef.ref.update({
            reminder: reminder,
        });
        return 'Medication updated successfully!';
    }
    async updateMedicationTakenFromDB(id, taken, userId) {
        const refDB = await this.db.where('userId', '==', userId).get();
        const docRef = refDB.docs.find((doc) => doc.id === id);
        if (!docRef) {
            throw new Error('Document not found!');
        }
        docRef.ref.update({
            taken: taken
        });
        return 'Medication updated successfully!';
    }
    async resetMedicationsFromDB(userId) {
        const refDB = await this.db.where('userId', '==', userId).get();
        refDB.docs.map((doc) => {
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
