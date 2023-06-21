export interface IReqCategories {
    name: string,
    path: string,
    imagePath: string
}

export interface ICategories extends IReqCategories{
    id: number
}