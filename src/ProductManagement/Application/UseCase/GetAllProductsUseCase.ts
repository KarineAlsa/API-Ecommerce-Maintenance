import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";

export default class GetAllUseCase {

    constructor(readonly repository:ProductInterface) {}

    async run():Promise<Product[]|any> {
        try {

            return await this.repository.listAllProducts();

        }catch(error) {

        }
    }

}