import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({
            errors: result.error.issues.map((err) => ({
                field: err.path.join("."),
                message: err.message,
            })),
        });
    }
    next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({ error: result.error.issues });
    }
    next();
};
