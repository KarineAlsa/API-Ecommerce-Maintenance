import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";

export default class SearchOrderByCodeUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run( { code_order}: {
        code_order: string;
        
      } ):Promise<Order|any> {
        try {

            return await this.repository.getStatusOrder(code_order);

        }catch(error) {

        }
    }

}