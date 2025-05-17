"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAuth = firebaseAuth;
const databaseConfig_1 = __importDefault(require("../database/databaseConfig"));
function firebaseAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token not found.' });
    }
    const token = authHeader.split(' ')[1];
    databaseConfig_1.default
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
        req.user = decodedToken;
        next();
    })
        .catch((error) => {
        return res.status(401).json({ message: 'Token invalid or expired.' });
    });
}
;
