"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.JWT_SECRET_KEY;
if (!secretKey) {
    throw new Error("JWT_SECRET_KEY is not defined in environment variables.");
}
const generateToken = ({ email }) => {
    const payload = { email };
    const signOptions = {
        expiresIn: '7d',
    };
    const token = (0, jsonwebtoken_1.sign)(payload, secretKey, signOptions);
    return token;
};
exports.generateToken = generateToken;
