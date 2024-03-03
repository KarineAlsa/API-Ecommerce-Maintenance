
import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";


export default class UpdateOrderUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run(id:string, updateFields:any):Promise<Order|any> {
        try {

            return await this.repository.updateOrder(id,updateFields);

        }catch(error) {

        }
    }

}