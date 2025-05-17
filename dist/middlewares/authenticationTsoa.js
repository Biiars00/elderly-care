"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthenticationRecasted = expressAuthenticationRecasted;
const databaseConfig_1 = __importDefault(require("../database/databaseConfig"));
async function expressAuthenticationRecasted(request, securityName, scopes) {
    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        throw new Error('No token provided');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decodedToken = await databaseConfig_1.default.auth().verifyIdToken(token);
        return decodedToken;
    }
    catch (error) {
        console.error('Error verifying token:', error);
        throw new Error('Invalid or expired token');
    }
}
