import { PrismaClient, Author } from "@prisma/client";

const prisma = new PrismaClient();
export class AuthorModel{
    async create(data: { name: string }): Promise<Author>{
        return await prisma.author.create({data});
    }
    async findMany(): Promise<Author[]>{
        return await prisma.author.findMany();
    }
    async findUnique(id: number): Promise<Author | null>{
        return await prisma.author.findUnique({where: { id }});
    }
    async update(id: number, data: { name: string }): Promise<Author>{
        return await prisma.author.update({where: { id }, data});
    }
    async delete(id: number): Promise<void>{
        await prisma.author.delete({ where: { id } });
    }
}