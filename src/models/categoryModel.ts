import { Category, PrismaClient } from "@prisma/client";
// import exp from "constants";

const prisma = new PrismaClient();
export class CategoryModel{
    async create(data: { name: string }): Promise<Category>{
        
        return await prisma.category.create({data});
    }
    async findMany(): Promise<Category[]>{
        
        return await prisma.category.findMany();
    }
    
    async findUnique(id: number): Promise<Category|null>{
        const category = await prisma.category.findUnique({ where: { id: Number(id) } });
        if (category) {
            return category;
        } else {
            throw new Error('Categoria nao encontrada');
        }
    }
    async update(id: number, data:{name:string}): Promise<Category>{
        return await prisma.category.update({ where: { id }, data });
    }
    async delete(id: number): Promise<Category>{
        return await prisma.category.delete({ where: { id } });
    }
}



// export const createCategory = async (name:string)=>{
//     return await prisma.category.create({data:{name}});
// }
// export const getManyCategory = async () => {
//     return await prisma.category.findMany();
// }
// export const getUniqueCategory = async (id: number) => {
//     return await prisma.category.findUnique({where:{id:id}})
// }
// export const updadateCategory = async (id: number, name: string) => {
//     return await prisma.category.update({ where: { id }, data: { name } });
// }
// export const deleteCategory = async (id: number)=>{
//     return await prisma.category.delete({ where: { id: id } });
// }