import { sign, Secret, SignOptions  } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

interface TokenPayload {
  email: string;
}

export const generateToken = ({ email }: TokenPayload): string => {
  const payload = { email};

  const signOptions: SignOptions = {
    expiresIn: '7d',
  };

  const token = sign(payload, secretKey! as Secret, signOptions);

  return token;
};