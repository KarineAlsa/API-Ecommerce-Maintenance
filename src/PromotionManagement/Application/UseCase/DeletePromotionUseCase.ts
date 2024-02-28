import { Promotion } from "../../Domain/Entity/Promotion";
import  PromotionInterface  from "../../Domain/Port/PromotionInterface";

export default class DeletePromotionUseCase {

    constructor(readonly repository:PromotionInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<Promotion|any> {
        try {

            return await this.repository.deletePromotion(id);

        }catch(error) {

        }
    }

}