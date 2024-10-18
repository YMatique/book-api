import { PrismaClient, Book } from "@prisma/client";

const prisma = new PrismaClient();
export class BookModel{
    async findMany(): Promise<Book[]>{
        return await prisma.book.findMany();
    }
    async findUnique(id: number): Promise<Book | null>{
        return await prisma.book.findUnique({where: { id }});
    }
    async create(data: { title: string, authorId: number, categoryId: number, description: string, image: string, publicationDate: string }): Promise<Book>{
        return await prisma.book.create({data});
    }
    async update(id: number, data: { title?: string, authorId?: number, categoryId?: number, description?: string, image?: string, publicationDate?: string }): Promise<Book>{
        return await prisma.book.update({where: { id }, data});
    }
    async delete(id: number): Promise<void>{
        await prisma.book.delete({ where: { id } });
    }
}