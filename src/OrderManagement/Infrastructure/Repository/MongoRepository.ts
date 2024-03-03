
import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";
import { connectToDatabase } from '../../../Database/mongo';
import { collections } from "../../../Database/mongo";
import { ObjectId } from 'mongodb';

export default class OrderMongooseRepository implements OrderInterface {
    async updateOrder(id: string, updateFields: any): Promise<any> {
        try {
        
            const collectionName = "orders"
            await connectToDatabase(collectionName);
            
            const pudate = updateFields
            const query = { _id: new ObjectId(id) };
            
            const order = await collections.name?.updateOne(query, { $set: pudate });
            
            if (order) {
                return true
            }
        } catch (error) {
            return "No se encontró con el id"
        }
    }
    async getStatusOrder(code_order: string): Promise<any> {
        try {
            const collectionName = "orders"
            await connectToDatabase(collectionName);
           
            const query = { code_tracking: code_order };
    
            const order = await collections.name?.findOne(query);
    
            if (order) {
                return {status:order.status}
                
            } else {
                throw new Error("Error al encontrar la orden en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de búsqueda`);
        }
    }
    async createOrder(order: Order): Promise<any> {
        try {
            const collectionName = "orders"
            await connectToDatabase(collectionName);

            const result = await collections.name?.insertOne(order);

            if (result && result.insertedId) {
              return {id:result.insertedId,paymentMethod:order.paymentMethod,id_user:order.id_user, products:order.products, total:order.total, status:order.status, code: order.code_tracking}
              
            } else {
                throw new Error("Error al insertar la orden en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de guardado`);
        }
    }
    async searchOrder(id: string): Promise<any> {
        try {
            const collectionName = "orders"
            await connectToDatabase(collectionName);
           
            const query = { _id: new ObjectId(id) };
    
            const order = await collections.name?.findOne(query);
    
            if (order) {
                return {payment:order.paymentMethod,
                    productos:order.products,
                    
                    subtotal:order.subtotal,
                    envio:order.costo_envio,
                    total:order.total,
                    codigo:order.code_tracking,
                    status:order.status,
                    id:order._id.toHexString()}
                
            } else {
                throw new Error("Error al encontrar la orden en la base de datos");
            }
        }catch (error) {
            throw new Error(`Error en la operación de búsqueda`);
        }
    }
    async deleteOrder(id: string): Promise<any> {
        try {
            const collectionName = "orders"
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
    async listAllOrders(): Promise<any> {
        try {
            const collectionName = "orders"
            await connectToDatabase(collectionName);
            const orders = (await collections.name?.find({}).toArray());
            
            if (orders) {
              
              return orders.map((order) => new Order(order.paymentMethod,
                order.id_user,
                order.products,
                order.code_promotion,

                order.subtotal,
                order.costo_envio,
                order.total,
                order.code_tracking,
                order.status,order._id));
            } else {
            
              console.error('La consulta a la base de datos no devolvió resultados.');
              return 'Ocurrió un error';
            }
          } catch (error) {
            console.error(error);
            return 'Ocurrió un error';
          }
    }
    
   
    
}