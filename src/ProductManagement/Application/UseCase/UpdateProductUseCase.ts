
import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";


export default class UpdateProductUseCase {

    constructor(readonly repository:ProductInterface) {}

    async run(id:string, updateFields:any):Promise<Product|any> {
        try {

            return await this.repository.updateProduct(id,updateFields);

        }catch(error) {

        }
    }

}