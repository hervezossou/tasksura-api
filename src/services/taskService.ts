import { PrismaClient, Task } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllTasks = async ():Promise<Task[]> => {
    return await prisma.task.findMany();
};

export const createTask = async (taskData: Omit<Task, "id" | "createdAt">):Promise<Task> => {
    return await prisma.task.create({
        data: taskData,
    });
};

export const updateTask = async (id: number, updates: Partial<Task>):Promise<Task | null> => {
    return await prisma.task.update({
        where: { id }, data: updates
    });
};

export const deleteTask = async (id: number): Promise<void> => {
    await prisma.task.delete({ 
        where: { id } 
    });
};

export const getTaskById = async (id: number): Promise<Task | null> => {
    return await prisma.task.findUnique({ where: { id } });
};

