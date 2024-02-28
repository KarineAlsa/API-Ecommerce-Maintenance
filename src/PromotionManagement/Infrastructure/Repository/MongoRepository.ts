
import { Promotion } from "../../Domain/Entity/Promotion";
import  PromotionInterface  from "../../Domain/Port/PromotionInterface";
import { connectToDatabase } from '../../../Database/mongo';
import { collections } from "../../../Database/mongo";
import { ObjectId } from 'mongodb';

export default class PromotionMongooseRepository implements PromotionInterface {
    async createPromotion(promotion: Promotion): Promise<any> {
        try {
            const collectionName = "promotions"
            await connectToDatabase(collectionName);

            const result = await collections.name?.insertOne(promotion);

            if (result && result.insertedId) {
              return {id:result.insertedId,type:promotion.type,value:promotion.value,code:promotion.code}
              
            } else {
                throw new Error("Error al insertar la promoción en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de guardado`);
        }
    }
    async searchPromotion(code: string): Promise<any> {
        try {
            const collectionName = "promotions"
            await connectToDatabase(collectionName);
           
            const query = { code: code };
    
            const product = await collections.name?.findOne(query);
    
            if (product) {
                return {type:product.type,value:product.value,code:product.code, id:product._id}
                
            } else {
                throw new Error("Error al encontrar la promoción en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de búsqueda`);
        }
    }
    async deletePromotion(id: string): Promise<any> {
        try {
            const collectionName = "promotions"
            await connectToDatabase(collectionName);
           
            const query = { _id: new ObjectId(id) };
    
            const result = await collections.name?.deleteOne(query);
            
            if (result!=undefined && result?.deletedCount>0) {
                return true;
            } else {
                return false;
            }
        }catch (error) {
            return false;
        }
    }
    async listAllPromotions(): Promise<any> {
        try {
            const collectionName = "promotions"
            await connectToDatabase(collectionName);
            const promotions = (await collections.name?.find({}).toArray());
            
            if (promotions && promotions.length>0) {
              
              return promotions.map((promotion) => new Promotion( promotion.type, promotion.value, promotion.code, promotion._id));
            } else {
            
              return false
            }
          } catch (error) {
            console.error(error);
            return 'Ocurrió un error';
        }
    }
    
    
    
    
}
