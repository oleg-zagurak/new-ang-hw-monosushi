import { ICategories } from "./category"

export interface IProductReq {
    category: ICategories,
    name: string,
    path: string,
    ingredients: string,
    weight: number,
    price: number,
    imagePath: string,
    count: number
}

export interface IProduct extends IProductReq {
    id: number
}
