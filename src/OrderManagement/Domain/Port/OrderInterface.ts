import { Order } from "../Entity/Order";

export default interface OrderInterface {
    createOrder(Order:Order):Promise<Order|any>;
    searchOrder(id:string):Promise<Order|any>
    deleteOrder(id:string):Promise<Order|any>;
    listAllOrders():Promise<Order[]|any>;
    updateOrder(id:string,updateFields:any):Promise<Order|any>;
    getStatusOrder(code_order:string):Promise<Order[]|any>;
}