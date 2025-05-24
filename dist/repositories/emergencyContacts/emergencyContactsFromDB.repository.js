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
let EmergencyContactsFromDBRepository = class EmergencyContactsFromDBRepository {
    constructor() {
        this.contactsDB = databaseConfig_1.default.firestore().collection('contacts');
    }
    async getEmergencyContactsFromDB(userId) {
        const refDB = await this.contactsDB.where('userId', '==', userId).get();
        const contactList = refDB.docs.map((doc) => {
            const docData = doc.data();
            if (docData) {
                return docData;
            }
            else {
                throw new Error('Contact list not available!');
            }
        });
        return contactList;
    }
    async getEmergencyContactByIdFromDB(id, userId) {
        const refDB = await this.contactsDB.doc(id).get();
        const data = refDB.data();
        const userRefDB = await this.contactsDB.where('userId', '==', userId).get();
        if (refDB.exists && userRefDB.docs.length > 0) {
            const data = refDB.data();
            if (data) {
                return {
                    id: data.id,
                    name: data.name,
                    phone: data.phone,
                    relationship: data.relationship,
                    isMainContact: data.isMainContact,
                };
            }
            else {
                throw new Error('Contact not found!');
            }
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async addEmergencyContactFromDB(data, userId) {
        const refDB = this.contactsDB;
        const docRef = await refDB.add({
            userId: userId,
            name: data.name,
            phone: data.phone,
            relationship: data.relationship,
            isMainContact: data.isMainContact,
        });
        docRef.update({ id: docRef.id });
        return 'Contact added successfully!';
    }
    async updateEmergencyContactFromDB(id, data, userId) {
        const refDB = this.contactsDB;
        refDB.where('userId', '==', userId).get();
        refDB.doc(id).update({
            name: data.name,
            phone: data.phone,
            relationship: data.relationship,
            isMainContact: data.isMainContact,
        });
        return 'Playlist name updated successfully!';
    }
    async removeEmergencyContactFromDB(id, userId) {
        const refDB = this.contactsDB.doc(id);
        const docSnap = await refDB.get();
        if (!docSnap.exists) {
            throw new Error('Document not found!');
        }
        const data = docSnap.data();
        if (data?.userId !== userId) {
            throw new Error('Unauthorized to delete this contact!');
        }
        await refDB.delete();
        return 'Contact removed successfully!';
    }
};
EmergencyContactsFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], EmergencyContactsFromDBRepository);
exports.default = EmergencyContactsFromDBRepository;
