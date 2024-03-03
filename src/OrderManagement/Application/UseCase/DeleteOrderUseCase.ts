import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";

export default class DeleteOrderUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<Order|any> {
        try {

            return await this.repository.deleteOrder(id);

        }catch(error) {

        }
    }

}