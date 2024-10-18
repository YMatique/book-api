import { Category } from '@prisma/client';
import { CategoryModel,} from './../models/categoryModel';

const categoryModel = new CategoryModel();
export class CategoryService {

    async createCategory(data:{name:string}): Promise<Category>{
        return categoryModel.create(data);
    }

    async getAllCategory(): Promise<Category[]>{
        return await categoryModel.findMany();            
    }
    async getCategoryById(id: number): Promise<Category|null>{
        return categoryModel.findUnique(id);
    }
    async updadateCategory(id: number, data: { name:string }): Promise<Category>{
        return categoryModel.update(id, data);
    }
    async deleteCategory(id: number): Promise<void>{
        await categoryModel.delete(id);
    }
}
    