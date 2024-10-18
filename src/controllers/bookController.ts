import { BookService } from "../services/bookService";
import { Request, Response } from "express";

const bookService = new BookService();

export class BookController{
    async get(req: Request, res: Response)
    {
        try {
            const books = await bookService.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const book = await bookService.getBookById(Number(id));
            if (book) {
                res.status(200).json(book);
            } else { 
                res.status(404).json({ error: 'Livro não encontrado' });
            }
        } catch (error) { 
            res.status(500).json(error);
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await bookService.deleteBook(Number(id));
            res.status(204).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async update(req: Request, res: Response) { 
        const { id } = req.params;
        try {
            const book = await bookService.updateBook(Number(id), req.body);
            if (book) {
                res.status(200).json(book);                
            } else {
                res.status(404).json({err:"Livro não encontrado"})
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
    async create(req: Request, res: Response) { 
        try {
            const book = await bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}