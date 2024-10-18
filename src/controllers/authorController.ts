import { AuthorService } from "../services/authorService";
import { Request, Response } from "express";
const authorService = new AuthorService();

export class AuthorController {
  async get(req: Request, res: Response) {
    try {
      const authors = await authorService.getAllAuthors();
      res.status(200).json(authors);
    } catch (error) {
        
      res.status(404).json(error);
    }
  }
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const authors = await authorService.getAuthorById(Number(id));
        if (authors) {
            res.status(200).json(authors);
        } else {
            res.status(404).json({ error: 'Autor não encontrado' });
        }
    } catch (error) {
        res.status(404).json(error);
    }
    }
    async create(req: Request, res: Response) { 
        try {
            const author = await authorService.createAuthor(req.body);
            res.status(201).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async update(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const author = await authorService.updateAuthor(Number(id), req.body);
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async delete(req: Request, res: Response) { 
        const { id } = req.params;
        try {
            await authorService.deleteAuthor(Number(id));
            res.status(204).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
