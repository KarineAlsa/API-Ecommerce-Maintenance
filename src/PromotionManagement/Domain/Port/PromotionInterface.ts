import { Promotion } from "../Entity/Promotion";

export default interface PromotionInterface {
    createPromotion(promotion:Promotion):Promise<Promotion|any>;
    searchPromotion(code:string):Promise<Promotion|any>
    deletePromotion(id:string):Promise<Promotion|any>;
    listAllPromotions():Promise<Promotion[]|any>;
}