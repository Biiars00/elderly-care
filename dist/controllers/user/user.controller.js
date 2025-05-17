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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const tsoa_1 = require("tsoa");
const user_service_1 = __importDefault(require("../../services/user/user.service"));
const jwtAuthentication_1 = require("../../middlewares/jwtAuthentication");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async addUser(body) {
        const { userFirstName, userLastName, phone, email, password } = body;
        try {
            const response = await this.userService.addUser(userFirstName, userLastName, phone, email, password);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async loginUser(body) {
        const { userId, email, password } = body;
        if (typeof userId !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            throw new Error('Email and password are required.');
        }
        try {
            const response = await this.userService.loginUser(userId, email, password);
            if (!response) {
                throw new Error('Resource not found!');
            }
            const accessToken = (0, jwtAuthentication_1.generateToken)({
                userId: userId,
                email: email,
            });
            return accessToken;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async getUsers() {
        try {
            const response = await this.userService.getUsers();
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
    async getLocationById(userId) {
        try {
            if (!userId) {
                throw new Error('Resource is missing!');
            }
            const response = await this.userService.getUserById(userId);
            if (!response) {
                throw new Error('Resource not found!');
            }
            return response;
        }
        catch (error) {
            throw new Error(`Internal server error - ${error}`);
        }
    }
};
__decorate([
    (0, tsoa_1.Post)('/sign-up'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    (0, tsoa_1.Post)('/login'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    (0, tsoa_1.Security)('jwt'),
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.Security)('jwt'),
    (0, tsoa_1.Get)('/:userId'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getLocationById", null);
UserController = __decorate([
    (0, tsyringe_1.injectable)(),
    (0, tsoa_1.Route)('user'),
    (0, tsoa_1.Tags)('Acesso de Usuário'),
    __param(0, (0, tsyringe_1.inject)('UserService')),
    __metadata("design:paramtypes", [user_service_1.default])
], UserController);
exports.default = UserController;
