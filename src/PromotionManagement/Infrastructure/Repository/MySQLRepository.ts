import { Promotion } from "../../Domain/Entity/Promotion";
import PromotionInterface  from "../../Domain/Port/PromotionInterface";
import query from "../../../Database/mysql";

export default class PromotionMySQLRepository implements PromotionInterface {
    async createPromotion(promotion: Promotion): Promise<any> {
        const sql = "INSERT INTO promotions (type, value,code) VALUES (?,?,?)";
        
        const params: any[] = [promotion.type, promotion.value,promotion.code];
        try {
            const [result]: any = await query(sql, params);

            if (result) {
                promotion.id = result.insertId
                return promotion

            } else {
                return false
            }
        }
        catch (error) {
            return false
        }
    }
    async searchPromotion(code: string): Promise<any> {
        const sql = "SELECT * FROM promotions WHERE code = ?";
        const params: any[] = [code];
        try {
            const [[result]]: any = await query(sql, params);
            
            if (result){
                return {id:result.id,type:result.type,value: result.value, code:result.code};
            }
            else {
                return false;
            }
        }catch (error) {
            return false;
        }
    }
    async deletePromotion(id: string): Promise<any> {
        const sql = "DELETE FROM promotions WHERE id = ?";
        const params: any[] = [id];
        try {
            const [result]: any = await query(sql, params);
            console.log(result);
            return result
        }

        catch (error) {
            return false
        }
    }
    async listAllPromotions(): Promise<any> {
        const sql = "SELECT * FROM promotions";
        const params: any[] = [];
        try {
            const [result]: any = await query(sql, params);
            
        if (result.length>0){
            return result
        }
        else {
            return "No hay productos";
        }
        }
        catch (error) {
            return false;
        }
    }

}