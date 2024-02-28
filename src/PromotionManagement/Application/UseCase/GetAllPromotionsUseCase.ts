import { Promotion } from "../../Domain/Entity/Promotion";
import  PromotionInterface  from "../../Domain/Port/PromotionInterface";

export default class GetAllPromotionUseCase {

    constructor(readonly repository:PromotionInterface) {}

    async run():Promise<Promotion[]|any> {
        try {

            return await this.repository.listAllPromotions();

        }catch(error) {

        }
    }

}