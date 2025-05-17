"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
        if (!JWT_SECRET_KEY) {
            throw new Error('JWT_SECRET is not defined');
        }
        (0, jsonwebtoken_1.verify)(token, JWT_SECRET_KEY);
        const { userId, email } = (0, jsonwebtoken_1.decode)(token);
        req.userId = userId;
        req.email = email;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
exports.authMiddleware = authMiddleware;
