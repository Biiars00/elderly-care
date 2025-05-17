"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return tsyringe_1.container; } });
const user_controller_1 = __importDefault(require("../../controllers/user/user.controller"));
const user_repository_1 = __importDefault(require("../../repositories/user/user.repository"));
const user_service_1 = __importDefault(require("../../services/user/user.service"));
tsyringe_1.container.register('UserController', {
    useClass: user_controller_1.default,
});
tsyringe_1.container.register('UserFromDBRepository', {
    useClass: user_repository_1.default,
});
tsyringe_1.container.register('UserService', {
    useClass: user_service_1.default,
});
