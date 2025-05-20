import { sign, Secret, SignOptions  } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey: Secret = process.env.JWT_SECRET_KEY as Secret;
const expiresIn = process.env.JWT_EXPIRES_IN;

interface TokenPayload {
  email: string;
}

export const generateToken = ({ email }: TokenPayload): string => {
    const payload = { email};

    const signOptions: SignOptions = {
    expiresIn: expiresIn as SignOptions['expiresIn'],
  };

    const token = sign(payload, secretKey, signOptions);

    return token;
};