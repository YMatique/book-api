import { BookModel } from "../models/bookModel";
import { Book } from "@prisma/client";
const bookModel = new BookModel();

export class BookService{
    async createBook(data: { title: string, categoryId: number, authorId: number, description: string, image: string, publicationDate:string}): Promise<Book>{
        return await bookModel.create(data);
    }
    async updateBook(id: number, data: { title: string, categoryId: number, authorId: number, description: string, image: string, publicationDate: string }) {
        return await bookModel.update(id, data);
    }
    async deleteBook(id: number): Promise<void>{
        return await bookModel.delete(id);
    }
    async getAllBooks(): Promise<Book[]>{
        return await bookModel.findMany();
    }
    async getBookById(id: number): Promise<Book|null>{
        return await bookModel.findUnique(id);
    }
}