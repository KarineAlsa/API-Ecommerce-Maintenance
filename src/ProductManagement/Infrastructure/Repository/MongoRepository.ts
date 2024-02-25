
import { Product } from "../../Domain/Entity/Product";
import  ProductInterface  from "../../Domain/Port/ProductInterface";
import { connectToDatabase } from '../../../Database/mongo';
import { collections } from "../../../Database/mongo";
import { ObjectId } from 'mongodb';

export default class ProductMongooseRepository implements ProductInterface {
    async createProduct(product: Product): Promise<any> {
        try {
            const collectionName = "products"
            await connectToDatabase(collectionName);

            const result = await collections.name?.insertOne(product);

            if (result && result.insertedId) {
              return {id:result.insertedId,name:product.name,price:product.price,description:product.description,cathegory:product.cathegory,brand:product.brand,provider_id:product.provider_id}
              
            } else {
                throw new Error("Error al insertar el producto en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de guardado`);
        }
    }
    async searchProduct(id: string): Promise<any> {
        try {
            const collectionName = "products"
            await connectToDatabase(collectionName);
           
            const query = { _id: new ObjectId(id) };
    
            const product = await collections.name?.findOne(query);
    
            if (product) {
                return {name:product.name,price:product.price,description:product.description,cathegory:product.cathegory,brand:product.brand,provider_id:product.provider_id}
                
            } else {
                throw new Error("Error al encontrar el producto en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de búsqueda`);
        }
    }
    async deleteProduct(id: string): Promise<any> {
        try {
            const collectionName = "products"
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
    async listAllProducts(): Promise<any> {
        try {
            const collectionName = "products"
            await connectToDatabase(collectionName);
            const products = (await collections.name?.find({}).toArray());
            
            if (products) {
              
              return products.map((product) => new Product( product.name, product.price, product.description, product.cathegory,product.brand, product.provider_id,product._id));
            } else {
            
              console.error('La consulta a la base de datos no devolvió resultados.');
              return 'Ocurrió un error';
            }
          } catch (error) {
            console.error(error);
            return 'Ocurrió un error';
          }
    }
    async updateProduct(id: string, updateFields: any): Promise<any> {
        try {
            const collectionName = "products"
            await connectToDatabase(collectionName);
            
            const pudate = updateFields
            const query = { _id: new ObjectId(id) };
            const product = await collections.name?.updateOne(query, { $set: pudate });
            console.log(product)
            if (product) {
                return true
            }
        } catch (error) {
            return false
        }
    }
    async searchProductsByBrand(brand: string): Promise<any> {
        try {
            const collectionName = "products"
            await connectToDatabase(collectionName);
            const query = { brand: brand };
            const products = (await collections.name?.find(query).toArray());
            
            if (products && products?.length>0){
              
              return products.map((product) => new Product( product.name, product.price, product.description, product.cathegory,product.brand, product.provider_id,product._id));
            } else {
            
                return false
            }
          } catch (error) {
            console.error(error);
            return 'Ocurrió un error';
          }
    }
    async searchProductsByCathegory(cathegory: string): Promise<any> {
        try {
            const collectionName = "products"
            await connectToDatabase(collectionName);
            const query = { cathegory: cathegory };
            const products = (await collections.name?.find(query).toArray());
            console.log(products)
            if (products && products?.length>0) {
              
              return products.map((product) => new Product( product.name, product.price, product.description, product.cathegory,product.brand, product.provider_id,product._id));
            } else {
            
              return false
            }
          } catch (error) {
            console.error(error);
            return 'Ocurrió un error';
          }
    }
}