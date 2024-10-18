// import { createCategory, getManyCategory, getUniqueCategory, updadateCategory } from './../models/categoryModel';
import { Response, Request } from 'express';
import { CategoryService } from '../services/categoryService';

const categoryService = new CategoryService();
export class CategoryController{

    async get(req: Request, res: Response) {
        try {
            const category = await categoryService.getAllCategory();
            res.json(category);                
        } catch (error) {
            res.status(404).json(error);
        }

    }
    async getById(req: Request, res: Response) { 
        const { id } = req.params;
        const category = await categoryService.getCategoryById(parseInt(id));
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: 'Categoria não encontrada' });
        }
    }
    async create(req: Request, res: Response) {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    }

    async delete(req: Request, res: Response) { 
    const { id } = req.params;
         await categoryService.deleteCategory(parseInt(id));
        res.status(204).json();
    }

    async update(req: Request, res: Response) { 
        const { id } = req.params;
        const category = await categoryService.updadateCategory(parseInt(id), req.body);
        if (!category) {
            res.status(404).json({ error: 'Categoria não encontrada' });
        } else {
            res.json(category);            
        }

    }
}
// export const createCategoryController = async (req: Request, res: Response)=>{
//     try {
//         const { name } = req.body.name;
//         const category = await createCategory(name);
//         res.status(201).json(category);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Erro interno do servidor' });
//     }
// }
// export const getCategoryController = async (req: Request, res: Response) =>
// {
//     try {
//         const category = await getManyCategory();
//         if(!category) return res.status(404).json({ error: 'Categoria não encontrada' });
//         res.json(category);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Erro interno do servidor' });
//     }
// }
// export const getUniqueCategoryController = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const category = await getUniqueCategory(parseInt(id));
//         if(!category) return res.status(404).json({ error: 'Categoria não encontrada' });
//         res.json(category);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Erro interno do servidor' });
//     }
// }