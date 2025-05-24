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
let UserFromDBRepository = class UserFromDBRepository {
    constructor() {
        this.db = databaseConfig_1.default.firestore().collection('users');
    }
    async addUserFromDB(data) {
        const refDB = this.db;
        const docRef = await refDB.add({
            userFirstName: data.userFirstName,
            userLastName: data.userLastName,
            phone: data.phone,
            email: data.email,
            password: data.password
        });
        docRef.update({ userId: docRef.id });
        return {
            userId: docRef.id,
            userFirstName: data.userFirstName,
            userLastName: data.userLastName,
            phone: data.phone,
            email: data.email,
            password: data.password
        };
    }
    async getUsersFromDB() {
        const refDB = await this.db.get();
        const usersList = refDB.docs.map((doc) => {
            const docData = doc.data();
            if (docData) {
                return { ...docData, password: docData.password };
            }
            else {
                throw new Error('Document not found!');
            }
        });
        return usersList;
    }
    async getUserByIdFromDB(userId) {
        const refDB = await this.db.doc(userId).get();
        if (refDB.exists) {
            const data = refDB.data();
            if (data) {
                return data;
            }
            else {
                throw new Error('User not found!');
            }
        }
        else {
            throw new Error('Document not found!');
        }
    }
    async getUserCheckFromDB(data) {
        const refDB = this.db
            .where('email', '==', data.email)
            .where('password', '==', data.password);
        const snapshot = await refDB.get();
        const doc = snapshot.docs[0];
        const dataDoc = doc.data();
        if (data) {
            return {
                userId: dataDoc.userId,
                email: data.email,
                password: data.password,
            };
        }
        else {
            throw new Error('User not found!');
        }
    }
};
UserFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserFromDBRepository);
exports.default = UserFromDBRepository;
