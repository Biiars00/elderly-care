"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "location", { enumerable: true, get: function () { return tsyringe_1.container; } });
const location_controller_1 = __importDefault(require("../../controllers/location/location.controller"));
const location_service_1 = __importDefault(require("../../services/location/location.service"));
const location_repository_1 = __importDefault(require("../../repositories/location/location.repository"));
tsyringe_1.container.register('LocationController', {
    useClass: location_controller_1.default,
});
tsyringe_1.container.register('LocationService', {
    useClass: location_service_1.default,
});
tsyringe_1.container.register('LocationFromDBRepository', {
    useClass: location_repository_1.default,
});
