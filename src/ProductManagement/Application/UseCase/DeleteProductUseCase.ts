import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";

export default class DeleteProductUseCase {

    constructor(readonly repository:ProductInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<Product|any> {
        try {

            return await this.repository.deleteProduct(id);

        }catch(error) {

        }
    }

}