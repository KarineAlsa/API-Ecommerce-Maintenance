import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";

export default class GetAllProductsByBrandUseCase {

    constructor(readonly repository:ProductInterface) {}

    async run(brand:string):Promise<Product[]|any> {
        try {

            return await this.repository.searchProductsByBrand(brand);

        }catch(error) {

        }
    }

}