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
let EmergencyContactsFromDBRepository = class EmergencyContactsFromDBRepository {
    constructor() {
        this.contactsDB = databaseConfig_1.default.firestore().collection('contacts');
    }
    getEmergencyContactsFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.contactsDB.get();
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
        });
    }
    getEmergencyContactByIdFromDB(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.contactsDB.doc(contactId).get();
            if (refDB.exists) {
                const data = refDB.data();
                if (data) {
                    return {
                        contactId: data.contactId,
                        name: data.name,
                        phone: data.phone,
                    };
                }
                else {
                    throw new Error('Contact not found!');
                }
            }
            else {
                throw new Error('Document not found!');
            }
        });
    }
    addEmergencyContactFromDB(name, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = this.contactsDB;
            const docRef = yield refDB.add({
                name: name,
                phone: phone,
            });
            docRef.update({ contactId: docRef.id });
            return 'Contact added successfully!';
        });
    }
    updateEmergencyContactFromDB(contactId, name, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.contactsDB.doc(contactId).get();
            if (refDB.exists) {
                refDB.ref.update({
                    name: name,
                    phone: phone,
                });
                return 'Contact updated successfully!';
            }
            else {
                throw new Error('Document not found!');
            }
        });
    }
    removeEmergencyContactFromDB(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDB = yield this.contactsDB.doc(contactId).get();
            if (refDB.exists) {
                refDB.ref.delete();
                return 'Contact removed successfully!';
            }
            else {
                throw new Error('Document not found!');
            }
        });
    }
};
EmergencyContactsFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], EmergencyContactsFromDBRepository);
exports.default = EmergencyContactsFromDBRepository;
