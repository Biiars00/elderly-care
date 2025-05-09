/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

import 'reflect-metadata';
import { container } from 'tsyringe';
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import MedicationController from '../controllers/medication/medication.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import LocationController from '../controllers/location/location.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import EmergencyContactsController from '../controllers/emergencyContacts/emergencyContacts.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import DoctorController from '../controllers/doctor/doctor.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import AppointmentScheduleController from '../controllers/appointmentSchedule/appointmentSchedule.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "IMedicationsData": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "dosage": {"dataType":"double","required":true},
            "time": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IMedicationsData.Exclude_keyofIMedicationsData.id__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"dosage":{"dataType":"double","required":true},"time":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IMedicationsData.id_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_IMedicationsData.Exclude_keyofIMedicationsData.id__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.taken__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"reminder":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IResetMedicationsData.taken_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.taken__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.reminder__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"taken":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IResetMedicationsData.reminder_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_IResetMedicationsData.Exclude_keyofIResetMedicationsData.reminder__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ILocationData": {
        "dataType": "refObject",
        "properties": {
            "locationId": {"dataType":"string","required":true},
            "locationName": {"dataType":"string","required":true},
            "locationAddress": {"dataType":"string","required":true},
            "locationCity": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IContactsData": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "relationship": {"dataType":"string","required":true},
            "isMainContact": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IContactsData.Exclude_keyofIContactsData.id__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"phone":{"dataType":"string","required":true},"relationship":{"dataType":"string","required":true},"isMainContact":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IContactsData.id_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_IContactsData.Exclude_keyofIContactsData.id__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDoctorsData": {
        "dataType": "refObject",
        "properties": {
            "doctorId": {"dataType":"string","required":true},
            "doctorName": {"dataType":"string","required":true},
            "specialty": {"dataType":"string","required":true},
            "image": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAppointmentScheduleData": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "doctorId": {"dataType":"string","required":true},
            "locationId": {"dataType":"string","required":true},
            "date": {"dataType":"string","required":true},
            "time": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IAppointmentScheduleData.Exclude_keyofIAppointmentScheduleData.id__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"time":{"dataType":"string","required":true},"doctorId":{"dataType":"string","required":true},"locationId":{"dataType":"string","required":true},"date":{"dataType":"string","required":true},"createdAt":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IAppointmentScheduleData.id_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_IAppointmentScheduleData.Exclude_keyofIAppointmentScheduleData.id__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IConfirmScheduleData": {
        "dataType": "refObject",
        "properties": {
            "confirmed": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsMedicationController_getMedications: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/medication',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.getMedications)),

            async function MedicationController_getMedications(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_getMedications, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'getMedications',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMedicationController_getMedicationById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/medication/:id',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.getMedicationById)),

            async function MedicationController_getMedicationById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_getMedicationById, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'getMedicationById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMedicationController_addMedication: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IMedicationsData.id_"},
        };
        app.post('/medication',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.addMedication)),

            async function MedicationController_addMedication(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_addMedication, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'addMedication',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMedicationController_removeMedication: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/medication/:id',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.removeMedication)),

            async function MedicationController_removeMedication(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_removeMedication, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'removeMedication',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMedicationController_updateMedicationReminder: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IResetMedicationsData.taken_"},
        };
        app.put('/medication/reminder/:id',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.updateMedicationReminder)),

            async function MedicationController_updateMedicationReminder(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_updateMedicationReminder, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'updateMedicationReminder',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMedicationController_updateMedicationTaken: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IResetMedicationsData.reminder_"},
        };
        app.put('/medication/taken/:id',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.updateMedicationTaken)),

            async function MedicationController_updateMedicationTaken(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_updateMedicationTaken, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'updateMedicationTaken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMedicationController_resetMedications: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.put('/medication/reset',
            ...(fetchMiddlewares<RequestHandler>(MedicationController)),
            ...(fetchMiddlewares<RequestHandler>(MedicationController.prototype.resetMedications)),

            async function MedicationController_resetMedications(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMedicationController_resetMedications, request, response });

                const controller = container.resolve(MedicationController)

              await templateService.apiHandler({
                methodName: 'resetMedications',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLocationController_getLocations: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/location',
            ...(fetchMiddlewares<RequestHandler>(LocationController)),
            ...(fetchMiddlewares<RequestHandler>(LocationController.prototype.getLocations)),

            async function LocationController_getLocations(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLocationController_getLocations, request, response });

                const controller = container.resolve(LocationController)

              await templateService.apiHandler({
                methodName: 'getLocations',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLocationController_getLocationById: Record<string, TsoaRoute.ParameterSchema> = {
                locationId: {"in":"path","name":"locationId","required":true,"dataType":"string"},
        };
        app.get('/location/:locationId',
            ...(fetchMiddlewares<RequestHandler>(LocationController)),
            ...(fetchMiddlewares<RequestHandler>(LocationController.prototype.getLocationById)),

            async function LocationController_getLocationById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLocationController_getLocationById, request, response });

                const controller = container.resolve(LocationController)

              await templateService.apiHandler({
                methodName: 'getLocationById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmergencyContactsController_getEmergencyContacts: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/contacts',
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController)),
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController.prototype.getEmergencyContacts)),

            async function EmergencyContactsController_getEmergencyContacts(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_getEmergencyContacts, request, response });

                const controller = container.resolve(EmergencyContactsController)

              await templateService.apiHandler({
                methodName: 'getEmergencyContacts',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmergencyContactsController_getEmergencyContactById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/contacts/:id',
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController)),
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController.prototype.getEmergencyContactById)),

            async function EmergencyContactsController_getEmergencyContactById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_getEmergencyContactById, request, response });

                const controller = container.resolve(EmergencyContactsController)

              await templateService.apiHandler({
                methodName: 'getEmergencyContactById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmergencyContactsController_addEmergencyContact: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IContactsData.id_"},
        };
        app.post('/contacts',
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController)),
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController.prototype.addEmergencyContact)),

            async function EmergencyContactsController_addEmergencyContact(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_addEmergencyContact, request, response });

                const controller = container.resolve(EmergencyContactsController)

              await templateService.apiHandler({
                methodName: 'addEmergencyContact',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmergencyContactsController_updateEmergencyContact: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IContactsData.id_"},
        };
        app.put('/contacts/:id',
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController)),
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController.prototype.updateEmergencyContact)),

            async function EmergencyContactsController_updateEmergencyContact(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_updateEmergencyContact, request, response });

                const controller = container.resolve(EmergencyContactsController)

              await templateService.apiHandler({
                methodName: 'updateEmergencyContact',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEmergencyContactsController_removeEmergencyContact: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/contacts/:id',
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController)),
            ...(fetchMiddlewares<RequestHandler>(EmergencyContactsController.prototype.removeEmergencyContact)),

            async function EmergencyContactsController_removeEmergencyContact(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEmergencyContactsController_removeEmergencyContact, request, response });

                const controller = container.resolve(EmergencyContactsController)

              await templateService.apiHandler({
                methodName: 'removeEmergencyContact',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDoctorController_getDoctors: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/doctor',
            ...(fetchMiddlewares<RequestHandler>(DoctorController)),
            ...(fetchMiddlewares<RequestHandler>(DoctorController.prototype.getDoctors)),

            async function DoctorController_getDoctors(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDoctorController_getDoctors, request, response });

                const controller = container.resolve(DoctorController)

              await templateService.apiHandler({
                methodName: 'getDoctors',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDoctorController_getDoctorById: Record<string, TsoaRoute.ParameterSchema> = {
                doctorId: {"in":"path","name":"doctorId","required":true,"dataType":"string"},
        };
        app.get('/doctor/:doctorId',
            ...(fetchMiddlewares<RequestHandler>(DoctorController)),
            ...(fetchMiddlewares<RequestHandler>(DoctorController.prototype.getDoctorById)),

            async function DoctorController_getDoctorById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDoctorController_getDoctorById, request, response });

                const controller = container.resolve(DoctorController)

              await templateService.apiHandler({
                methodName: 'getDoctorById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAppointmentScheduleController_getSchedule: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/appointment',
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController)),
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController.prototype.getSchedule)),

            async function AppointmentScheduleController_getSchedule(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_getSchedule, request, response });

                const controller = container.resolve(AppointmentScheduleController)

              await templateService.apiHandler({
                methodName: 'getSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAppointmentScheduleController_getScheduleById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/appointment/:id',
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController)),
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController.prototype.getScheduleById)),

            async function AppointmentScheduleController_getScheduleById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_getScheduleById, request, response });

                const controller = container.resolve(AppointmentScheduleController)

              await templateService.apiHandler({
                methodName: 'getScheduleById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAppointmentScheduleController_addSchedule: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IAppointmentScheduleData.id_"},
        };
        app.post('/appointment',
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController)),
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController.prototype.addSchedule)),

            async function AppointmentScheduleController_addSchedule(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_addSchedule, request, response });

                const controller = container.resolve(AppointmentScheduleController)

              await templateService.apiHandler({
                methodName: 'addSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAppointmentScheduleController_updateSchedule: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_IAppointmentScheduleData.id_"},
        };
        app.put('/appointment/:id',
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController)),
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController.prototype.updateSchedule)),

            async function AppointmentScheduleController_updateSchedule(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_updateSchedule, request, response });

                const controller = container.resolve(AppointmentScheduleController)

              await templateService.apiHandler({
                methodName: 'updateSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAppointmentScheduleController_removeSchedule: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/appointment/:id',
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController)),
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController.prototype.removeSchedule)),

            async function AppointmentScheduleController_removeSchedule(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_removeSchedule, request, response });

                const controller = container.resolve(AppointmentScheduleController)

              await templateService.apiHandler({
                methodName: 'removeSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAppointmentScheduleController_confirmSchedule: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"IConfirmScheduleData"},
        };
        app.put('/appointment/confirmed/:id',
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController)),
            ...(fetchMiddlewares<RequestHandler>(AppointmentScheduleController.prototype.confirmSchedule)),

            async function AppointmentScheduleController_confirmSchedule(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAppointmentScheduleController_confirmSchedule, request, response });

                const controller = container.resolve(AppointmentScheduleController)

              await templateService.apiHandler({
                methodName: 'confirmSchedule',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
