import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";

export default class SearchOrderUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run( { id}: {
        id: string;
        
      } ):Promise<Order|any> {
        try {

            return await this.repository.searchOrder(id);

        }catch(error) {

        }
    }

}