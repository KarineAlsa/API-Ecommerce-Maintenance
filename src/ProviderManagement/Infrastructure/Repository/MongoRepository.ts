
import { Provider } from "../../Domain/Entity/Provider";
import  ProviderInterface  from "../../Domain/Port/ProviderInterface";
import { connectToDatabase } from '../../../Database/mongo';
import { collections } from "../../../Database/mongo";
import { ObjectId } from 'mongodb';

export default class ProviderMongooseRepository implements ProviderInterface {
    async createProvider(provider: Provider): Promise<any> {
        try {
            const collectionName = "providers"
            await connectToDatabase(collectionName);

            const result = await collections.name?.insertOne(provider);

            if (result && result.insertedId) {
              return {id:result.insertedId,company:provider.company,cellphone:provider.cellphone}
              
            } else {
                throw new Error("Error al insertar el proveedor en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de guardado`);
        }
    }
    async searchProvider(id: string): Promise<any> {
        try {
            const collectionName = "providers"
            await connectToDatabase(collectionName);
           
            const query = { _id: new ObjectId(id) };
    
            const provider = await collections.name?.findOne(query);
    
            if (provider) {
                return {company:provider.company,value:provider.value, id:provider._id}
                
            } else {
                throw new Error("Error al encontrar al proveedor en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de búsqueda`);
        }
    }
    async deleteProvider(id: string): Promise<any> {
        try {
            const collectionName = "providers"
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
    async listAllProviders(): Promise<any> {
        try {
            const collectionName = "providers"
            await connectToDatabase(collectionName);
            const providers = (await collections.name?.find({}).toArray());
            
            if (providers && providers.length>0) {
              
              return providers.map((provider) => new Provider( provider.company, provider.cellphone, provider._id));
            } else {
            
              return false
            }
          } catch (error) {
            console.error(error);
            return 'Ocurrió un error';
        }
    }
    
    
    
    
}
