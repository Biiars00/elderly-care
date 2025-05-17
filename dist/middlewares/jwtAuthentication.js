"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY || '';
const expiresIn = process.env.JWT_EXPIRES_IN || '';
const generateToken = ({ userId, email }) => {
    const payload = { userId, email };
    const signOptions = {
        expiresIn: expiresIn,
    };
    const token = (0, jsonwebtoken_1.sign)(payload, secretKey, signOptions);
    return token;
};
exports.generateToken = generateToken;
