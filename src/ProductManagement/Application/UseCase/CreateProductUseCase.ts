
import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";
import * as crypto from 'crypto';


export default class CreateProductUseCase {

    constructor(readonly repository:ProductInterface) {}

    async run( { name, price, description, cathegory,brand, provider_id }: {
        name: string;
        price: number; 
        description: string;
        cathegory: string;
        brand: string;
        provider_id: number;
      } ):Promise<Product|any> {
        try {

            let product = new Product(
                name,
                price,
                description,
                cathegory,
                brand,
                provider_id
            );

            return await this.repository.createProduct(product);

        }catch(error) {

        }
    }

}