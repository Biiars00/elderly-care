"use strict";
// import { Request, Response, NextFunction } from 'express';
// import { verify, decode } from 'jsonwebtoken';
// declare module 'express' {
//   export interface Request {
//     userId?: string;
//     email?: string;
//   }
// }
// export async function expressAuthenticationRecasted(
//   request: Request,
//   securityName: string,
//   scopes?: string[],
//   response?: Response
// ): Promise<any> {
//   const authHeader = request.headers.authorization;
//   if (!authHeader?.startsWith('Bearer ')) {
//      throw new Error('No token provided');
//   }
//   const token = authHeader.split(' ')[1];
//   try {
//     const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
//     if (!JWT_SECRET_KEY) {
//       throw new Error('JWT_SECRET is not defined');
//     }
//     verify(token, JWT_SECRET_KEY as string);
//     const { userId, email } = decode(token) as { userId: string; email: string };
//     request.userId = userId;
//     request.email = email;
//     return { userId, email };
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     throw new Error('Invalid or expired token');
//   }
// }
