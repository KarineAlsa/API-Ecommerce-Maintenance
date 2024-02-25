import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";

export default class GetAllProductsByCathegoryUseCase {

    constructor(readonly repository:ProductInterface) {}

    async run(cathegory:string):Promise<Product[]|any> {
        try {

            return await this.repository.searchProductsByCathegory(cathegory);

        }catch(error) {

        }
    }

}