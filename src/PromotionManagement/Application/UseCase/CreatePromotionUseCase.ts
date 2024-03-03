
import { Promotion } from "../../Domain/Entity/Promotion";
import  PromotionInterface  from "../../Domain/Port/PromotionInterface";
import * as crypto from 'crypto';


export default class CreatePromotionUseCase {

    constructor(readonly repository:PromotionInterface) {}

    async run( { name, description,type, value, code,  }: {
        name: string;
        description: string;
        type: string;
        value: number; 
        code: string;
        
      } ):Promise<Promotion|any> {
        try {

            let product = new Promotion(
                name,
                description,
                type,
                value,
                code,
                
            );

            return await this.repository.createPromotion(product);

        }catch(error) {

        }
    }

}