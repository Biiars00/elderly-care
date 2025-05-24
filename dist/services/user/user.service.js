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
const jwtAuthentication_1 = require("../../middlewares/jwtAuthentication");
let UserService = class UserService {
    constructor(userFromDBRepository) {
        this.userFromDBRepository = userFromDBRepository;
    }
    async addUser(data) {
        const responseDB = await this.userFromDBRepository.addUserFromDB(data);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        return responseDB;
    }
    async loginUser(data) {
        let accessToken = "";
        const responseDB = await this.userFromDBRepository.getUserCheckFromDB(data);
        if (!responseDB) {
            throw new Error("User not exists!");
        }
        if (responseDB.userId &&
            responseDB.email === data.email &&
            responseDB.password === data.password) {
            accessToken = (0, jwtAuthentication_1.generateToken)({
                userId: responseDB.userId,
                email: responseDB.email,
            });
        }
        if (!accessToken) {
            throw new Error("Invalid credentials!");
        }
        return {
            userId: responseDB.userId,
            email: responseDB.email,
            token: accessToken,
        };
    }
    async getUsers() {
        const responseDB = await this.userFromDBRepository.getUsersFromDB();
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        const data = responseDB.map((user) => {
            const userData = {
                userId: user.userId,
                userFirstName: user.userFirstName,
                userLastName: user.userLastName,
                phone: user.phone,
                email: user.email
            };
            return userData;
        });
        return data;
    }
    async getUserById(userId) {
        const responseDB = await this.userFromDBRepository.getUserByIdFromDB(userId);
        if (!responseDB) {
            throw new Error('Data not found!');
        }
        const data = {
            userId: responseDB.userId,
            userFirstName: responseDB.userFirstName,
            userLastName: responseDB.userLastName,
            phone: responseDB.phone,
            email: responseDB.email
        };
        return data;
    }
};
UserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserFromDBRepository')),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.default = UserService;
