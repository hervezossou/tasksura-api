import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

// Function to find a user by email
export const findUserByEmail = async (email: string): Promise<User | null> => {
    return await prisma.user.findUnique({ where: { email } });
};

// Function to find a user by id
export const findUserById = async (id: number): Promise<User | null> => {
    return await prisma.user.findUnique({ where: { id } });
};

// Function to update a user
export const updateUser = async (id: number, data: Partial<User>): Promise<User | null> => {
    return await prisma.user.update({ where: { id }, data });
};

