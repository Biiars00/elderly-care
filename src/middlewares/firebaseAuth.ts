import databaseConfig from '../database/databaseConfig';
import { NextFunction, Request, Response } from 'express';

export function firebaseAuth(req: Request, res: Response, next: NextFunction): any {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token not found.' });
  }

    const token = authHeader.split(' ')[1];

    databaseConfig
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
            (req as any).user = decodedToken;
            next();
        })
        .catch((error) => {
        return res.status(401).json({ message: 'Token invalid or expired.' });
        });
};