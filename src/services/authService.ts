import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || "supersecret";

// Validate password
export const validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};       

export const generateToken = (userId: number, email: string): string => {
    return jwt.sign(
        { userId, email }, // payload
        SECRET_KEY, // secret key
        { expiresIn: "1h" } // expiration time
    );
};

/*export const verifyToken = (token: string): jwt.JwtPayload => {
    return jwt.verify(token, SECRET_KEY) as jwt.JwtPayload;
};*/
