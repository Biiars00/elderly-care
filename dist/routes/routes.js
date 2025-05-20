"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const user_controller_1 = __importDefault(require("../controllers/user/user.controller"));
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const medication_controller_1 = __importDefault(require("../controllers/medication/medication.controller"));
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const location_controller_1 = __importDefault(require("../controllers/location/location.controller"));
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const emergencyContacts_controller_1 = __importDefault(require("../controllers/emergencyContacts/emergencyContacts.controller"));
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const doctor_controller_1 = __importDefault(require("../controllers/doctor/doctor.controller"));
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const appointmentSchedule_controller_1 = __importDefault(require("../controllers/appointmentSchedule/appointmentSchedule.controller"));
const expressAuthentication_1 = require("../middlewares/expressAuthentication");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "IUserData": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "string", "required": true },
            "userFirstName": { "dataType": "string", "required": true },
            "userLastName": { "dataType": "string", "required": true },
            "phone": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IUserData.Exclude_keyofIUserData.userId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userFirstName": { "dataType": "string", "required": true }, "userLastName": { "dataType": "string", "required": true }, "phone": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true }, "password": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IUserData.userId_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IUserData.Exclude_keyofIUserData.userId__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_IUserData_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userId": { "dataType": "string" }, "userFirstName": { "dataType": "string" }, "userLastName": { "dataType": "string" }, "phone": { "dataType": "string" }, "email": { "dataType": "string" }, "password": { "dataType": "string" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IUserData.Exclude_keyofIUserData.password__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userId": { "dataType": "string", "required": true }, "userFirstName": { "dataType": "string", "required": true }, "userLastName": { "dataType": "string", "required": true }, "phone": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IUserData.password_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IUserData.Exclude_keyofIUserData.password__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IMedicationsData": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "dosage": { "dataType": "double", "required": true },
            "time": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IMedicationsData.Exclude_keyofIMedicationsData.id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "dosage": { "dataType": "double", "required": true }, "time": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IMedicationsData.id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IMedicationsData.Exclude_keyofIMedicationsData.id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.taken__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "reminder": { "dataType": "boolean", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IResetMedicationsData.taken_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.taken__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.reminder__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "taken": { "dataType": "boolean", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IResetMedicationsData.reminder_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.reminder__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ILocationData": {
        "dataType": "refObject",
        "properties": {
            "locationId": { "dataType": "string", "required": true },
            "locationName": { "dataType": "string", "required": true },
            "locationAddress": { "dataType": "string", "required": true },
            "locationCity": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IContactsData": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "phone": { "dataType": "string", "required": true },
            "relationship": { "dataType": "string", "required": true },
            "isMainContact": { "dataType": "boolean", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IContactsData.Exclude_keyofIContactsData.id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "phone": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "relationship": { "dataType": "string", "required": true }, "isMainContact": { "dataType": "boolean", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IContactsData.id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IContactsData.Exclude_keyofIContactsData.id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDoctorsData": {
        "dataType": "refObject",
        "properties": {
            "doctorId": { "dataType": "string", "required": true },
            "doctorName": { "dataType": "string", "required": true },
            "specialty": { "dataType": "string", "required": true },
            "image": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAppointmentScheduleData": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "doctorId": { "dataType": "string", "required": true },
            "locationId": { "dataType": "string", "required": true },
            "date": { "dataType": "string", "required": true },
            "time": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IAppointmentScheduleData.Exclude_keyofIAppointmentScheduleData.id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "time": { "dataType": "string", "required": true }, "doctorId": { "dataType": "string", "required": true }, "locationId": { "dataType": "string", "required": true }, "date": { "dataType": "string", "required": true }, "createdAt": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IAppointmentScheduleData.id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IAppointmentScheduleData.Exclude_keyofIAppointmentScheduleData.id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IConfirmScheduleData": {
        "dataType": "refObject",
        "properties": {
            "confirmed": { "dataType": "boolean", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsUserController_addUser = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IUserData.userId_" },
    };
    app.post('/user/sign-up', ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default.prototype.addUser)), async function UserController_addUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_addUser, request, response });
            const controller = tsyringe_1.container.resolve(user_controller_1.default);
            await templateService.apiHandler({
                methodName: 'addUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_loginUser = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_IUserData_" },
    };
    app.post('/user/login', ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default.prototype.loginUser)), async function UserController_loginUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_loginUser, request, response });
            const controller = tsyringe_1.container.resolve(user_controller_1.default);
            await templateService.apiHandler({
                methodName: 'loginUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getUsers = {};
    app.get('/user', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default.prototype.getUsers)), async function UserController_getUsers(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUsers, request, response });
            const controller = tsyringe_1.container.resolve(user_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getLocationById = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
    };
    app.get('/user/:userId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.default.prototype.getLocationById)), async function UserController_getLocationById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getLocationById, request, response });
            const controller = tsyringe_1.container.resolve(user_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getLocationById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_getMedications = {};
    app.get('/medication', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.getMedications)), async function MedicationController_getMedications(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_getMedications, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getMedications',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_getMedicationById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/medication/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.getMedicationById)), async function MedicationController_getMedicationById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_getMedicationById, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getMedicationById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_addMedication = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IMedicationsData.id_" },
    };
    app.post('/medication', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.addMedication)), async function MedicationController_addMedication(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_addMedication, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'addMedication',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_removeMedication = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/medication/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.removeMedication)), async function MedicationController_removeMedication(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_removeMedication, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'removeMedication',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_updateMedicationReminder = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IResetMedicationsData.taken_" },
    };
    app.put('/medication/reminder/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.updateMedicationReminder)), async function MedicationController_updateMedicationReminder(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_updateMedicationReminder, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'updateMedicationReminder',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_updateMedicationTaken = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IResetMedicationsData.reminder_" },
    };
    app.put('/medication/taken/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.updateMedicationTaken)), async function MedicationController_updateMedicationTaken(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_updateMedicationTaken, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'updateMedicationTaken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMedicationController_resetMedications = {};
    app.put('/medication/reset', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(medication_controller_1.default.prototype.resetMedications)), async function MedicationController_resetMedications(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_resetMedications, request, response });
            const controller = tsyringe_1.container.resolve(medication_controller_1.default);
            await templateService.apiHandler({
                methodName: 'resetMedications',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsLocationController_getLocations = {};
    app.get('/location', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(location_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(location_controller_1.default.prototype.getLocations)), async function LocationController_getLocations(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsLocationController_getLocations, request, response });
            const controller = tsyringe_1.container.resolve(location_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getLocations',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsLocationController_getLocationById = {
        locationId: { "in": "path", "name": "locationId", "required": true, "dataType": "string" },
    };
    app.get('/location/:locationId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(location_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(location_controller_1.default.prototype.getLocationById)), async function LocationController_getLocationById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsLocationController_getLocationById, request, response });
            const controller = tsyringe_1.container.resolve(location_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getLocationById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsEmergencyContactsController_getEmergencyContacts = {};
    app.get('/contacts', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default.prototype.getEmergencyContacts)), async function EmergencyContactsController_getEmergencyContacts(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_getEmergencyContacts, request, response });
            const controller = tsyringe_1.container.resolve(emergencyContacts_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getEmergencyContacts',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsEmergencyContactsController_getEmergencyContactById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/contacts/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default.prototype.getEmergencyContactById)), async function EmergencyContactsController_getEmergencyContactById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_getEmergencyContactById, request, response });
            const controller = tsyringe_1.container.resolve(emergencyContacts_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getEmergencyContactById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsEmergencyContactsController_addEmergencyContact = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IContactsData.id_" },
    };
    app.post('/contacts', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default.prototype.addEmergencyContact)), async function EmergencyContactsController_addEmergencyContact(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_addEmergencyContact, request, response });
            const controller = tsyringe_1.container.resolve(emergencyContacts_controller_1.default);
            await templateService.apiHandler({
                methodName: 'addEmergencyContact',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsEmergencyContactsController_updateEmergencyContact = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IContactsData.id_" },
    };
    app.put('/contacts/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default.prototype.updateEmergencyContact)), async function EmergencyContactsController_updateEmergencyContact(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_updateEmergencyContact, request, response });
            const controller = tsyringe_1.container.resolve(emergencyContacts_controller_1.default);
            await templateService.apiHandler({
                methodName: 'updateEmergencyContact',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsEmergencyContactsController_removeEmergencyContact = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/contacts/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(emergencyContacts_controller_1.default.prototype.removeEmergencyContact)), async function EmergencyContactsController_removeEmergencyContact(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_removeEmergencyContact, request, response });
            const controller = tsyringe_1.container.resolve(emergencyContacts_controller_1.default);
            await templateService.apiHandler({
                methodName: 'removeEmergencyContact',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsDoctorController_getDoctors = {};
    app.get('/doctor', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(doctor_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(doctor_controller_1.default.prototype.getDoctors)), async function DoctorController_getDoctors(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsDoctorController_getDoctors, request, response });
            const controller = tsyringe_1.container.resolve(doctor_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getDoctors',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsDoctorController_getDoctorById = {
        doctorId: { "in": "path", "name": "doctorId", "required": true, "dataType": "string" },
    };
    app.get('/doctor/:doctorId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(doctor_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(doctor_controller_1.default.prototype.getDoctorById)), async function DoctorController_getDoctorById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsDoctorController_getDoctorById, request, response });
            const controller = tsyringe_1.container.resolve(doctor_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getDoctorById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAppointmentScheduleController_getSchedule = {};
    app.get('/appointment', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default.prototype.getSchedule)), async function AppointmentScheduleController_getSchedule(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_getSchedule, request, response });
            const controller = tsyringe_1.container.resolve(appointmentSchedule_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAppointmentScheduleController_getScheduleById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/appointment/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default.prototype.getScheduleById)), async function AppointmentScheduleController_getScheduleById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_getScheduleById, request, response });
            const controller = tsyringe_1.container.resolve(appointmentSchedule_controller_1.default);
            await templateService.apiHandler({
                methodName: 'getScheduleById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAppointmentScheduleController_addSchedule = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IAppointmentScheduleData.id_" },
    };
    app.post('/appointment', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default.prototype.addSchedule)), async function AppointmentScheduleController_addSchedule(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_addSchedule, request, response });
            const controller = tsyringe_1.container.resolve(appointmentSchedule_controller_1.default);
            await templateService.apiHandler({
                methodName: 'addSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAppointmentScheduleController_updateSchedule = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_IAppointmentScheduleData.id_" },
    };
    app.put('/appointment/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default.prototype.updateSchedule)), async function AppointmentScheduleController_updateSchedule(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_updateSchedule, request, response });
            const controller = tsyringe_1.container.resolve(appointmentSchedule_controller_1.default);
            await templateService.apiHandler({
                methodName: 'updateSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAppointmentScheduleController_removeSchedule = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/appointment/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default.prototype.removeSchedule)), async function AppointmentScheduleController_removeSchedule(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_removeSchedule, request, response });
            const controller = tsyringe_1.container.resolve(appointmentSchedule_controller_1.default);
            await templateService.apiHandler({
                methodName: 'removeSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAppointmentScheduleController_confirmSchedule = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "IConfirmScheduleData" },
    };
    app.put('/appointment/confirmed/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default)), ...((0, runtime_1.fetchMiddlewares)(appointmentSchedule_controller_1.default.prototype.confirmSchedule)), async function AppointmentScheduleController_confirmSchedule(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_confirmSchedule, request, response });
            const controller = tsyringe_1.container.resolve(appointmentSchedule_controller_1.default);
            await templateService.apiHandler({
                methodName: 'confirmSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return async function runAuthenticationMiddleware(request, response, next) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts = [];
            const pushAndRethrow = (error) => {
                failedAttempts.push(error);
                throw error;
            };
            const secMethodOrPromises = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises = [];
                    for (const name in secMethod) {
                        secMethodAndPromises.push((0, expressAuthentication_1.expressAuthentication)(request, name, secMethod[name])
                            .catch(pushAndRethrow));
                    }
                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                }
                else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push((0, expressAuthentication_1.expressAuthentication)(request, name, secMethod[name])
                            .catch(pushAndRethrow));
                    }
                }
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next();
            }
            catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
