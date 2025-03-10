import express, { Request, Response, NextFunction } from "express";
import { generateToken, validatePassword } from "../services/authService.js";
import { findUserByEmail } from "../services/userService.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Function to register a new user
export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await findUserByEmail(email);

        if(existingUser) {
            res.status(400).json({ error: "User already exists" });
        }

        const newUser = await prisma.user.create({
            data: { email, password: hashedPassword },
        });
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
}

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        if(!user) {
            res.status(400).json({ error: "User not found" });
        }

        const isPasswordValid = await validatePassword(password, user!.password);
        if(!isPasswordValid) {
            res.status(400).json({ error: "Invalid password" });
            return;
        }

        // Generate a token
        const token = generateToken(user!.id, user!.email);

        // send the token in the response
        res.status(200).json({ token, user : {id: user!.id, email: user!.email} });

    } catch(error) {
        res.status(500).json({ error: "Failed to login user" });
    }
}