import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";

export default class SearchOrderUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run( { code_order}: {
        code_order: string;
        
      } ):Promise<Order|any> {
        try {

            return await this.repository.searchOrder(code_order);

        }catch(error) {

        }
    }

}