import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const taskSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  status: z.enum(["todo", "ongoing", "done"]),
  priority: z.enum(["low", "medium", "high"]),  
});

export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const result = taskSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.issues });
  }
  next();
};