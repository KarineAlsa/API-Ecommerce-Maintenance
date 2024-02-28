import { Promotion } from "../../Domain/Entity/Promotion";
import  PromotionInterface  from "../../Domain/Port/PromotionInterface";

export default class SearchProductUseCase {

    constructor(readonly repository:PromotionInterface) {}

    async run( { code}: {
        code: string;
        
      } ):Promise<Promotion|any> {
        try {

            return await this.repository.searchPromotion(code);

        }catch(error) {

        }
    }

}