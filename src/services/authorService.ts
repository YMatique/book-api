import { Author } from "@prisma/client";
import { AuthorModel } from "../models/authorModel";
const author = new AuthorModel();

export class AuthorService {
    async createAuthor(data: { name: string }): Promise<Author> {
        return author.create(data);
    }
    async getAllAuthors(): Promise<Author[]> {
        return author.findMany();
    }
    async getAuthorById(id: number): Promise<Author|null> {
        return author.findUnique(id);
    }
    async updateAuthor(id:number,data: { name: string }): Promise<Author>{
        return author.update(id, data);
    }
    async deleteAuthor(id: number): Promise<void> {
        await author.delete(id);
    }
}