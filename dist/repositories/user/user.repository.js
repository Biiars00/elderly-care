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
const bcrypt_1 = __importDefault(require("bcrypt"));
let UserFromDBRepository = class UserFromDBRepository {
    constructor() {
        this.db = databaseConfig_1.default.firestore().collection('users');
    }
    async addUserFromDB(userFirstName, userLastName, phone, email, password) {
        const refDB = this.db;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const docRef = await refDB.add({
            userFirstName: userFirstName,
            userLastName: userLastName,
            phone: phone,
            email: email,
            password: hashedPassword
        });
        docRef.update({ id: docRef.id });
        return 'User added successfully!';
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
};
UserFromDBRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserFromDBRepository);
exports.default = UserFromDBRepository;
