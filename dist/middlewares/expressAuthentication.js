"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = expressAuthentication;
const jsonwebtoken_1 = require("jsonwebtoken");
async function expressAuthentication(request, securityName, scopes) {
    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        throw new Error('No token provided');
    }
    const token = authHeader.split(' ')[1];
    try {
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
        if (!JWT_SECRET_KEY) {
            throw new Error('JWT_SECRET is not defined');
        }
        const decoded = (0, jsonwebtoken_1.verify)(token, JWT_SECRET_KEY);
        request.userId = decoded.userId;
        request.email = decoded.email;
        return decoded;
    }
    catch (error) {
        console.error('Error verifying token:', error);
        throw new Error('Invalid or expired token');
    }
}
