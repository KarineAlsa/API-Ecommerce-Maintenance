
import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';


export default class CreateOrderUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run( { paymentMethod,id_user,products,code_promotion, subtotal, costo_envio,total }: {
        paymentMethod:string;
        id_user:number;
        products:Array<any>;
        code_promotion:string;
        subtotal:number;
        costo_envio:number;
        total:number;
      } ):Promise<Order|any> {
        try {
            const code_track = uuidv4();
            let order = new Order(
                paymentMethod,
                id_user,
                products,
                code_promotion,
                subtotal,
                costo_envio,
                total,
                code_track,
                "preparando"
               
            );

            return await this.repository.createOrder(order);

        }catch(error) {

        }
    }

}