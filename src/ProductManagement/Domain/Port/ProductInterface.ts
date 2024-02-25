import { Product } from "../Entity/Product";

export default interface UserInterface {
    createProduct(product:Product):Promise<Product|any>;
    searchProduct(id:string):Promise<Product|any>
    deleteProduct(id:string):Promise<Product|any>;
    listAllProducts():Promise<Product[]|any>;
    updateProduct(id:string,updateFields:any):Promise<Product|any>;
    searchProductsByBrand(brand:string):Promise<Product[]|any>;
    searchProductsByCathegory(cathegory:string):Promise<Product[]|any>;
}