// import { sign, Secret, SignOptions  } from "jsonwebtoken";

// const secretKey: Secret = process.env.JWT_SECRET_KEY || '';
// const expiresIn = process.env.JWT_EXPIRES_IN || '';

// interface TokenPayload {
//   userId: string;
//   email: string;
// }

// export const generateToken = ({ userId, email }: TokenPayload): string => {
//     const payload = { userId, email};

//     const signOptions: SignOptions = {
//     expiresIn: expiresIn as SignOptions['expiresIn'],
//   };

//     const token = sign(payload, secretKey, signOptions);

//     return token;
// };