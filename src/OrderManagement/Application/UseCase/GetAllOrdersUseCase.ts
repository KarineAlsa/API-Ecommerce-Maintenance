import { Order } from "../../Domain/Entity/Order";
import  OrderInterface  from "../../Domain/Port/OrderInterface";

export default class GetAllUseCase {

    constructor(readonly repository:OrderInterface) {}

    async run():Promise<Order[]|any> {
        try {

            return await this.repository.listAllOrders();

        }catch(error) {

        }
    }

}